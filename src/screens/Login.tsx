import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  ImageBackground,
  Image,
} from "react-native";
import { useState } from "react";
import { useNavigation } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { AuthStackNavigationType } from "../types/NavigationTypes";
import useAuthStore from "../zustand/AuthStore";
import { AntDesign } from "@expo/vector-icons";
import { FIREBASE_AUTH } from "../FirebaseConfig";
import { Toast } from "react-native-toast-message/lib/src/Toast";
import { signInWithEmailAndPassword } from "firebase/auth";

const Login = () => {
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [loading, setLoading] = useState<boolean>(false);

  const auth = FIREBASE_AUTH;

  const setUser = useAuthStore((state) => state.setUser);

  const navigation =
    useNavigation<NativeStackNavigationProp<AuthStackNavigationType>>();

  const handleLogin = async () => {
    setLoading(true);
    try {
      await signInWithEmailAndPassword(auth, email, password);
      setLoading(false);
      setUser(email);
    } catch (error) {
      setLoading(false);
      Toast.show({
        type: "error",
        text1: `Email or password is incorrect.`,
      });
      console.log(error);
    }
  };

  const handleGoToRegisterScreen = () => {
    navigation.navigate("Register");
  };

  return (
    <View style={styles.container}>
      <ImageBackground
        source={require("../../assets/login-bg.jpg")}
        style={styles.backgroundImage}
      >
        <Image
          source={require("../../assets/e-logo.png")}
          style={styles.logo}
        />
        <View style={styles.input_container}>
          <AntDesign name="user" size={24} color="black" />
          <TextInput
            style={styles.input}
            placeholder="Email"
            value={email}
            onChangeText={setEmail}
          />
        </View>
        <View style={styles.input_container}>
          <AntDesign name="lock" size={24} color="black" />
          <TextInput
            style={styles.input}
            placeholder="Password"
            value={password}
            onChangeText={setPassword}
            secureTextEntry
          />
        </View>

        <TouchableOpacity style={styles.button} onPress={handleLogin}>
          <Text style={styles.buttonText}>
            {loading ? "Please wait.." : "Go"}
          </Text>
        </TouchableOpacity>

        <View style={styles.register_container}>
          <Text style={styles.text}>Don't have account yet? </Text>
          <Text style={styles.register_text} onPress={handleGoToRegisterScreen}>
            Register
          </Text>
        </View>
      </ImageBackground>
    </View>
  );
};

export default Login;

const styles = StyleSheet.create({
  backgroundImage: {
    flex: 1,
    resizeMode: "cover",
    paddingTop: 170,
    alignItems: "center",
    backgroundColor: "#D5D5D5",
  },
  container: {
    flex: 1,
  },
  logo: {
    width: "90%",
    height: 100,
    marginBottom: 10,
  },
  input_container: {
    width: "90%",
    height: 50,
    paddingLeft: 10,
    marginVertical: 10,
    flexDirection: "row",
    alignItems: "center",
    borderWidth: 1,
    borderColor: "black",
    borderRadius: 15,
    backgroundColor: "white",
  },
  input: {
    width: "80%",
    height: 40,
    padding: 10,
  },
  button: {
    width: "90%",
    height: 40,
    borderWidth: 1,
    borderColor: "black",
    borderRadius: 10,
    marginVertical: 10,
    backgroundColor: "#EB9F4A",
  },
  register_container: {
    flexDirection: "row",
  },
  text: {
    fontWeight: "bold",
    fontSize: 18,
  },
  register_text: {
    fontWeight: "bold",
    color: "#5CC2A5",
    fontSize: 18,
  },
  buttonText: {
    color: "black",
    textAlign: "center",
    lineHeight: 40,
    fontSize: 16,
  },
});
