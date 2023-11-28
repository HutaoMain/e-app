import React, { useState } from "react";
import {
  View,
  TouchableOpacity,
  Image,
  StyleSheet,
  ImageBackground,
  Switch,
  Text,
} from "react-native";
import { Audio } from "expo-av";
import ScreenNavbar from "../components/ScreenNavbar";
import QuizAlphabets from "./Quiz/QuizAlphabets";
import { alphabetGifs, alphabetSounds } from "../types/Utilities";

const Alphabets = () => {
  const [showQuiz, setShowQuiz] = useState<boolean>(false);
  const [currentAlphabet, setCurrentAlphabet] =
    useState<keyof typeof alphabetGifs>("A");

  const changeAlphabet = (direction: string) => {
    const alphabetList = Object.keys(
      alphabetGifs
    ) as (keyof typeof alphabetGifs)[];
    const currentIndex = alphabetList.indexOf(currentAlphabet);

    let newIndex;
    if (direction === "right") {
      newIndex = (currentIndex + 1) % alphabetList.length;
    } else {
      newIndex = (currentIndex - 1 + alphabetList.length) % alphabetList.length;
    }

    setCurrentAlphabet(alphabetList[newIndex]);
    setShowQuiz(false);
  };

  const playSound = async () => {
    console.log(currentAlphabet);
    console.log("Loading Sound");
    if (currentAlphabet) {
      const { sound } = await Audio.Sound.createAsync(
        alphabetSounds[currentAlphabet]
      );
      await sound.playAsync();
    }
  };

  const toggleComponent = () => {
    setShowQuiz(!showQuiz);
  };

  return (
    <View style={styles.alphabets}>
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
          <QuizAlphabets
            currentAlphabet={currentAlphabet}
            alphabetList={
              Object.keys(alphabetGifs) as (keyof typeof alphabetGifs)[]
            }
            changeAlphabet={changeAlphabet}
            onSelectAnswer={(isCorrect) => {
              console.log(
                `Selected ${isCorrect ? "correct" : "incorrect"} answer`
              );
            }}
          />
        ) : (
          <Image
            source={alphabetGifs[currentAlphabet] as any}
            style={styles.gif}
          />
        )}

        <View style={styles.buttonsContainer}>
          <TouchableOpacity
            onPress={() => changeAlphabet("left")}
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
            onPress={() => changeAlphabet("right")}
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
  alphabets: {
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
    marginTop: 30,
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
});

export default Alphabets;
