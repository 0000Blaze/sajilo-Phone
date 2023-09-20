import { TextInput, Button } from "react-native-paper";
import { View, Text, TouchableOpacity, Image } from "react-native";

import { Icon } from "@rneui/base";
function Registration() {
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
          source={require("../../assets/adaptive-icon.png")}
          style={{ height: 100, width: 100 }}
        />
      </View>
      <TextInput
        label="PhoneNumber"
        inputMode="numeric"
        right={<TextInput.Icon icon="phone" />}
      />
      <RegistrationButton title="Register" mode="contained" />
      <Button
        icon={({ color }) => (
          <Icon name="arrow-right" size={16} color={color} />
        )}
      >
        Next Step
      </Button>
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
