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
import { animalGif, animalSounds } from "../types/Utilities";
import QuizAnimals from "./Quiz/QuizAnimals";

const Animals = () => {
  const [showQuiz, setShowQuiz] = useState<boolean>(false);
  const [currentAnimal, setCurrentAnimal] =
    useState<keyof typeof animalGif>("cat");

  const changeAnimal = (direction: string) => {
    const animalList = Object.keys(animalGif) as (keyof typeof animalGif)[];
    const currentIndex = animalList.indexOf(currentAnimal);

    let newIndex;
    if (direction === "right") {
      newIndex = (currentIndex + 1) % animalList.length;
    } else {
      newIndex = (currentIndex - 1 + animalList.length) % animalList.length;
    }

    setCurrentAnimal(animalList[newIndex]);
    setShowQuiz(false);
  };

  const playSound = async () => {
    console.log(currentAnimal);
    console.log("Loading Sound");
    if (currentAnimal) {
      const { sound } = await Audio.Sound.createAsync(
        animalSounds[currentAnimal]
      );
      await sound.playAsync();
    }
  };

  const toggleComponent = () => {
    setShowQuiz(!showQuiz);
  };

  return (
    <View style={styles.animals}>
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
          <QuizAnimals
            currentAnimal={currentAnimal}
            animalList={Object.keys(animalGif) as (keyof typeof animalGif)[]}
            changeAnimal={changeAnimal}
            onSelectAnswer={(isCorrect) => {
              console.log(
                `Selected ${isCorrect ? "correct" : "incorrect"} answer`
              );
            }}
          />
        ) : (
          <Image source={animalGif[currentAnimal] as any} style={styles.gif} />
        )}

        <View style={styles.buttonsContainer}>
          <TouchableOpacity
            onPress={() => changeAnimal("left")}
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
            onPress={() => changeAnimal("right")}
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
  animals: {
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

export default Animals;
