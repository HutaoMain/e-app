import { TouchableOpacity, Text, View, StyleSheet } from "react-native";
import { Audio } from "expo-av";
import { SafeAreaView } from "react-native-safe-area-context";

const alphabetData = [
  {
    letter: "A",
    audioFileName: require("../../assets/alphabetSounds/A.mp3"),
  },
  {
    letter: "B",
    audioFileName: require("../../assets/alphabetSounds/b.mp3"),
  },
  {
    letter: "C",
    audioFileName: require("../../assets/alphabetSounds/c.mp3"),
  },
  {
    letter: "D",
    audioFileName: require("../../assets/alphabetSounds/d.mp3"),
  },
  {
    letter: "E",
    audioFileName: require("../../assets/alphabetSounds/e.mp3"),
  },
  {
    letter: "F",
    audioFileName: require("../../assets/alphabetSounds/f.mp3"),
  },
  {
    letter: "G",
    audioFileName: require("../../assets/alphabetSounds/g.mp3"),
  },
  {
    letter: "H",
    audioFileName: require("../../assets/alphabetSounds/h.mp3"),
  },
  {
    letter: "I",
    audioFileName: require("../../assets/alphabetSounds/i.mp3"),
  },
  {
    letter: "J",
    audioFileName: require("../../assets/alphabetSounds/j.mp3"),
  },
  {
    letter: "K",
    audioFileName: require("../../assets/alphabetSounds/k.mp3"),
  },
  {
    letter: "L",
    audioFileName: require("../../assets/alphabetSounds/l.mp3"),
  },
  {
    letter: "M",
    audioFileName: require("../../assets/alphabetSounds/m.mp3"),
  },
  {
    letter: "N",
    audioFileName: require("../../assets/alphabetSounds/n.mp3"),
  },
  {
    letter: "O",
    audioFileName: require("../../assets/alphabetSounds/o.mp3"),
  },
  {
    letter: "P",
    audioFileName: require("../../assets/alphabetSounds/p.mp3"),
  },
  {
    letter: "Q",
    audioFileName: require("../../assets/alphabetSounds/q.mp3"),
  },
  {
    letter: "R",
    audioFileName: require("../../assets/alphabetSounds/r.mp3"),
  },
  {
    letter: "S",
    audioFileName: require("../../assets/alphabetSounds/s.mp3"),
  },
  {
    letter: "T",
    audioFileName: require("../../assets/alphabetSounds/t.mp3"),
  },
  {
    letter: "U",
    audioFileName: require("../../assets/alphabetSounds/u.mp3"),
  },
  {
    letter: "V",
    audioFileName: require("../../assets/alphabetSounds/v.mp3"),
  },
  {
    letter: "W",
    audioFileName: require("../../assets/alphabetSounds/w.mp3"),
  },
  {
    letter: "X",
    audioFileName: require("../../assets/alphabetSounds/x.mp3"),
  },
  {
    letter: "Y",
    audioFileName: require("../../assets/alphabetSounds/y.mp3"),
  },
  {
    letter: "Z",
    audioFileName: require("../../assets/alphabetSounds/z.mp3"),
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
