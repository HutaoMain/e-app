import {
  View,
  Text,
  TouchableOpacity,
  TextInput,
  StyleSheet,
  ImageBackground,
  Image,
} from "react-native";
import { useState } from "react";
import { useNavigation } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { AuthStackNavigationType } from "../types/NavigationTypes";
import DateTimePicker from "@react-native-community/datetimepicker";
import dayjs from "dayjs";
import Toast from "react-native-toast-message";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { FIREBASE_AUTH } from "../FirebaseConfig";
import {
  AntDesign,
  Fontisto,
  Ionicons,
  MaterialCommunityIcons,
} from "@expo/vector-icons";

const Register = () => {
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [showDatePicker, setShowDatePicker] = useState<boolean>(false);
  const [date, setDate] = useState<Date>(new Date());
  const [loading, setLoading] = useState<boolean>(false);

  const auth = FIREBASE_AUTH;

  const onChangeSelectedDate = (selectedDate: any) => {
    const formattedDate = new Date(selectedDate);
    setShowDatePicker(false);
    if (formattedDate) {
      setDate(formattedDate);
    }
  };

  const toggleDate = () => {
    setShowDatePicker(true);
  };

  const navigation =
    useNavigation<NativeStackNavigationProp<AuthStackNavigationType>>();

  const handleRegistration = async () => {
    setLoading(true);
    try {
      if (password !== confirmPassword) {
        Toast.show({
          type: "error",
          text1: `Password do not match.`,
        });
        return;
      }
      await createUserWithEmailAndPassword(auth, email, password);

      Toast.show({
        type: "success",
        text1: `Successfully registered your account.`,
      });
      setLoading(false);
      setTimeout(() => {
        navigation.navigate("Login");
      }, 2000);
    } catch (error) {
      setLoading(false);
      console.log(error);
    }
  };

  const handleGoBackToLogin = () => {
    navigation.navigate("Login");
  };

  console.log(date);

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
          <MaterialCommunityIcons
            name="email-outline"
            size={24}
            color="black"
          />
          <TextInput
            style={styles.input}
            placeholder="Email"
            value={email}
            onChangeText={setEmail}
          />
        </View>
        <View style={styles.input_container}>
          <Ionicons name="text" size={20} color="black" />
          <TextInput
            style={styles.input}
            placeholder="Full Name"
            value={name}
            onChangeText={setName}
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
        <View style={styles.input_container}>
          <AntDesign name="lock" size={24} color="black" />
          <TextInput
            style={styles.input}
            placeholder="Confirm Password"
            value={confirmPassword}
            onChangeText={setConfirmPassword}
            secureTextEntry
          />
        </View>
        <View style={styles.input_container}>
          <Fontisto name="date" size={22} color="black" />
          <TouchableOpacity style={styles.input} onPress={toggleDate}>
            <Text>{dayjs(date).format("YYYY-MM-DD")}</Text>
          </TouchableOpacity>
        </View>
        {showDatePicker && (
          <DateTimePicker
            display="spinner"
            value={date}
            mode="date"
            onChange={(e) => onChangeSelectedDate(e.nativeEvent.timestamp)}
          />
        )}
        <TouchableOpacity
          style={[
            styles.button,
            // email && name && password && confirmPassword
            //   ? styles.buttonEnabled
            //   : styles.buttonDisabled,
          ]}
          onPress={handleRegistration}
          // disabled={!email || !name || !password || !confirmPassword}
        >
          <Text style={styles.buttonText}>
            {loading ? "Please wait..." : "Register"}
          </Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button} onPress={handleGoBackToLogin}>
          <Text style={styles.buttonGoBack}>Go back to Login</Text>
        </TouchableOpacity>
      </ImageBackground>
    </View>
  );
};

export default Register;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  backgroundImage: {
    flex: 1,
    resizeMode: "cover",
    paddingTop: 80,
    alignItems: "center",
    backgroundColor: "#D5D5D5",
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
  buttonEnabled: {
    backgroundColor: "#E44203",
  },
  buttonDisabled: {
    backgroundColor: "#ccc",
    borderColor: "#ccc",
  },
  buttonText: {
    color: "black",
    textAlign: "center",
    lineHeight: 40,
    fontSize: 16,
  },
  buttonGoBack: {
    color: "black",
    textAlign: "center",
    lineHeight: 40,
    fontSize: 16,
  },
});
