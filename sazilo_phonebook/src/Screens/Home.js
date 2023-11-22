import { useState, useEffect } from "react";
import {
  View,
  Text,
  Image,
  ScrollView,
  StyleSheet,
  TouchableOpacity,
  Linking,
  StatusBar,
  Platform,
  SafeAreaView,
} from "react-native";
import { Icon } from "@rneui/base";

import HeaderWidget from "../components/HeaderWidget";
import SelectionListWidget from "../components/SelectionListWidget";
import ButtonWidget from "../components/ButtonWidget";

import { useApiData } from "../context/DataContext";

import * as Location from "expo-location";

function Home({ navigation }) {
  const data = [];
  const makePhoneCall = (number) => {
    if (Platform.OS === "android") {
      Linking.openURL(`tel:${number}`);
    } else {
      Linking.openURL(`telprompt:${number}`);
    }
  };
  const DATA = [
    {
      category: "Health",
      data: [
        {
          id: 0,
          department: "hospital",
          imageUrl: require("../../assets/images/hospital.png"),
        },
        {
          id: 1,
          department: "ambulance",
          imageUrl: require("../../assets/images/ambulance.jpg"),
        },
        {
          id: 2,
          department: "rescue",
          imageUrl: require("../../assets/images/rescue.jpg"),
        },
      ],
    },
    {
      category: "Crimes",
      data: [
        {
          id: 0,
          department: "police",
          imageUrl: require("../../assets/images/police.png"),
        },
      ],
    },
    {
      category: "Government",
      data: [
        {
          id: 0,
          department: "central",
          imageUrl: require("../../assets/images/header.jpg"),
        },
        {
          id: 1,
          department: "district",
          imageUrl: require("../../assets/images/header.jpg"),
        },
        {
          id: 2,
          department: "city",
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
          borderWidth: 1,
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
  const [location, setLocation] = useState(null);
  const [errorMsg, setErrorMsg] = useState(null);
  const { apiData, setApiDataValue } = useApiData();
  useEffect(() => {
    const getLocation = async () => {
      try {
        let { status } = await Location.requestForegroundPermissionsAsync();
        if (status !== "granted") {
          setErrorMsg("Permission to access location was denied");
          return;
        }

        let location = await Location.getCurrentPositionAsync({});
        setLocation(location);
      } catch (err) {
        console.log(err);
      }
    };
    const fetchData = async () => {
      try {
        const response = await fetch(
          "https://sijen.github.io/sajilophonedb/db.json"
        );

        if (!response.ok) {
          throw new Error("Network request failed");
        }

        const data = await response.json();
        setApiDataValue(data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
    getLocation();
  }, []);

  let text = "Waiting..";
  if (errorMsg) {
    text = errorMsg;
  } else if (location) {
    text = JSON.stringify(location);
  }
  console.log(text);
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
        <SafeAreaView style={decoration.categoryList}>
          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-evenly",
              marginVertical: 10,
            }}
            horizontal={true}
          >
            <IconWidgets />
          </View>
          <Text
            style={{
              color: "#01579b",
              fontSize: 18,
              fontWeight: "800",
              marginBottom: 10,
              // borderWidth: 1,
            }}
          >
            What's your emergency?
          </Text>
          <SelectionListWidget
            data={DATA}
            navigation={navigation}
            datas={data}
          />
        </SafeAreaView>
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
    flexDirection: "column",
    // borderWidth: 1,
    // borderColor: "red",
    height: "90.5%",
    overflow: "hidden",
  },
});
export default Home;
