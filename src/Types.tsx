// navigation props here ....

// export type BMINavigationStackProps = {
//   BMICalculator: undefined;
//   BMIResult: {
//     gender: string;
//     height: number;
//     weight: number;
//     age: number;
//     bmiResult: number;
//     bmiCategory: string;
//   };
// };

// export type BMINavigationProps = NativeStackScreenProps<
//   BMINavigationStackProps,
//   "BMIResult"
// >;

export type AppRouteNames =
  | "QuizAnimals"
  | "QuizNumbers"
  | "QuizAlphabets"
  | "QuizColors";

export type AuthStackNavigationType = {
  Login: undefined;
  Register: undefined;
};

import { NativeStackScreenProps } from "@react-navigation/native-stack";
export type QuizStackNavigationType = {
  Home: undefined;
  QuizAnimals: undefined;
  QuizNumbers: undefined;
  QuizAlphabets: undefined;
  QuizColors: undefined;
};

export type QuizStackProps = NativeStackScreenProps<
  QuizStackNavigationType,
  "Home"
>;

// export type AlphabetStackNavigationType = {
//   QuizAlphabets: undefined;
//   AlphabetButtons: {
//     letter: string;
//     audioFileName: string;
//   };
//   AlphabetImage: undefined;
// };

// export type AlphabetStackProps = NativeStackScreenProps<
//   AlphabetStackNavigationType,
//   "AlphabetButtons"
// >;
