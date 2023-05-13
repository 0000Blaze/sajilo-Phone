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
import * as FileSystem from "expo-file-system";

const contacts = [
  { name: "Tejan Khanal", phone: "+9779841312349", post: "Mayor" },
  { name: "Kedarbabu Basnet", phone: "+9779862605188", post: "Deputy Mayor" },
  {
    name: "Balram Lamshal",
    phone: "+9779852823111",
    post: "Chief Executive Officer",
  },
  {
    name: "Sushma Acharya",
    phone: "+9779852843333",
    post: "Information Officer",
  },
  { name: "Rakesh Maharjan", phone: "+9779849460147", post: "Sajilo Phone" },
];

export default function SecondPage({ setPageSecond }) {
  const makePhoneCall = (phone) => {
    if (Platform.OS === "android") {
      Linking.openURL(`tel:${phone}`);
    } else {
      Linking.openURL(`telprompt:${phone}`);
    }
  };

  return (
    <View style={styles.container}>
      <Text>Search : </Text>
      <View style={styles.searchBox}>
        <TextInput style={styles.searchInput} />
      </View>
      <Text></Text>
      <Text>Siddhicharan Municipality , Okhaldhunga</Text>
      <View style={styles.contactList}>
        {contacts.map((contact, index) => (
          <TouchableOpacity onPress={() => makePhoneCall(contact.phone)}>
            <View style={styles.contact} key={index}>
              <Text>
                {contact.name} | {contact.post}
              </Text>

              <Image source={require("../../assets/button/phone.png")} />
            </View>
          </TouchableOpacity>
        ))}
        <View style={styles.navStyles}>
          <TouchableOpacity onPress={() => setPageSecond(false)}>
            <Image source={require("../../assets/button/home-icon.png")} />
          </TouchableOpacity>
          <TouchableOpacity>
            <Image source={require("../../assets/button/search-icon.png")} />
          </TouchableOpacity>
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
