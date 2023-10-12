import { View, Text } from "react-native";

import HeaderWidget from "../components/HeaderWidget";

export default function Fav() {
  return (
    <View>
      <HeaderWidget>
        <Text
          style={{
            color: "white",
            fontSize: 24,
            fontWeight: "900",
            textShadowColor: "grey",
          }}
        >
          Favourite Contacts
        </Text>
      </HeaderWidget>
      <Text>Favourites</Text>
    </View>
  );
}
