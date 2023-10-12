import { Text } from "react-native";

import { Button } from "react-native-paper";

function ButtonWidget({ mode, style, onPress, text, children, icon }) {
  return (
    <Button
      mode={mode}
      style={[
        style,
        {
          borderRadius: 5,
          backgroundColor: mode == "outlined" ? " " : "#012169",
          borderColor: mode == "outlined" ? "#012169" : " ",
          height: "auto",
        },
      ]}
      onPress={onPress}
      icon={icon}
    >
      <Text
        style={{
          textTransform: "uppercase",
          fontWeight: 900,
          color: mode == "outlined" ? "#012169" : "#fff",
        }}
      >
        {children} {text}
      </Text>
    </Button>
  );
}
export default ButtonWidget;
