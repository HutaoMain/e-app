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

const animalGif = {
  Cat: require("../../assets/animals/cat/cat-cute.gif"),
  B: require("../../assets/letters/B/letterB.gif"),
};

const animalSounds = {
  Cat: require("../../assets/alphabetSounds/a.mp3"),
  B: require("../../assets/alphabetSounds/b.mp3"),
};

const Animals = () => {
  const [currentAnimal, setCurrentAnimal] =
    useState<keyof typeof animalGif>("Cat");

  const changeAlphabet = (direction: string) => {
    const animalList = Object.keys(animalGif) as (keyof typeof animalGif)[];
    const currentIndex = animalList.indexOf(currentAnimal);

    let newIndex;
    if (direction === "right") {
      newIndex = (currentIndex + 1) % animalList.length;
    } else {
      newIndex = (currentIndex - 1 + animalList.length) % animalList.length;
    }

    setCurrentAnimal(animalList[newIndex]);
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

  return (
    <View style={styles.animals}>
      <ImageBackground
        source={require("../../assets/background.jpg")}
        style={styles.container}
      >
        <ScreenNavbar />
        <Image source={animalGif[currentAnimal] as any} style={styles.gif} />

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
  animals: {
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

export default Animals;
