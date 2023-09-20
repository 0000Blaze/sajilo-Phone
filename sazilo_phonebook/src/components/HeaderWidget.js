import { View, Text, TouchableOpacity } from "react-native";
import { Header, Icon } from "@rneui/themed";
import { useNavigation } from "@react-navigation/native";
function HeaderWidget({ title }) {
  const navigation = useNavigation();
  return (
    <Header
      leftComponent={
        <TouchableOpacity onPress={() => navigation.openDrawer()}>
          <Icon name="menu" color="white" />
        </TouchableOpacity>
      }
      rightComponent={{ icon: "person", color: "#fff" }}
      centerComponent={{
        text: "SajiloPhone",
        style: { fontSize: 20, color: "white", fontWeight: 800 },
      }}
    />
  );
}
export default HeaderWidget;
