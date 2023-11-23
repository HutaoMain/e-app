import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { LearningStackNavigation } from "../types/NavigationTypes";
import Home from "../screens/Home";
import Alphabets from "../screens/Alphabets";
import Numbers from "../screens/Numbers";
import Animals from "../screens/Animals";
import Shapes from "../screens/Shapes";
import Math from "../screens/Math";
import Emotions from "../screens/Emotions";
import AlphabetList from "../screens/AlphabetList";

const HomeStackNavigation = () => {
  const HomeStack = createNativeStackNavigator<LearningStackNavigation>();

  return (
    <HomeStack.Navigator>
      <HomeStack.Screen
        name="Home"
        component={Home}
        options={{ headerShown: false }}
      />
      <HomeStack.Screen
        name="Alphabets"
        component={Alphabets}
        options={{ headerShown: false }}
      />
      <HomeStack.Screen
        name="Numbers"
        component={Numbers}
        options={{ headerShown: false }}
      />
      <HomeStack.Screen
        name="Animals"
        component={Animals}
        options={{ headerShown: false }}
      />
      <HomeStack.Screen
        name="Shapes"
        component={Shapes}
        options={{ headerShown: false }}
      />
      <HomeStack.Screen
        name="Math"
        component={Math}
        options={{ headerShown: false }}
      />
      <HomeStack.Screen
        name="Emotions"
        component={Emotions}
        options={{ headerShown: false }}
      />
      {/*TODO Quizzes */}
      {/* <HomeStack.Screen
        name="QuizAlphabets"
        component={QuizAlphabets}
        options={{ headerShown: false }}
      /> */}
    </HomeStack.Navigator>
  );
};

export default HomeStackNavigation;
