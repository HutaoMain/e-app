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
import { LinearGradient } from "expo-linear-gradient";
import { AppRouteNames, LearningStackProps } from "../types/NavigationTypes";

interface ButtonProps {
  label: string;
  imageUrl: ImageProps;
  navigate: AppRouteNames;
  colors: string[];
}

const Button = ({ label, imageUrl, navigate, colors }: ButtonProps) => {
  const navigation = useNavigation<LearningStackProps["navigation"]>();

  const handleGoTo = () => {
    navigation.navigate(navigate);
  };

  return (
    <View style={styles.button}>
      <LinearGradient
        colors={colors}
        start={{ x: 0, y: 0 }}
        end={{ x: 1, y: 0 }}
        style={styles.gradient}
      >
        <View style={styles.buttonContentContainer}>
          <Image source={imageUrl} style={styles.image} />
          <View style={{ alignItems: "flex-end", gap: 10 }}>
            <Text
              style={{
                fontFamily: "AmaticSC-Bold",
                fontSize: 50,
                marginRight: 10,
                color: "white",
              }}
            >
              {label}
            </Text>
            <TouchableOpacity
              style={styles.navigateButton}
              onPress={handleGoTo}
            >
              <Image
                style={styles.buttonImage}
                source={require("../../assets/buttons/rightArrow.png")}
              />
            </TouchableOpacity>
          </View>
        </View>
      </LinearGradient>
    </View>
  );
};

const styles = StyleSheet.create({
  button: {
    backgroundColor: "#3498db",
    borderRadius: 10,
    width: 370,
    height: 180,
  },
  gradient: {
    flex: 1,
    borderRadius: 5,
  },
  buttonContentContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    padding: 10,
    width: "100%",
  },
  navigateButton: {
    paddingRight: 20,
  },
  text: {
    color: "white",
    marginRight: 10,
    fontWeight: "bold",
    fontFamily: "AmaticSC-Regular",
    fontSize: 30,
  },
  buttonImage: {
    padding: 10,
    width: 50,
    height: 50,
  },
  image: {
    width: "50%",
    height: 170,
    resizeMode: "contain",
  },
});

export default Button;
