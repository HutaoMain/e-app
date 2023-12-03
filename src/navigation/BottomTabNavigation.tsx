import { Ionicons } from "@expo/vector-icons";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import HomeStackNavigation from "./HomeStackNavigation";
import Video from "../screens/Video";

const BottomTabNavigation = () => {
  const Tab = createBottomTabNavigator();

  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, size }) => {
          let iconName: any;

          if (route.name === "HomeStack") {
            iconName = focused ? "home" : "home-outline";
          } else if (route.name === "Video") {
            iconName = focused ? "ios-videocam" : "ios-videocam-outline";
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
        name="HomeStack"
        component={HomeStackNavigation}
        options={{ headerShown: false }}
      />
      <Tab.Screen
        name="Video"
        component={Video}
        options={{ headerShown: false }}
      />
    </Tab.Navigator>
  );
};

export default BottomTabNavigation;
