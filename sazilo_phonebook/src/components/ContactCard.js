import React from "react";
import {
  View,
  Text,
  StyleSheet,
  Linking,
  TouchableOpacity,
} from "react-native";

function ContactCard({ numbers, details }) {
  const makePhoneCall = (phone) => {
    if (Platform.OS === "android") {
      Linking.openURL(`tel:${phone}`);
    } else {
      Linking.openURL(`telprompt:${phone}`);
    }
  };

  return (
    <View style={decoration.contactCard}>
      <View style={decoration.details}>
        <Text
          style={[
            decoration.detailsTitle,
            { fontSize: 24, fontWeight: "400", marginBottom: 2 },
          ]}
        >
          {details ? details["Faculty Name"] : "Default Title"}
        </Text>
        <Text style={decoration.address}>
          {details
            ? `${details["District"]}, ${details["Province"]}`
            : "Default Address"}
        </Text>

        {numbers.map((number, index) => (
          <TouchableOpacity
            key={index}
            onPress={() => {
              // const ph = 9860817530; // What is the purpose of this line?
              makePhoneCall(number);
            }}
          >
            <View style={decoration.button}>
              <Text style={{ justifyContent: "center" }}>
                {`Helpline (${index + 1}) `}
                <Text style={decoration.number}>{number}</Text>
              </Text>
            </View>
          </TouchableOpacity>
        ))}
      </View>
      <View
        style={{ justifyContent: "center", alignItems: "center", width: "30%" }}
      >
        <Text style={decoration.distance}>1.0 KM</Text>
      </View>
    </View>
  );
}

const decoration = StyleSheet.create({
  contactCard: {
    flexDirection: "row",
    height: "auto",
    borderWidth: 1,
    borderRadius: 10,
    marginBottom: "3%",
  },
  distance: {
    height: "auto",
    width: 100,
    textAlign: "center",
    paddingVertical: "6%",
    paddingHorizontal: "2%",
    borderRadius: 20,
    borderWidth: 0.5,
    borderColor: "black",
    backgroundColor: "#01216980",
    color: "white",
  },
  details: {
    // borderWidth: 1,
    width: "70%",
    paddingVertical: 10,
    paddingHorizontal: 20,
  },
  address: { fontSize: 12 },
  number: {
    borderWidth: 1,
    fontSize: 18,
    fontWeight: "900",
    color: "#012169",
    paddingHorizontal: 5,
    marginTop: "7%",
  },
  button: {
    paddingVertical: 3,
  },
});

export default ContactCard;
