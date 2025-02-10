// VideoList.tsx
import React from "react";
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  ImageBackground,
} from "react-native";
import YoutubePlayer from "react-native-youtube-iframe";

interface VideoItem {
  id: string;
  videoId: string;
}

const VideoList = () => {
  const data: VideoItem[] = [
    { id: "1", videoId: "Nkmarl4ynRM?si=krRTFpBK8Pw1Ey2D" },
    { id: "2", videoId: "D0Ajq682yrA?si=gy429jGG1jg_x5jI" },
    { id: "3", videoId: "6ATbwi4kJ0w?si=ZU8A3-1swZ-pc3Gy" },
    { id: "4", videoId: "QBD7CB-rroo?si=DNonIpC2Dx2eiytY" },
    { id: "5", videoId: "tVHOBVAFjUw?si=uUtA4PUomhbfig0G" },
    { id: "6", videoId: "GQFWg0hafIA?si=Zw7tTZOcohH4bae_" },
  ];

  const renderItem = ({ item }: { item: VideoItem }) => (
    <View style={styles.videoContainer}>
      <YoutubePlayer
        height={200}
        width={360}
        play={false}
        videoId={item.videoId}
      />
    </View>
  );

  return (
    <ImageBackground
      source={require("../../assets/background.jpg")}
      style={styles.container}
    >
      <FlatList
        data={data}
        keyExtractor={(item) => item.id}
        renderItem={renderItem}
        ListHeaderComponent={() => (
          <View style={styles.header}>
            <Text style={styles.headerText}>YouTube for Kids</Text>
          </View>
        )}
      />
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  header: {
    margin: 0,
    paddingHorizontal: 0,
    paddingVertical: 20,
    backgroundColor: "#ff0000",
    alignItems: "center",
    width: "100%",
    marginBottom: 20,
  },
  headerText: {
    fontSize: 20,
    color: "white",
  },
  videoContainer: {
    height: 230,
    width: "100%",
    borderColor: "black",
    borderWidth: 1,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 8,
  },
  container: {
    width: "100%",
  },
});

export default VideoList;
