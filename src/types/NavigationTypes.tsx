export type AuthStackNavigationType = {
  Login: undefined;
  Register: undefined;
};

import { NativeStackScreenProps } from "@react-navigation/native-stack";

export type LearningStackNavigation = {
  Home: undefined;
  Alphabets: undefined;
  Numbers: undefined;
  Animals: undefined;
  Shapes: undefined;
  Math: undefined;
  Emotions: undefined;
  // // Quizzes
  // QuizAlphabets: undefined;
};

export type LearningStackProps = NativeStackScreenProps<
  LearningStackNavigation,
  "Home"
>;

export type AppRouteNames =
  | "Home"
  | "Alphabets"
  | "Numbers"
  | "Animals"
  | "Shapes"
  | "Math"
  | "Emotions";
