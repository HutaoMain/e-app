import React, { useEffect, useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Image,
  Button,
} from "react-native";
import ConfettiCannon from "react-native-confetti-cannon";
import { shapesGifs, shapesSounds } from "../../types/Utilities";

interface QuizShapesProps {
  currentShape: any;
  shapeList: string[];
  onSelectAnswer: (isCorrect: boolean) => void;
}

const QuizShapes = ({
  currentShape,
  shapeList,
  onSelectAnswer,
}: QuizShapesProps) => {
  const [answerOptions, setAnswerOptions] = useState<string[]>([]);
  const [selectedOption, setSelectedOption] = useState<string | null>(null);
  const [showConfetti, setShowConfetti] = useState(false);

  useEffect(() => {
    const shuffledOptions = [...shapeList]
      .sort(() => Math.random() - 0.5)
      .filter((shape) => shape !== currentShape);

    const optionsToShow = shuffledOptions.slice(0, 3);

    const allOptions = [...optionsToShow, currentShape];

    const shuffledAllOptions = allOptions.sort(() => Math.random() - 0.5);

    setAnswerOptions(shuffledAllOptions);
  }, [currentShape, shapeList]);

  const handleOptionSelect = (option: string) => {
    setSelectedOption(option);
    if (option === currentShape) {
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
      onSelectAnswer(selectedOption === currentShape);
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
        What is the shape for the image shown?
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
              source={shapesGifs[option] as any}
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

export default QuizShapes;
