import {
  View,
  Text,
  Image,
  Dimensions,
  StyleSheet,
  Platform,
  Linking,
  TouchableOpacity,
} from "react-native";

import ContactCard from "../components/ContactCard";
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

export default function ViewMoreScreen({ setPageSecond }) {
  const makePhoneCall = (phone) => {
    if (Platform.OS === "android") {
      Linking.openURL(`tel:${phone}`);
    } else {
      Linking.openURL(`telprompt:${phone}`);
    }
  };
  const number = [91203123, 98454];
  return (
    <View style={styles.container}>
      <Text style={styles.location}>
        Siddhicharan Municipality , Okhaldhunga
      </Text>
      <ContactCard numbers={number} />
      {/* <View style={styles.contactList}>
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
      </View> */}
    </View>
  );
}

const windowWidth = Dimensions.get("window").width;
const windowHeight = Dimensions.get("window").height;
const styles = StyleSheet.create({
  container: {
    display: "flex",
    height: windowHeight,
    width: windowWidth,
    paddingHorizontal: 10,
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
  location: { color: "grey" },
  contactList: {
    display: "flex",
    alignItems: "center",
    borderColor: "black",
    borderWidth: 1,
    overflow: "hidden",
    width: windowWidth - 20,
  },
  contact: {
    backgroundColor: "#fff",
    width: windowWidth - 0,
    marginTop: 20,
    paddingVertical: 5,
    paddingHorizontal: 20,
    borderRadius: 5,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    color: "black",
  },
});
