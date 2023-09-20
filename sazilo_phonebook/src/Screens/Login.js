import { TextInput, Button } from "react-native-paper";
import { View, Text, TouchableOpacity, Image } from "react-native";

import { Icon } from "@rneui/base";
function Login() {
  return (
    <View
      style={{
        marginHorizontal: 20,
        flexDirection: "column",
      }}
    >
      <View
        style={{
          fontSize: 40,
          fontWeight: 700,
          marginVertical: 50,
          alignItems: "center",
        }}
      >
        <Text
          style={{
            fontSize: 40,
            fontWeight: 700,
            marginVertical: 50,
          }}
        >
          Login
        </Text>
        <Image
          source={require("../../assets/adaptive-icon.png")}
          style={{ height: 100, width: 100 }}
        />
      </View>
      <TextInput label="PhoneNumber" inputMode="numeric" />
      <LoginButton title="login" />
      <LoginButton title="Register" mode="contained" />
    </View>
  );
}
function LoginButton({ title, mode }) {
  return (
    <TouchableOpacity style={{ marginTop: 30 }}>
      <Button mode={mode} onClick>{title}</Button>
    </TouchableOpacity>
  );
}
export default Login;
