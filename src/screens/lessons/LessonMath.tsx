import { View, Text, TouchableOpacity, Image } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { useNavigation } from "@react-navigation/native";
import { QuizStackProps } from "../../Types";

const LessonMath = () => {
  const navigate = useNavigation<QuizStackProps["navigation"]>();

  return (
    <SafeAreaView style={{ height: "100%", paddingTop: 0, marginTop: 0 }}>
      <Image
        source={require("../../../assets/math_images/math-background.jpg")}
        style={{ height: 200, width: "100%", marginBottom: 30 }}
      />
      <View style={{ width: "100%", paddingHorizontal: 20, gap: 50 }}>
        <TouchableOpacity style={{ flexDirection: "row", gap: 20 }}>
          <Image
            source={require("../../../assets/math_images/addition.png")}
            style={{ width: 75, height: 75, objectFit: "contain" }}
          />
          <View
            style={{
              backgroundColor: "#E6C55C",
              flex: 1,
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <Text
              style={{
                fontSize: 25,
                margin: 0,
                padding: 0,
              }}
            >
              Addition
            </Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity style={{ flexDirection: "row", gap: 20 }}>
          <Image
            source={require("../../../assets/math_images/subtraction.png")}
            style={{ width: 75, height: 75, objectFit: "contain" }}
          />
          <View
            style={{
              backgroundColor: "#26A9E1",
              flex: 1,
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <Text
              style={{
                fontSize: 25,
                margin: 0,
                padding: 0,
              }}
            >
              Subtraction
            </Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity style={{ flexDirection: "row", gap: 20 }}>
          <Image
            source={require("../../../assets/math_images/multiplication.png")}
            style={{ width: 75, height: 75, objectFit: "contain" }}
          />
          <View
            style={{
              backgroundColor: "#7C51A1",
              flex: 1,
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <Text
              style={{
                fontSize: 25,
                margin: 0,
                padding: 0,
              }}
            >
              Multiplication
            </Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity style={{ flexDirection: "row", gap: 20 }}>
          <Image
            source={require("../../../assets/math_images/division.png")}
            style={{ width: 75, height: 75, objectFit: "contain" }}
          />
          <View
            style={{
              backgroundColor: "#EE297B",
              flex: 1,
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <Text
              style={{
                fontSize: 25,
                margin: 0,
                padding: 0,
              }}
            >
              Division
            </Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => navigate.navigate("Home")}
          style={{
            width: "100%",
            borderWidth: 1,
            borderColor: "black",
            height: 50,
            alignItems: "center",
            justifyContent: "center",
            borderRadius: 20,
          }}
        >
          <Text>Back</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default LessonMath;
