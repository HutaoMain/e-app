// import { View, Image } from "react-native";
// import React from "react";
// import { useRoute } from "@react-navigation/native";

// const AlphabetImage = () => {
//   const route = useRoute();
//   const { letter } = route.params as { letter: string };

//   return (
//     <View>
//       <Image
//         source={require(`../../assets/alphabet_images/${letter}.jpg`)}
//         style={{ width: 200, height: 200 }}
//       />
//     </View>
//   );
// };

// export default AlphabetImage;

import { View, Text } from "react-native";
import React from "react";

const AlphabetImage = () => {
  return (
    <View>
      <Text>AlphabetImage</Text>
    </View>
  );
};

export default AlphabetImage;
