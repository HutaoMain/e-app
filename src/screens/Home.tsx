import { View, StyleSheet } from "react-native";
import React from "react";
import Navbar from "../components/Navbar";
import { SafeAreaView } from "react-native-safe-area-context";
import Button from "../components/Button";

const Home = () => {
  return (
    <SafeAreaView>
      <Navbar />
      <View style={styles.button_container}>
        <Button
          label="Animals"
          imageUrl={require("../../assets/buttons_assets/animal.jpg")}
          navigate="QuizAnimals"
        />
        <Button
          label="Numbers"
          imageUrl={require("../../assets/buttons_assets/numbers.jpg")}
          navigate="QuizNumbers"
        />
        <Button
          label="Alphabets"
          imageUrl={require("../../assets/buttons_assets/alphabets.jpg")}
          navigate="QuizAlphabets"
        />
        <Button
          label="Colors"
          imageUrl={require("../../assets/buttons_assets/colors.png")}
          navigate="QuizColors"
        />
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  button_container: {
    flexDirection: "row",
    flexWrap: "wrap",
    gap: 20,
    justifyContent: "center",
  },
});

export default Home;
