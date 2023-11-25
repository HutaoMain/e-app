import {
  View,
  StyleSheet,
  ImageBackground,
  Image,
  TouchableOpacity,
  Text,
  Switch,
} from "react-native";
import React, { useState } from "react";
import ScreenNavbar from "../components/ScreenNavbar";
import { Audio } from "expo-av";
import { numberGif, numberSounds } from "../types/Utilities";
import QuizNumbers from "./Quiz/QuizNumbers";

const Numbers = () => {
  const [showQuiz, setShowQuiz] = useState<boolean>(false);
  const [currentNumber, setCurrentNumber] =
    useState<keyof typeof numberGif>("one");

  const changeNumber = (direction: string) => {
    const numberList = Object.keys(numberGif) as (keyof typeof numberGif)[];
    const currentIndex = numberList.indexOf(currentNumber);

    let newIndex;
    if (direction === "right") {
      newIndex = (currentIndex + 1) % numberList.length;
    } else {
      newIndex = (currentIndex - 1 + numberList.length) % numberList.length;
    }

    setCurrentNumber(numberList[newIndex]);
    setShowQuiz(false);
  };

  const playSound = async () => {
    console.log(currentNumber);
    console.log("Loading Sound");
    if (currentNumber) {
      const { sound } = await Audio.Sound.createAsync(
        numberSounds[currentNumber]
      );
      await sound.playAsync();
    }
  };

  const toggleComponent = () => {
    setShowQuiz(!showQuiz);
  };

  return (
    <View style={styles.numbers}>
      <ImageBackground
        source={require("../../assets/background.jpg")}
        style={styles.container}
      >
        <ScreenNavbar />

        <View style={styles.toggleContainer}>
          <Text
            style={{
              fontFamily: "AmaticSC-Bold",
              fontSize: 40,
              marginRight: 10,
            }}
          >
            Switch here to go to Quiz
          </Text>
          <Switch
            value={showQuiz}
            onValueChange={toggleComponent}
            trackColor={{ false: "#767577", true: "#81b0ff" }}
            thumbColor={showQuiz ? "#f5dd4b" : "#f4f3f4"}
            ios_backgroundColor="#3e3e3e"
            style={styles.switch}
          />
        </View>

        {showQuiz ? (
          <QuizNumbers
            currentNumber={currentNumber}
            numberList={Object.keys(numberGif) as (keyof typeof numberGif)[]}
            onSelectAnswer={(isCorrect) => {
              // Handle the answer, e.g., show a message or update score
              console.log(
                `Selected ${isCorrect ? "correct" : "incorrect"} answer`
              );
              // Proceed to the next question or handle as needed
            }}
          />
        ) : (
          <Image source={numberGif[currentNumber] as any} style={styles.gif} />
        )}

        <View style={styles.buttonsContainer}>
          <TouchableOpacity
            onPress={() => changeNumber("left")}
            style={styles.button}
          >
            <Image
              source={require("../../assets/buttons/leftArrow.png")}
              style={styles.arrow}
            />
          </TouchableOpacity>

          <TouchableOpacity onPress={playSound} style={[styles.button]}>
            <Image
              source={require("../../assets/buttons/sound.png")}
              style={styles.arrow}
            />
          </TouchableOpacity>

          <TouchableOpacity
            onPress={() => changeNumber("right")}
            style={styles.button}
          >
            <Image
              source={require("../../assets/buttons/rightArrow.png")}
              style={styles.arrow}
            />
          </TouchableOpacity>
        </View>
      </ImageBackground>
    </View>
  );
};

const styles = StyleSheet.create({
  numbers: {
    flex: 1,
  },
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    position: "relative",
  },
  toggleContainer: {
    backgroundColor: "white",
    borderRadius: 10,
    paddingVertical: 7,
    paddingHorizontal: 10,
    marginTop: 40,
  },
  switch: {
    alignSelf: "center",
    transform: [{ scaleX: 1.5 }, { scaleY: 1.5 }], // Adjust the size of the switch
  },
  gif: {
    width: 400,
    height: 400,
    resizeMode: "contain",
  },
  buttonsContainer: {
    flexDirection: "row",
    justifyContent: "space-around",
    marginTop: 50,
    gap: 10,
  },
  button: {
    padding: 10,
    borderRadius: 5,
  },
  arrow: {
    width: 100,
    height: 100,
  },
  buttonText: {
    color: "white",
    fontWeight: "bold",
  },
});

export default Numbers;
