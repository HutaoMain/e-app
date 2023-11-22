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

const shapesGifs = {
  Circle: require("../../assets/shapes/circle/circle-clouds.gif"),
  B: require("../../assets/letters/B/letterB.gif"),
};

const shapesSounds = {
  Circle: require("../../assets/alphabetSounds/A.mp3"),
  B: require("../../assets/alphabetSounds/b.mp3"),
};

const Shapes = () => {
  const [currentAlphabet, setCurrentAlphabet] =
    useState<keyof typeof shapesGifs>("Circle");

  const changeAlphabet = (direction: string) => {
    const alphabetList = Object.keys(shapesGifs) as (keyof typeof shapesGifs)[];
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
        shapesSounds[currentAlphabet]
      );
      await sound.playAsync();
    }
  };

  return (
    <View style={styles.shapes}>
      <ImageBackground
        source={require("../../assets/background.jpg")}
        style={styles.container}
      >
        <ScreenNavbar />
        <Image source={shapesGifs[currentAlphabet] as any} style={styles.gif} />

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
  shapes: {
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

export default Shapes;
