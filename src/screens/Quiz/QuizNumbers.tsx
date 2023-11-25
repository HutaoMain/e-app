import React, { useEffect, useState } from "react";
import { View, Text, StyleSheet, TouchableOpacity, Image } from "react-native";
import { numberGif } from "../../types/Utilities";
import ConfettiCannon from "react-native-confetti-cannon";

interface QuizProps {
  currentNumber: string;
  numberList: string[];
  onSelectAnswer: (isCorrect: boolean) => void;
}

const QuizNumbers = ({
  currentNumber,
  numberList,
  onSelectAnswer,
}: QuizProps) => {
  const [showConfetti, setShowConfetti] = useState(false);
  const [answerOptions, setAnswerOptions] = useState<string[]>([]);
  const [selectedOption, setSelectedOption] = useState<string | null>(null);

  useEffect(() => {
    const shuffledOptions = [...numberList]
      .sort(() => Math.random() - 0.5)
      .filter((number) => number !== currentNumber);

    const optionsToShow = shuffledOptions.slice(0, 3);

    const allOptions = [...optionsToShow, currentNumber];

    const shuffledAllOptions = allOptions.sort(() => Math.random() - 0.5);

    setAnswerOptions(shuffledAllOptions);
  }, [currentNumber, numberList]);

  const handleOptionSelect = (option: string) => {
    setSelectedOption(option);
    if (option === currentNumber) {
      setShowConfetti(true);
      setTimeout(() => {
        setShowConfetti(false);
        onSelectAnswer(true);
        setSelectedOption(null);
      }, 5000);
    }
  };

  const handleAnswerSubmit = () => {
    if (selectedOption !== null) {
      onSelectAnswer(selectedOption === currentNumber);
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
        What is the number for the image shown?
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
              source={numberGif[option] as any}
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

export default QuizNumbers;
