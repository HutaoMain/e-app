import React, { useState } from "react";
import { View, Text, StyleSheet, TouchableOpacity, Image } from "react-native";

const QuizColors = () => {
  const [questionIndex, setQuestionIndex] = useState<number>(0);
  const [score, setScore] = useState<number>(0);

  const questions = [
    {
      question: "What color is the sky on a clear day?",
      options: ["Blue", "Green", "Red", "Yellow"],
      correctAnswer: "Blue",
    },
    {
      question: "What color is a banana?",
      options: ["Blue", "Green", "Yellow", "Red"],
      correctAnswer: "Yellow",
    },
    {
      question: "What color is the grass?",
      options: ["Blue", "Green", "Red", "Yellow"],
      correctAnswer: "Green",
    },
  ];

  const handleAnswer = (selectedAnswer: any) => {
    if (selectedAnswer === questions[questionIndex].correctAnswer) {
      setScore(score + 1);
    }
    nextQuestion();
  };

  const nextQuestion = () => {
    if (questionIndex < questions.length - 1) {
      setQuestionIndex(questionIndex + 1);
    } else {
      // Quiz is complete, you can navigate to a result screen or reset the quiz here
    }
  };

  const currentQuestion = questions[questionIndex];

  return (
    <View style={styles.container}>
      <Text style={styles.question}>{currentQuestion.question}</Text>
      {currentQuestion.options.map((option, index) => (
        <TouchableOpacity
          key={index}
          style={styles.option}
          onPress={() => handleAnswer(option)}
        >
          <Text>{option}</Text>
        </TouchableOpacity>
      ))}
      <Text style={styles.score}>
        Score: {score}/{questions.length}
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  question: {
    fontSize: 20,
    marginBottom: 20,
  },
  option: {
    backgroundColor: "#f0f0f0",
    padding: 10,
    margin: 5,
    borderRadius: 5,
    width: 200,
    alignItems: "center",
  },
  score: {
    marginTop: 20,
    fontSize: 16,
  },
});

export default QuizColors;
