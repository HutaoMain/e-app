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
  one: require("../../assets/numbers/one/number1.gif"),
  two: require("../../assets/numbers/two/number2.gif"),
  three: require("../../assets/numbers/three/number3.gif"),
  four: require("../../assets/numbers/four/number4.gif"),
  five: require("../../assets/numbers/five/number5.gif"),
  six: require("../../assets/numbers/six/number6.gif"),
  // seven: require("../../assets/numbers/seven/number7.gif"),
  // eight: require("../../assets/numbers/eight/number8.gif"),
  // nine: require("../../assets/numbers/nine/number9.gif"),
  // ten: require("../../assets/numbers/ten/number10.gif"),
};

const numberSounds = {
  one: require("../../assets/numberSounds/number1.mp3"),
  two: require("../../assets/numberSounds/number2.mp3"),
  three: require("../../assets/numberSounds/number3.mp3"),
  four: require("../../assets/numberSounds/number4.mp3"),
  five: require("../../assets/numberSounds/number5.mp3"),
  six: require("../../assets/numberSounds/number6.mp3"),
  // seven: require("../../assets/numberSounds/a.mp3"),
  // eight: require("../../assets/numberSounds/b.mp3"),
  // nine: require("../../assets/numberSounds/a.mp3"),
  // ten: require("../../assets/numberSounds/b.mp3"),
};

const Numbers = () => {
  const [currentNumber, setCurrentNumber] =
    useState<keyof typeof numberGif>("one");

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
