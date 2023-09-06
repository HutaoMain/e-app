import { View, Text, Image, StyleSheet } from "react-native";
import React from "react";

const Navbar = () => {
  return (
    <View style={styles.container}>
      <View>
        <Text style={styles.welcome}>Welcome,</Text>
        <Text style={styles.name}>Name here</Text>
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
  },
  image: {
    width: 75,
    height: 75,
    borderRadius: 100,
    marginTop: 10,
  },
  welcome: {
    fontSize: 20,
  },
  name: {
    fontSize: 18,
    fontWeight: "bold",
  },
});

export default Navbar;
