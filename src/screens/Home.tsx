import { ImageBackground, StyleSheet, View } from "react-native";
import React, { useState } from "react";
import Navbar from "../components/Navbar";
import { SafeAreaView } from "react-native-safe-area-context";
import Button from "../components/Button";
import SwipeIndicator from "../components/SwipeIndicator";
import Swiper from "react-native-swiper";

const Home = () => {
  const [activeIndex, setActiveIndex] = useState<number>(0);

  return (
    <SafeAreaView style={styles.home}>
      <ImageBackground
        source={require("../../assets/background.jpg")}
        style={styles.container}
      >
        <Navbar />
        <Swiper
          loop={false}
          showsPagination={false}
          onIndexChanged={(index) => setActiveIndex(index)}
        >
          <View style={styles.slide}>
            <View style={styles.buttonsContainer}>
              <Button
                label="Alphabets"
                imageUrl={require("../../assets/buttons/alphabets.png")}
                navigate="Alphabets"
                colors={["#609CEB", "#0063B2"]}
              />

              <Button
                label="Numbers"
                imageUrl={require("../../assets/buttons/numbers.png")}
                navigate="Numbers"
                colors={["#D2BB51", "#D29941"]}
              />

              <Button
                label="Animals"
                imageUrl={require("../../assets/buttons/animals.png")}
                navigate="Animals"
                colors={["#B5C0FE", "#A1ADFA", "#8D9BFA"]}
              />
            </View>
          </View>

          <View style={styles.slide}>
            <View style={styles.buttonsContainer}>
              <Button
                label="Shapes"
                imageUrl={require("../../assets/buttons/shapes.png")}
                navigate="Shapes"
                colors={["#609CEB", "#0063B2"]}
              />

              <Button
                label="Math"
                imageUrl={require("../../assets/buttons/math.png")}
                navigate="Math"
                colors={["#D2BB51", "#D29941"]}
              />

              <Button
                label="Emotions"
                imageUrl={require("../../assets/buttons/emotions.png")}
                navigate="Emotions"
                colors={["#B5C0FE", "#A1ADFA", "#8D9BFA"]}
              />
            </View>
          </View>
        </Swiper>
        <SwipeIndicator numberOfScreens={2} activeIndex={activeIndex} />
      </ImageBackground>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  home: {
    flex: 1,
  },
  container: {
    flex: 1,
  },
  slide: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  button_container: {
    flexDirection: "row",
    flexWrap: "wrap",
    gap: 20,
    justifyContent: "center",
  },

  //
  buttonsContainer: {
    flex: 1,
    alignItems: "center",
    gap: 15,
  },
});

export default Home;
