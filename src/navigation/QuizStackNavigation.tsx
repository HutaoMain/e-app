import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { QuizStackNavigationType } from "../Types";
import Home from "../screens/Home";
import QuizAnimals from "../screens/Quiz/QuizAnimals";
import QuizNumbers from "../screens/Quiz/QuizNumbers";
import QuizAlphabets from "../screens/Quiz/QuizAlphabets";
import QuizColors from "../screens/Quiz/QuizColors";

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
        options={{ headerShown: false }}
      />
      <QuizStack.Screen
        name="QuizNumbers"
        component={QuizNumbers}
        options={{ headerShown: false }}
      />
      <QuizStack.Screen
        name="QuizAlphabets"
        component={QuizAlphabets}
        options={{ headerTitle: "Alphabets" }}
      />
      <QuizStack.Screen
        name="QuizColors"
        component={QuizColors}
        options={{ headerShown: false }}
      />
    </QuizStack.Navigator>
  );
};

export default QuizStackNavigation;
