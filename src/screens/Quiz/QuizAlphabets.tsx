import React, { useEffect, useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Image,
  Button,
} from "react-native";
import { alphabetGifs } from "../../types/Utilities";
import ConfettiCannon from "react-native-confetti-cannon";

interface QuizProps {
  currentAlphabet: any;
  alphabetList: string[];
  onSelectAnswer: (isCorrect: boolean) => void;
}

const QuizAlphabets = ({
  currentAlphabet,
  alphabetList,
  onSelectAnswer,
}: QuizProps) => {
  const [answerOptions, setAnswerOptions] = useState<string[]>([]);
  const [selectedOption, setSelectedOption] = useState<string | null>(null);
  const [showConfetti, setShowConfetti] = useState(false);

  useEffect(() => {
    // Shuffle the alphabet list and filter out the current alphabet
    const shuffledOptions = [...alphabetList]
      .sort(() => Math.random() - 0.5)
      .filter((letter) => letter !== currentAlphabet);

    // Take the first 3 shuffled options
    const optionsToShow = shuffledOptions.slice(0, 3);

    const allOptions = [...optionsToShow, currentAlphabet];

    const shuffledAllOptions = allOptions.sort(() => Math.random() - 0.5);

    setAnswerOptions(shuffledAllOptions);
  }, [currentAlphabet, alphabetList]);

  const handleOptionSelect = (option: string) => {
    setSelectedOption(option);
    if (option === currentAlphabet) {
      setShowConfetti(true);
      // Additional logic for displaying correct answer message can be added here
      setTimeout(() => {
        setShowConfetti(false);
        onSelectAnswer(true);
        setSelectedOption(null);
      }, 5000); // Adjust the duration as needed
    }
  };

  const handleAnswerSubmit = () => {
    if (selectedOption !== null) {
      onSelectAnswer(selectedOption === currentAlphabet);
      setSelectedOption(null);
    }
  };

  return (
    <View
      style={{
        width: 400,
        height: 400,
        justifyContent: "space-around",
        alignItems: "center",
      }}
    >
      <Text style={styles.questionText}>
        What is the letter for the image shown?
      </Text>
      <View style={styles.optionsContainer}>
        {answerOptions.map((option, index) => (
          <TouchableOpacity
            key={index}
            style={[
              styles.optionButton,
              selectedOption === option && styles.selectedOption,
            ]}
            onPress={() => handleOptionSelect(option)}
          >
            <Text style={styles.optionText}>{option}</Text>
            <Image
              source={alphabetGifs[option] as any} // Replace with your actual source
              style={styles.optionImage}
            />
          </TouchableOpacity>
        ))}
      </View>

      <TouchableOpacity
        style={styles.submitButton}
        onPress={handleAnswerSubmit}
      >
        <Text style={styles.submitButtonText}>Submit Answer</Text>
      </TouchableOpacity>

      {showConfetti && (
        <ConfettiCannon
          count={200}
          origin={{ x: -10, y: 0 }}
          explosionSpeed={300}
          fallSpeed={2000}
          autoStart
        />
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  quizContainer: {
    alignItems: "center",
    marginTop: 20,
  },
  questionText: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 10,
    width: "100%",
    textAlign: "center",
  },
  optionsContainer: {
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
    flexWrap: "wrap",
  },
  optionButton: {
    alignItems: "center",
    backgroundColor: "#81b0ff",
    padding: 10,
    borderRadius: 50,
    margin: 5,
    width: 150, // Adjust the width as needed
  },
  selectedOption: {
    backgroundColor: "#f5dd4b",
  },
  optionText: {
    fontSize: 16,
    fontWeight: "bold",
    color: "white",
  },
  optionImage: {
    width: 50,
    height: 50,
    resizeMode: "contain",
    marginTop: 5,
  },
  submitButton: {
    width: "90%",
    borderWidth: 1,
    borderColor: "black",
    padding: 10,
    borderRadius: 10,
    backgroundColor: "#2ebbf4",
  },
  submitButtonText: {
    textAlign: "center",
    fontSize: 20,
    color: "#ffffff",
  },
});
export default QuizAlphabets;
