import { TextInput, Button } from "react-native-paper";
import { View, Text, TouchableOpacity, Image } from "react-native";

import { Icon } from "@rneui/base";

import ButtonWidget from "../components/ButtonWidget";

function Registration({ navigation }) {
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
          Registration
        </Text>
        <Image
          source={require("../../assets/images/logo.png")}
          style={{ height: 100, width: 100 }}
        />
      </View>
      <TextInput
        label="PhoneNumber"
        inputMode="numeric"
        right={<TextInput.Icon icon="phone" />}
      />
      <ButtonWidget
        mode="outlined"
        onPress={() => {
          console.log("register");
          navigation.navigate("Register");
        }}
        text="Next Step"
        style={{ paddingVertical: 5, marginVertical: 50 }}
        icon={({ color }) => (
          <Icon name="arrow-right" size={16} color={color} />
        )}
      />
    </View>
  );
}
function RegistrationButton({ title, mode }) {
  return (
    <TouchableOpacity style={{ marginTop: 50 }}>
      <Button mode={mode}>{title}</Button>
    </TouchableOpacity>
  );
}
export default Registration;
