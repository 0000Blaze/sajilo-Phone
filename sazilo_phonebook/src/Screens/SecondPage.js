import { StatusBar } from "expo-status-bar";
import {
  View,
  Text,
  Image,
  TextInput,
  Dimensions,
  StyleSheet,
  Platform,
  Linking,
  TouchableOpacity,
} from "react-native";

export default function SecondPage({ setPageSecond }) {
  const makePhoneCall = () => {
    if (Platform.OS === "android") {
      Linking.openURL(`tel:${9849460147}`);
    } else {
      Linking.openURL(`telprompt:${9849460147}`);
    }
  };
  return (
    <View style={styles.container}>
      <Text>SecondPage</Text>
      <View style={styles.searchBox}>
        <TextInput style={styles.searchInput} />
      </View>
      <View style={styles.contactList}>
        <View style={styles.contact}>
          <Text> Name: Rakesh Maharjan</Text>
          <TouchableOpacity onPress={() => makePhoneCall()}>
            <Image source={require("../../assets/button/phone.png")} />
          </TouchableOpacity>
        </View>
        <View style={styles.navStyles}>
          <TouchableOpacity
            onPress={() => {
              setPageSecond(false);
            }}
          >
            <Image source={require("../../assets/button/home-icon.png")} />
          </TouchableOpacity>
          <Image source={require("../../assets/button/search-icon.png")} />
          <Image source={require("../../assets/button/fav-icon.png")} />
          <Image source={require("../../assets/button/profile-icon.png")} />
        </View>
      </View>
    </View>
  );
}

const windowWidth = Dimensions.get("window").width;
const windowHeight = Dimensions.get("window").height;
const styles = StyleSheet.create({
  container: {
    display: "flex",
    flexGrow: 1,
    height: windowHeight,
    width: windowWidth,
    paddingTop: 50,
    paddingHorizontal: 20,
    backgroundColor: "#FCA311",
  },
  searchBox: {
    height: 50,
    width: "auto",
    backgroundColor: "#14213D",
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
  },
  searchInput: {
    zIndex: 12,
    borderColor: "black",
    borderWidth: 1,
    width: "100%",
  },
  titleBox: {
    backgroundColor: "#14213D",
    height: 30,
    width: 100,
    fontStyle: "bold",
    paddingVertical: 5,
    paddingHorizontal: 10,
    borderTopLeftRadius: 5,
    borderBottomLeftRadius: 5,
  },
  contactList: {
    display: "flex",
    alignItems: "center",
  },
  contact: {
    backgroundColor: "#fff",
    width: "100%",
    marginTop: 20,
    paddingVertical: 5,
    paddingHorizontal: 20,
    borderRadius: 5,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    color: "black",
  },
  navStyles: {
    height: 50,
    width: 250,
    backgroundColor: "#14213D",
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    borderTopRightRadius: 20,
    borderTopLeftRadius: 20,
    padding: 20,
    margin: 20,
  },
});
