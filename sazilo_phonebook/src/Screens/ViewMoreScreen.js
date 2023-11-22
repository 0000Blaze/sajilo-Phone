import React, { useEffect } from "react";
import { View, Text, Dimensions, StyleSheet, FlatList } from "react-native";
import ContactCard from "../components/ContactCard";
import { useApiData } from "../context/DataContext";

export default function ViewMoreScreen({ route, navigation }) {
  const { department } = route.params;
  const { apiData, setApiDataValue } = useApiData();

  useEffect(() => {
    navigation.setOptions({
      title: department.toUpperCase(),
    });
  }, [department, navigation]);
  console.log(apiData["department"]);

  const renderContactCard = ({ item }) => (
    <ContactCard
      numbers={[item["Faculty Phone no."], item["Worker Contact"]]}
      details={item}
    />
  );

  return (
    <View style={styles.container}>
      {/* <Text style={styles.location}>
        Siddhicharan Municipality , Okhaldhunga
      </Text> */}
      <FlatList
        data={apiData.filter((contact) => department === "ambulance")}
        renderItem={renderContactCard}
        keyExtractor={(item, index) => index.toString()}
      />
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
  location: { color: "grey" },
});
