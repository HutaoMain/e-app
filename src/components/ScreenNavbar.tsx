import { View, Image, StyleSheet, TouchableOpacity } from "react-native";
import React from "react";
import { useNavigation } from "@react-navigation/native";
import { LearningStackProps } from "../types/NavigationTypes";

const ScreenNavbar = () => {
  const navigation = useNavigation<LearningStackProps["navigation"]>();

  return (
    <View style={styles.screenNavbar}>
      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate("Home")}
      >
        <Image
          style={styles.icon}
          source={require("../../assets/buttons/home.png")}
        />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  screenNavbar: {
    height: 100,
    paddingHorizontal: 20,
    marginTop: 10,
    width: "100%",
    position: "absolute",
    top: 0,
  },
  button: {
    padding: 5,
  },
  icon: {
    width: 40,
    height: 40,
  },
});

export default ScreenNavbar;
