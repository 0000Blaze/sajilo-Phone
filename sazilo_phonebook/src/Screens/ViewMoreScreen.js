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

  const filteredData = apiData.filter((contact) => department === "ambulance");

  const renderContactCard = ({ item }) => (
    <ContactCard
      numbers={[item["Faculty Phone no."], item["Worker Contact"]]}
      details={item}
    />
  );

  return (
    <View style={styles.container}>
      {filteredData.length === 0 ? (
        <Text style={styles.noDataMessage}>No data available for this department</Text>
      ) : (
        <FlatList
          data={filteredData}
          renderItem={renderContactCard}
          keyExtractor={(item, index) => index.toString()}
        />
      )}
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
  location: {
    color: "grey",
  },
  noDataMessage: {
    fontSize: 18,
    textAlign: "center",
    marginTop: 20,
  },
});
