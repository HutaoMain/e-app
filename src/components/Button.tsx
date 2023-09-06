import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  Image,
  ImageProps,
} from "react-native";
import React from "react";
import { useNavigation } from "@react-navigation/native";
import { AppRouteNames, QuizStackProps } from "../Types";

interface ButtonProps {
  label: string;
  imageUrl: ImageProps;
  navigate: AppRouteNames;
}

const Button = ({ label, imageUrl, navigate }: ButtonProps) => {
  const navigation = useNavigation<QuizStackProps["navigation"]>();

  const handleGoTo = () => {
    navigation.navigate(navigate);
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={handleGoTo} style={styles.button_container}>
        <Image source={imageUrl} style={styles.image} />
        <View style={styles.button}>
          <Text style={styles.button_text}>{label}</Text>
        </View>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: "45%",
    height: 50,
  },
  button_container: {
    alignItems: "center",
    justifyContent: "center",
    gap: 20,
    backgroundColor: "white",
    borderRadius: 20,
    width: "100%",
    height: "100%",
    flexDirection: "row",
    borderWidth: 1,
    borderColor: "black",
  },
  image: {
    width: 30,
    height: 30,
  },
  button: {},
  button_text: {},
});

export default Button;
