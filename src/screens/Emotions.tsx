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
import { emotionGif, emotionSounds } from "../types/Utilities";
import QuizEmotions from "./Quiz/QuizEmotions";

const Emotions = () => {
  const [showQuiz, setShowQuiz] = useState<boolean>(false);
  const [currentEmotion, setCurrentEmotion] =
    useState<keyof typeof emotionGif>("happy");

  const changeEmotion = (direction: string) => {
    const emotionList = Object.keys(emotionGif) as (keyof typeof emotionGif)[];
    const currentIndex = emotionList.indexOf(currentEmotion);

    let newIndex;
    if (direction === "right") {
      newIndex = (currentIndex + 1) % emotionList.length;
    } else {
      newIndex = (currentIndex - 1 + emotionList.length) % emotionList.length;
    }

    setCurrentEmotion(emotionList[newIndex]);
    setShowQuiz(false);
  };

  const playSound = async () => {
    console.log(currentEmotion);
    console.log("Loading Sound");
    if (currentEmotion) {
      const { sound } = await Audio.Sound.createAsync(
        emotionSounds[currentEmotion]
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
          <QuizEmotions
            currentEmotion={currentEmotion}
            emotionList={Object.keys(emotionGif) as (keyof typeof emotionGif)[]}
            onSelectAnswer={(isCorrect) => {
              console.log(
                `Selected ${isCorrect ? "correct" : "incorrect"} answer`
              );
            }}
          />
        ) : (
          <Image
            source={emotionGif[currentEmotion] as any}
            style={styles.gif}
          />
        )}

        <View style={styles.buttonsContainer}>
          <TouchableOpacity
            onPress={() => changeEmotion("left")}
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
            onPress={() => changeEmotion("right")}
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
    transform: [{ scaleX: 1.5 }, { scaleY: 1.5 }],
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

export default Emotions;
