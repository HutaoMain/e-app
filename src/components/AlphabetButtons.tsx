// import { Text, TouchableOpacity } from "react-native";
// import React from "react";
// import Sound from "react-native-sound";
// import { useNavigation } from "@react-navigation/native";
// import { AlphabetStackProps } from "../Types";

// const AlphabetButtons = ({ route }: AlphabetStackProps) => {
//   const { letter, audioFileName } = route.params;

//   const playAlphabetSound = () => {
//     const sound = new Sound(audioFileName, Sound.MAIN_BUNDLE, (error) => {
//       if (error) {
//         console.error(`Failed to load sound ${audioFileName}`, error);
//       } else {
//         sound.play((success) => {
//           if (success) {
//             console.log(`Successfully played ${audioFileName}`);
//             // Navigate to the image component when the audio is finished
//           } else {
//             console.error(`Failed to play ${audioFileName}`);
//           }
//         });
//       }
//     });
//   };

//   return (
//     <TouchableOpacity onPress={playAlphabetSound}>
//       <Text>{letter}</Text>
//     </TouchableOpacity>
//   );
// };

// export default AlphabetButtons;

import { View, Text } from "react-native";
import React from "react";

const AlphabetButtons = () => {
  return (
    <View>
      <Text>AlphabetButtons</Text>
    </View>
  );
};

export default AlphabetButtons;
