import { SafeAreaView, StyleSheet, View } from "react-native";
import React from "react";
import VideoList from "../components/VideoList";

const Video = () => {
  return (
    <SafeAreaView style={styles.video}>
      <View style={styles.container}>
        <VideoList />
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  video: {
    flex: 1,
  },
  container: {
    flex: 1,
    height: "100%",
    alignItems: "center",
  },
});

export default Video;
