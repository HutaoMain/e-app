import React, { useState } from "react";
import {
  View,
  TouchableOpacity,
  Image,
  StyleSheet,
  ImageBackground,
} from "react-native";
import { Audio } from "expo-av";
import ScreenNavbar from "../components/ScreenNavbar";

const alphabetGifs = {
  A: require("../../assets/letters/A/letterA.gif"),
  B: require("../../assets/letters/B/letterB.gif"),
};

const alphabetSounds = {
  A: require("../../assets/alphabetSounds/A.mp3"),
  B: require("../../assets/alphabetSounds/b.mp3"),
};

const Alphabets = () => {
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

  return (
    <View style={styles.alphabets}>
      <ImageBackground
        source={require("../../assets/background.jpg")}
        style={styles.container}
      >
        <ScreenNavbar />
        <Image
          source={alphabetGifs[currentAlphabet] as any}
          style={styles.gif}
        />

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

export default Alphabets;
