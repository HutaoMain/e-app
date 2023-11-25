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
import { shapesGifs, shapesSounds } from "../types/Utilities";
import QuizShapes from "./Quiz/QuizShapes";

const Shapes = () => {
  const [showQuiz, setShowQuiz] = useState<boolean>(false);
  const [currentShape, setCurrentShape] =
    useState<keyof typeof shapesGifs>("circle");

  const changeShape = (direction: string) => {
    const shapeList = Object.keys(shapesGifs) as (keyof typeof shapesGifs)[];
    const currentIndex = shapeList.indexOf(currentShape);

    let newIndex;
    if (direction === "right") {
      newIndex = (currentIndex + 1) % shapeList.length;
    } else {
      newIndex = (currentIndex - 1 + shapeList.length) % shapeList.length;
    }

    setCurrentShape(shapeList[newIndex]);
    setShowQuiz(false);
  };

  const playSound = async () => {
    console.log(currentShape);
    console.log("Loading Sound");
    if (currentShape) {
      const { sound } = await Audio.Sound.createAsync(
        shapesSounds[currentShape]
      );
      await sound.playAsync();
    }
  };

  const toggleComponent = () => {
    setShowQuiz(!showQuiz);
  };

  return (
    <View style={styles.shapes}>
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
          <QuizShapes
            currentShape={currentShape}
            shapeList={Object.keys(shapesGifs) as (keyof typeof shapesGifs)[]}
            onSelectAnswer={(isCorrect) => {
              // Handle the answer, e.g., show a message or update score
              console.log(
                `Selected ${isCorrect ? "correct" : "incorrect"} answer`
              );
              // Proceed to the next question or handle as needed
            }}
          />
        ) : (
          <Image source={shapesGifs[currentShape] as any} style={styles.gif} />
        )}

        <View style={styles.buttonsContainer}>
          <TouchableOpacity
            onPress={() => changeShape("left")}
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
            onPress={() => changeShape("right")}
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
  shapes: {
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

export default Shapes;
