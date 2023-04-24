import { StatusBar } from "expo-status-bar";
import { Button, StyleSheet, TextInput, View, Text,Dimensions } from "react-native";
import { useState, useEffect } from "react";
import * as Location from "expo-location";
import FirstPage from "./src/Screens/FirstPage";
import SecondPage from "./src/Screens/SecondPage";

export default function App() {
  const [location, setLocation] = useState();
  const [address, setAddress] = useState();
  // const [currentLocaton, setCurrentLocation] = useState();

  // Location.setGoogleApiKey("AIzaSyD5GUOMMrDY5Ml8JOQ5j7z7p9f8GaGCDBg");

  useEffect(() => {
    const getPermissions = async () => {
      let { status } = await Location.requestForegroundPermissionsAsync();
      if (status !== "granted") {
        console.log("Please grant location permissions");
        return;
      }

      let currentLocation = await Location.getCurrentPositionAsync({});
      setLocation(currentLocation);
      console.log("Location:");
      console.log(currentLocation);
    };
    getPermissions();
  }, []);

  const geocode = async () => {
    const geocodedLocation = await Location.geocodeAsync(address);
    console.log("Geocoded Address:");
    console.log(geocodedLocation);
  };

  const reverseGeocode = async () => {
    const reverseGeocodedAddress = await Location.reverseGeocodeAsync({
      longitude: location.coords.longitude,
      latitude: location.coords.latitude,
    });

    console.log("Reverse Geocoded:");
    console.log(reverseGeocodedAddress);
    // setCurrentLocation(reverseGeocodedAddress[0]);
  };

  return (
    <View style={styles.container}>
      {/* <TextInput
        placeholder="Address"
        value={address}
        onChangeText={setAddress}
      />
      <Button title="Get Geocode Address" onPress={geocode} />
      <Text></Text>
      <Text></Text>
      <Button title="Get Current Location" onPress={reverseGeocode} />
      <StatusBar style="auto" /> */}
      <FirstPage/>
      {/* <SecondPage/> */}
    </View>
  );
}
const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;
const styles = StyleSheet.create({
  container: {
    flex: 1,  
    height:windowHeight,
    width:windowWidth,
    backgroundColor: "#fff",
    alignItems: "center",
  },
});
