import React from "react";
import { ImageBackground, View, Text } from "react-native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { QuizStackNavigationType } from "../Types";
import Home from "../screens/Home";
import QuizAnimals from "../screens/Quiz/QuizAnimals";
import QuizNumbers from "../screens/Quiz/QuizNumbers";
import QuizAlphabets from "../screens/Quiz/QuizAlphabets";
import QuizColors from "../screens/Quiz/QuizColors";
import LessonMath from "../screens/lessons/LessonMath";

const QuizStackNavigation = () => {
  const QuizStack = createNativeStackNavigator<QuizStackNavigationType>();

  return (
    <QuizStack.Navigator>
      <QuizStack.Screen
        name="Home"
        component={Home}
        options={{ headerShown: false }}
      />
      <QuizStack.Screen
        name="QuizAnimals"
        component={QuizAnimals}
        options={{ headerTitle: "Animals" }}
      />
      <QuizStack.Screen
        name="QuizNumbers"
        component={QuizNumbers}
        options={{ headerTitle: "Numbers" }}
      />
      <QuizStack.Screen
        name="QuizAlphabets"
        component={QuizAlphabets}
        options={{ headerTitle: "Alphabets" }}
      />
      <QuizStack.Screen
        name="QuizColors"
        component={QuizColors}
        options={{ headerTitle: "Colors" }}
      />
      <QuizStack.Screen
        name="LessonMath"
        component={LessonMath}
        options={{
          headerShown: false,
        }}
      />
    </QuizStack.Navigator>
  );
};

export default QuizStackNavigation;
