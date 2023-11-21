import { View, Text, Image, StyleSheet } from "react-native";
import React from "react";

const Navbar = () => {
  return (
    <View style={styles.container}>
      <View>
        <Text style={{ fontFamily: "AmaticSC-Bold", fontSize: 40 }}>
          Welcome,
        </Text>
        <Text style={{ fontFamily: "AmaticSC-Bold", fontSize: 30 }}>
          John Smith
        </Text>
      </View>
      <Image
        source={require("../../assets/reading.png")}
        style={styles.image}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    height: 70,
    width: "100%",
    flexDirection: "row",
    justifyContent: "space-between",
    paddingHorizontal: 20,
    alignItems: "center",
    marginBottom: 20,
    marginTop: 20,
  },
  image: {
    width: 75,
    height: 75,
    borderRadius: 100,
    marginTop: 10,
  },
});

export default Navbar;
