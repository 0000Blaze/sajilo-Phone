import {
  View,
  Text,
  Image,
  ScrollView,
  StyleSheet,
  TouchableOpacity,
  Linking,
} from "react-native";
import { Icon } from "@rneui/base";

import HeaderWidget from "../components/HeaderWidget";

const police = [
  {
    name: "Inspector",
    image: require("../../assets/favicon.png"),
    number: 100,
    department: "police",
    id: 1,
  },
];

const firebrigade = [
  {
    name: "damkal",
    image: require("../../assets/favicon.png"),
    number: 9842649186,
    department: "police",
    address: "swoyambhu",
    id: 1,
  },
];

function Home() {
  function EmergencyCalls() {
    return (
      <TouchableOpacity
        style={{
          width: 100,
          // borderColor: "grey",
          // borderWidth: 1,
          flexDirection: "row",
          alignItems: "center",
          padding: 2,
          gap: 2,
          marginRight: 10,
          paddingVertical: 5,
        }}
      >
        <View>
          <Text style={{ fontWeight: 800 }}>Sijen</Text>
          <Text>9860817538</Text>
        </View>
        <Image
          source={require("../../assets/icon.png")}
          style={{ height: 30, width: 30 }}
        />
      </TouchableOpacity>
    );
  }
  function CardItem({ name, department, image, number }) {
    return (
      <TouchableOpacity
        style={{ flexDirection: "column", gap: 10 }}
        onPress={() => makePhoneCall({ number })}
      >
        <Image source={image} style={{ height: 30, width: 30 }} />
        <View style={{ borderColor: "black", borderWidth: 1 }}>
          <Text
            style={{
              textTransform: "capitalize",
              fontWeight: 800,
              fontSize: 14,
              color: "black",
            }}
          >
            {name}
          </Text>
          <Text
            style={{
              textTransform: "uppercase",
              fontWeight: 800,
              fontSize: 14,
            }}
          >
            {department}
          </Text>
        </View>
      </TouchableOpacity>
    );
  }
  const makePhoneCall = ({ number }) => {
    if (Platform.OS === "android") {
      Linking.openURL(`tel:${number}`);
    } else {
      Linking.openURL(`telprompt:${number}`);
    }
  };

  function CategoryBox({ department, name }) {
    return (
      <View style={decoration.category}>
        <Text
          style={{
            color: "#01579b",
            fontSize: 34,
            fontWeight: "800",
            marginVertical: 10,
            textTransform: "uppercase",
          }}
        >
          <Icon name="user" type="font-awesome" style={{ marginRight: 5 }} />
          {name}
        </Text>
        <View style={decoration.cardList}>
          {department.map((card) => (
            <CardItem
              name={card.name}
              image={card.image}
              department={card.department}
              key={card.id}
              number={card.number}
            />
          ))}
        </View>
      </View>
    );
  }
  return (
    <ScrollView>
      <HeaderWidget />
      <View style={{ marginHorizontal: 20 }}>
        <View style={{ marginBottom: 20 }}>
          <Text style={{ color: "#01579b", fontSize: 24, fontWeight: "900" }}>
            Your Emergency Calls
          </Text>
          <ScrollView horizontal={true}>
            <EmergencyCalls />
            <EmergencyCalls />
            <EmergencyCalls />
            <EmergencyCalls />
            <EmergencyCalls />
            <EmergencyCalls />
          </ScrollView>
        </View>
        <View style={decoration.categoryList}>
          <Text
            style={{
              color: "#01579b",
              fontSize: 18,
              fontWeight: "800",
              marginBottom: 10,
            }}
          >
            What's your emergency?
          </Text>
          <View style={{ flexDirection: "row", gap: 10 }}>
            <Icon
              name="user"
              type="font-awesome"
              style={{
                backgroundColor: "white",
                borderRadius: 50,
                padding: 20,
              }}
              onPress={() => makePhoneCall(100)}
            />
            <Icon
              name="fire"
              type="font-awesome"
              style={{
                backgroundColor: "white",
                borderRadius: 50,
                padding: 20,
              }}
              onPress={() => makePhoneCall(101)}
            />
            <Icon
              name="bus"
              type="font-awesome"
              style={{
                backgroundColor: "white",
                borderRadius: 50,
                padding: 20,
              }}
              onPress={() => makePhoneCall(102)}
            />
          </View>
          <View
            style={{ backgroundColor: "white", borderRadius: 20, padding: 20 }}
          >
            <CategoryBox department={police} name="police" />
            <CategoryBox department={firebrigade} name="firebrigade" />
          </View>
        </View>
      </View>
    </ScrollView>
  );
}

const decoration = StyleSheet.create({
  cardList: { flexDirection: "row", flexWrap: "wrap", gap: 10 },
  categoryList: {},
});
export default Home;
