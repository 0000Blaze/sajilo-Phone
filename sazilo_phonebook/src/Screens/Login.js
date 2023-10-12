import { TextInput, Button } from "react-native-paper";
import {
  View,
  Text,
  TouchableOpacity,
  Image,
  ImageBackground,
  Alert,
} from "react-native";

import ButtonWidget from "../components/ButtonWidget";

import image from "../../assets/images/header.jpg";

function Login({ navigation }) {
  return (
    <ImageBackground source={image} resizeMode="cover">
      <View style={{ marginHorizontal: 10 }}>
        <View
          style={{
            fontSize: 40,
            fontWeight: 700,
            alignItems: "center",
          }}
        >
          <Text
            style={{
              fontSize: 40,
              fontWeight: 700,
            }}
          >
            Login
          </Text>
          <Image
            source={require("../../assets/images/logo.png")}
            style={{ height: 100, width: 100 }}
          />
        </View>
        <View style={{ height: "100%" }}>
          <TextInput
            label="Phone Number"
            inputMode="numeric"
            color="white"
            outlineColor="#012169"
            error={false}
          />

          <ButtonWidget
            mode="contained"
            onPress={() => {
              navigation.navigate("Home");
              return Alert.alert(
                "Congratulations!!! ",
                "You are Logged In",
                [
                  {
                    text: "Cancel",
                    // onPress: () => Alert.alert("Cancel Pressed"),
                    style: "cancel",
                  },
                ],
                {
                  cancelable: true,
                  onDismiss: () =>
                    Alert.alert(
                      "This alert was dismissed by tapping outside of the alert dialog."
                    ),
                }
              );
            }}
            text="login"
            style={{ marginVertical: 15, paddingVertical: 5 }}
          />
          <ButtonWidget
            mode="outlined"
            onPress={() => {
              console.log("register");
              navigation.navigate("Register");
            }}
            text="register"
            style={{ paddingVertical: 5 }}
          />
        </View>
      </View>
    </ImageBackground>
  );
}

export default Login;
