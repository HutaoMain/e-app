import {
  View,
  StyleSheet,
  ImageBackground,
  Image,
  TouchableOpacity,
} from "react-native";
import React, { useState } from "react";
import ScreenNavbar from "../components/ScreenNavbar";
import { Audio } from "expo-av";

const numberGif = {
  One: require("../../assets/numbers/One/giphy.gif"),
  B: require("../../assets/letters/B/letterB.gif"),
};

const numberSounds = {
  One: require("../../assets/alphabetSounds/A.mp3"),
  B: require("../../assets/alphabetSounds/b.mp3"),
};

const Numbers = () => {
  const [currentNumber, setCurrentNumber] =
    useState<keyof typeof numberGif>("One");

  const changeAlphabet = (direction: string) => {
    const numberList = Object.keys(numberGif) as (keyof typeof numberGif)[];
    const currentIndex = numberList.indexOf(currentNumber);

    let newIndex;
    if (direction === "right") {
      newIndex = (currentIndex + 1) % numberList.length;
    } else {
      newIndex = (currentIndex - 1 + numberList.length) % numberList.length;
    }

    setCurrentNumber(numberList[newIndex]);
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

  return (
    <View style={styles.numbers}>
      <ImageBackground
        source={require("../../assets/background.jpg")}
        style={styles.container}
      >
        <ScreenNavbar />
        <Image source={numberGif[currentNumber] as any} style={styles.gif} />

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
  numbers: {
    flex: 1,
  },
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    position: "relative",
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
