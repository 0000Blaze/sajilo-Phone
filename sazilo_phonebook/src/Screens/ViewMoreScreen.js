import { useLayoutEffect } from "react";
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

export default function ViewMoreScreen({ route, navigation }) {
  const { department } = route.params;
  const number = [91203123, 98454];
  useLayoutEffect(() => {
    // Set the screen title here
    navigation.setOptions({
      title: department.toUpperCase(),
    });
  }, []);
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
