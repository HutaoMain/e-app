import { TouchableOpacity, Text, View, StyleSheet } from "react-native";
import { Audio } from "expo-av";
import { SafeAreaView } from "react-native-safe-area-context";

const alphabetData = [
  {
    letter: "A",
    audioFileName: require("../../../assets/alphabet_sounds/a.mp3"),
  },
  {
    letter: "B",
    audioFileName: require("../../../assets/alphabet_sounds/b.mp3"),
  },
  {
    letter: "C",
    audioFileName: require("../../../assets/alphabet_sounds/c.mp3"),
  },
  {
    letter: "D",
    audioFileName: require("../../../assets/alphabet_sounds/d.mp3"),
  },
  {
    letter: "E",
    audioFileName: require("../../../assets/alphabet_sounds/e.mp3"),
  },
  {
    letter: "F",
    audioFileName: require("../../../assets/alphabet_sounds/f.mp3"),
  },
  {
    letter: "G",
    audioFileName: require("../../../assets/alphabet_sounds/g.mp3"),
  },
  {
    letter: "H",
    audioFileName: require("../../../assets/alphabet_sounds/h.mp3"),
  },
  {
    letter: "I",
    audioFileName: require("../../../assets/alphabet_sounds/i.mp3"),
  },
  {
    letter: "J",
    audioFileName: require("../../../assets/alphabet_sounds/j.mp3"),
  },
  {
    letter: "K",
    audioFileName: require("../../../assets/alphabet_sounds/k.mp3"),
  },
  {
    letter: "L",
    audioFileName: require("../../../assets/alphabet_sounds/l.mp3"),
  },
  {
    letter: "M",
    audioFileName: require("../../../assets/alphabet_sounds/m.mp3"),
  },
  {
    letter: "N",
    audioFileName: require("../../../assets/alphabet_sounds/n.mp3"),
  },
  {
    letter: "O",
    audioFileName: require("../../../assets/alphabet_sounds/o.mp3"),
  },
  {
    letter: "P",
    audioFileName: require("../../../assets/alphabet_sounds/p.mp3"),
  },
  {
    letter: "Q",
    audioFileName: require("../../../assets/alphabet_sounds/q.mp3"),
  },
  {
    letter: "R",
    audioFileName: require("../../../assets/alphabet_sounds/r.mp3"),
  },
  {
    letter: "S",
    audioFileName: require("../../../assets/alphabet_sounds/s.mp3"),
  },
  {
    letter: "T",
    audioFileName: require("../../../assets/alphabet_sounds/t.mp3"),
  },
  {
    letter: "U",
    audioFileName: require("../../../assets/alphabet_sounds/u.mp3"),
  },
  {
    letter: "V",
    audioFileName: require("../../../assets/alphabet_sounds/v.mp3"),
  },
  {
    letter: "W",
    audioFileName: require("../../../assets/alphabet_sounds/w.mp3"),
  },
  {
    letter: "X",
    audioFileName: require("../../../assets/alphabet_sounds/x.mp3"),
  },
  {
    letter: "Y",
    audioFileName: require("../../../assets/alphabet_sounds/y.mp3"),
  },
  {
    letter: "Z",
    audioFileName: require("../../../assets/alphabet_sounds/z.mp3"),
  },
];

const colors = [
  "#FF7395",
  "#FECF84",
  "#F36E70",
  "#D5B5D0",
  "#5CC2A5",
  "#FCB566",
  "#B375F7",
];

const QuizAlphabets = () => {
  const playSound = async (audioFile: number) => {
    console.log(audioFile);
    console.log("Loading Sound");
    const { sound } = await Audio.Sound.createAsync(audioFile);
    await sound.playAsync();
  };

  return (
    <SafeAreaView style={styles.quiz_alphabet}>
      {/* <Text style={styles.title}>Alphabets</Text> */}
      <View style={styles.container}>
        {alphabetData.map((item, index) => (
          <View key={index} style={styles.row}>
            <TouchableOpacity
              style={[
                styles.item,
                {
                  backgroundColor:
                    colors[Math.floor(Math.random() * colors.length)],
                },
              ]}
              onPress={() => playSound(item.audioFileName)}
            >
              <Text style={styles.letter}>{item.letter}</Text>
            </TouchableOpacity>
          </View>
        ))}
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  quiz_alphabet: {
    paddingLeft: 16,
    paddingRight: 16,
    flex: 1,
  },

  container: {
    flex: 1,
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "center",
  },
  row: {
    width: `${100 / 4}%`, // Divide the width equally based on itemsPerRow
    padding: 8,
  },
  item: {
    height: 75,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 8,
  },
  letter: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#FFFFFF",
  },
});

export default QuizAlphabets;
