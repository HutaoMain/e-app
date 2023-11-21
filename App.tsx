import RootNavigation from "./src/navigation/RootNavigation";
import Toast from "react-native-toast-message";
import { useFonts } from "expo-font";
import { useEffect } from "react";
import * as SplashScreen from "expo-splash-screen";
import { SafeAreaView } from "react-native-safe-area-context";

export default function App() {
  const [fontsLoaded] = useFonts({
    "AmaticSC-Regular": require("./assets/fonts/AmaticSC-Regular.ttf"),
    "AmaticSC-Bold": require("./assets/fonts/AmaticSC-Bold.ttf"),
  });

  useEffect(() => {
    async function prepare() {
      await SplashScreen.preventAutoHideAsync();
    }
    prepare();
  }, []);

  if (!fontsLoaded) {
    return undefined;
  } else {
    SplashScreen.hideAsync();
  }

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <RootNavigation />
      <Toast position="top" topOffset={40} />
    </SafeAreaView>
  );
}
