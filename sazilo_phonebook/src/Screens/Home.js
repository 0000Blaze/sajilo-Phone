import { useState } from "react";
import {
  View,
  Text,
  Image,
  ScrollView,
  StyleSheet,
  TouchableOpacity,
  Linking,
  StatusBar,
  FlatList,
  SafeAreaView,
} from "react-native";
import { Icon } from "@rneui/base";

import { Divider, Surface } from "react-native-paper";
import HeaderWidget from "../components/HeaderWidget";
import SelectionListWidget from "../components/SelectionListWidget";
import ButtonWidget from "../components/ButtonWidget";

function Home({ navigation }) {
  function CardItem({ name, department, image, number }) {
    return (
      <Surface
        style={{
          width: "100%",
          borderRadius: 10,
          backgroundColor: "#fff",
        }}
      >
        <TouchableOpacity
          style={{
            flexDirection: "row",
            height: 80,
            width: "100%",
            overflow: "hidden",
            borderRadius: 10,
          }}
          onPress={() => makePhoneCall(number)}
        >
          <Image
            source={image}
            style={{
              height: "100%",
              width: 80,
              borderWidth: 1,
              borderRadius: 10,
            }}
          />
          <View
            style={{
              borderColor: "black",
              width: "100%",
              paddingHorizontal: 15,
            }}
          >
            <Text
              style={{
                textTransform: "capitalize",
                fontWeight: 800,
                fontSize: 20,
                color: "green",
                overflow: "scroll",
              }}
            >
              name
            </Text>
            <View
              style={{ flexDirection: "row", alignItems: "center", gap: 4 }}
            >
              <Icon
                name="suitcase"
                type="font-awesome"
                size={12}
                color="grey"
              />
              <Text
                style={{
                  textTransform: "capitalize",
                  fontWeight: 800,
                  fontSize: 12,
                  color: "grey",
                }}
              >
                {name}
              </Text>
            </View>
            <View
              style={{
                flexDirection: "row",
                alignItems: "center",
                gap: 4,
              }}
            >
              <Icon
                name="map-marker"
                type="font-awesome"
                size={12}
                color="grey"
              />
              <Text
                style={{
                  textTransform: "capitalize",
                  fontWeight: 800,
                  fontSize: 12,
                  color: "grey",
                }}
              >
                State 1, kathmandu, swoyambhu
              </Text>
            </View>
          </View>
        </TouchableOpacity>
      </Surface>
    );
  }
  const makePhoneCall = (number) => {
    if (Platform.OS === "android") {
      Linking.openURL(`tel:${number}`);
    } else {
      Linking.openURL(`telprompt:${number}`);
    }
  };

  function CategoryBox({ department, name }) {
    return (
      <View style={decoration.category}>
        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
          }}
        >
          <Icon name="user" type="font-awesome" style={{ marginRight: 5 }} />
          <Text
            style={{
              color: "#01579b",
              fontSize: 20,
              fontWeight: "800",
              marginVertical: 5,
              textTransform: "capitalize",
            }}
          >
            {name}
          </Text>
        </View>
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

        <Divider style={{ marginVertical: 10 }} />
      </View>
    );
  }
  const DATA = [
    {
      category: "Health",
      data: [
        {
          id: 0,
          department: "Hospital",
          imageUrl: require("../../assets/images/header.jpg"),
        },
        {
          id: 1,
          department: "Ambulance",
          imageUrl: require("../../assets/images/header.jpg"),
        },
        {
          id: 2,
          department: "Rescue",
          imageUrl: require("../../assets/images/header.jpg"),
        },
      ],
    },
    {
      category: "Crimes",
      data: [
        {
          id: 0,
          department: "Police",
          imageUrl: require("../../assets/images/header.jpg"),
        },
      ],
    },
    {
      category: "Government",
      data: [
        {
          id: 0,
          department: "Central",
          imageUrl: require("../../assets/images/header.jpg"),
        },
        {
          id: 1,
          department: "District",
          imageUrl: require("../../assets/images/header.jpg"),
        },
        {
          id: 2,
          department: "City",
          imageUrl: require("../../assets/images/header.jpg"),
        },
      ],
    },
    {
      category: "Services",
      data: [
        {
          id: 0,
          department: "Toll Free Numbers",
          imageUrl: require("../../assets/images/header.jpg"),
          description: "little description",
        },
        {
          id: 1,
          department: "Helicopter",
          imageUrl: require("../../assets/images/header.jpg"),
        },
        {
          id: 2,
          department: "Firebrigade",
          imageUrl: require("../../assets/images/header.jpg"),
        },
      ],
    },
  ];
  function IconWidget({ name, type, onPress }) {
    return (
      <Icon
        name={name}
        type={type}
        style={{
          backgroundColor: "white",
          borderRadius: 50,
          padding: 20,
          marginRight: 10,
        }}
        onPress={onPress}
      />
    );
  }
  function IconWidgets() {
    return (
      <>
        <IconWidget
          name="police-badge"
          type="material-community"
          onPress={() => makePhoneCall(100)}
        />
        <IconWidget
          name="fire-extinguisher"
          type="font-awesome"
          onPress={() => makePhoneCall(101)}
        />
        <IconWidget
          name="ambulance"
          type="font-awesome"
          onPress={() => makePhoneCall(102)}
        />
        <IconWidget
          name="lightbulb-cfl-spiral-off"
          type="material-community"
          onPress={() => makePhoneCall(1151)}
        />
        <IconWidget
          name="hospital-building"
          type="material-community"
          onPress={() => makePhoneCall(102)}
        />
      </>
    );
  }
  return (
    <>
      <HeaderWidget navigation={navigation}>
        <ButtonWidget
          mode="outlined"
          onPress={() => {
            console.log("register");
            navigation.navigate("Register");
          }}
          text="register"
          style={{ flex: 1 }}
        />
        <ButtonWidget
          mode="contained"
          onPress={() => navigation.navigate("Login")}
          text="login"
          style={{ flex: 1 }}
        />
      </HeaderWidget>
      <View>
        <ScrollView style={decoration.categoryList}>
          <ScrollView
            style={{
              marginVertical: 10,
              display: "flex",
              flexDirection: "row",
              gap: 20,
            }}
            horizontal={true}
          >
            <IconWidgets />
          </ScrollView>
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
          <SelectionListWidget data={DATA} />
        </ScrollView>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
  },
  container: {
    flex: 1,
    paddingTop: StatusBar.currentHeight,
    marginHorizontal: 16,
  },
  item: {
    padding: 20,
    marginVertical: 8,
    backgroundColor: "white",
    borderRadius: 20,
    padding: 20,
  },
  title: {
    fontSize: 24,
  },
  data: {
    fontSize: 12,
  },
});

const decoration = StyleSheet.create({
  cardList: {
    flexDirection: "row",
    flexWrap: "wrap",
    gap: 10,
  },
  categoryList: {
    marginHorizontal: 10,
  },
});
export default Home;
