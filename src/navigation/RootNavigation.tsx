import { NavigationContainer } from "@react-navigation/native";
import React from "react";
import AuthStackNavigation from "./AuthStackNavigation";
import useAuthStore from "../zustand/AuthStore";
import QuizStackNavigation from "./QuizStackNavigation";

const RootNavigation = () => {
  const user = useAuthStore((state) => state.user);
  return (
    <NavigationContainer>
      {!user ? <QuizStackNavigation /> : <AuthStackNavigation />}
    </NavigationContainer>
  );
};

export default RootNavigation;
