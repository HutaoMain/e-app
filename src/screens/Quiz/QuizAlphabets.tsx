import React, { useEffect, useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Image,
  Modal,
} from "react-native";
import { alphabetGifs } from "../../types/Utilities";
import ConfettiCannon from "react-native-confetti-cannon";
import { Audio } from "expo-av";

interface QuizProps {
  currentAlphabet: any;
  alphabetList: string[];
  onSelectAnswer: (isCorrect: boolean) => void;
  changeAlphabet: (direction: string) => void;
}

const QuizAlphabets = ({
  currentAlphabet,
  alphabetList,
  onSelectAnswer,
  changeAlphabet,
}: QuizProps) => {
  const [answerOptions, setAnswerOptions] = useState<string[]>([]);
  const [selectedOption, setSelectedOption] = useState<string | null>(null);
  const [showConfetti, setShowConfetti] = useState(false);
  // ! added
  const [successModalVisible, setSuccessModalVisible] = useState(false);
  const [failureModalVisible, setFailureModalVisible] = useState(false);

  useEffect(() => {
    const shuffledOptions = [...alphabetList]
      .sort(() => Math.random() - 0.5)
      .filter((letter) => letter !== currentAlphabet);

    const optionsToShow = shuffledOptions.slice(0, 3);

    const allOptions = [...optionsToShow, currentAlphabet];

    const shuffledAllOptions = allOptions.sort(() => Math.random() - 0.5);

    setAnswerOptions(shuffledAllOptions);
  }, [currentAlphabet, alphabetList]);

  const playSoundFailure = async () => {
    console.log("Loading Success Sound");

    const { sound } = await Audio.Sound.createAsync(
      require("../../../assets/failure.mp3")
    );

    await sound.playAsync();
  };

  const playSoundSuccess = async () => {
    console.log("Loading Success Sound");

    const { sound } = await Audio.Sound.createAsync(
      require("../../../assets/success.mp3")
    );

    await sound.playAsync();
  };

  const handleOptionSelect = (option: string) => {
    setSelectedOption(option);
  };

  const handleAnswerSubmit = () => {
    if (selectedOption !== null) {
      if (selectedOption === currentAlphabet) {
        onSelectAnswer(selectedOption === currentAlphabet);
        setShowConfetti(true);
        playSoundSuccess();
        setSuccessModalVisible(true);
        setTimeout(() => {
          setShowConfetti(false);
          onSelectAnswer(true);
          setSelectedOption(null);
          setSuccessModalVisible(false);
          changeAlphabet("right");
        }, 5000);
      } else {
        playSoundFailure();
        setFailureModalVisible(true);
        setTimeout(() => {
          setFailureModalVisible(false);
        }, 3000);
      }
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
              source={alphabetGifs[option] as any}
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

      <Modal visible={successModalVisible} transparent animationType="slide">
        <View style={styles.modalContainer}>
          <Text style={styles.modalText}>Congratulations!</Text>
        </View>
      </Modal>

      <Modal visible={failureModalVisible} transparent animationType="slide">
        <View style={styles.modalContainer}>
          <Text style={styles.modalText}>Please try again.</Text>
        </View>
      </Modal>
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
  // ! added
  modalContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "rgba(0, 0, 0, 0.5)",
  },
  modalText: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#ffffff",
  },
});
export default QuizAlphabets;
