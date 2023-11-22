import { Ionicons } from "@expo/vector-icons";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Home from "../screens/Home";
import Person from "../screens/Person";
import HomeStackNavigation from "./HomeStackNavigation";

const BottomTabNavigation = () => {
  const Tab = createBottomTabNavigator();

  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, size }) => {
          let iconName: any;

          if (route.name === "QuizStack") {
            iconName = focused ? "home" : "home-outline";
            // } else if (route.name === "Home") {
            //   iconName = focused ? "list-outline" : "list-outline";
          } else if (route.name === "Person") {
            iconName = focused ? "person" : "person-outline";
          }

          return (
            <Ionicons
              name={iconName}
              size={size}
              color={focused ? "#E44203" : "black"}
            />
          );
        },
        tabBarStyle: {
          height: 60,
          backgroundColor: "white",
        },
        tabBarShowLabel: false,
      })}
    >
      <Tab.Screen
        name="QuizStack"
        component={HomeStackNavigation}
        options={{ headerShown: false }}
      />
      <Tab.Screen
        name="Person"
        component={Person}
        options={{ headerShown: false }}
      />
    </Tab.Navigator>
  );
};

export default BottomTabNavigation;
