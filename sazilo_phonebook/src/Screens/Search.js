import { useState } from "react";
import { View, Text, StyleSheet } from "react-native";
import SearchBox from "../components/SearchBox";
import { Chip } from "react-native-paper";

import DropDown from "react-native-paper-dropdown";

const cardDetails = [
  {
    name: "sijen",
    image: require("../../assets/favicon.png"),
    number: 9876542378,
    department: "police",
    id: 1,
  },
  {
    name: "sijen",
    image: require("../../assets/favicon.png"),
    number: 9876542378,
    department: "police",
    id: 2,
  },
  {
    name: "sijen",
    image: require("../../assets/favicon.png"),
    number: 9876542378,
    department: "police",
    id: 3,
  },
  {
    name: "sijen",
    image: require("../../assets/favicon.png"),
    number: 9876542378,
    department: "police",
    id: 4,
  },
  {
    name: "sijen",
    image: require("../../assets/favicon.png"),
    number: 9876542378,
    department: "police",
    id: 5,
  },
  {
    name: "sijen",
    image: require("../../assets/favicon.png"),
    number: 9876542378,
    department: "police",
    id: 6,
  },
  {
    name: "sijen",
    image: require("../../assets/favicon.png"),
    number: 9876542378,
    department: "police",
    id: 7,
  },
];
export default function Search() {
  return (
    <View style={decoration.searchContainer}>
      <SearchBox />
      <Text>Distance</Text>
      <View style={decoration.distance}>
        <Selection distance={10} />
        <Selection distance={20} />
        <Selection distance={40} />
        <Selection distance={50} />
      </View>
      <View style={decoration.department}>
        <Text>Department</Text>
      </View>
    </View>
  );
}
const decoration = StyleSheet.create({
  searchContainer: {
    marginTop: 10,
    marginHorizontal: 10,
    flexWrap: "wrap",
    gap: 10,
  },
  distance: {
    flexDirection: "row",
    flexWrap: "nowrap",
  },
});

function Selection({ distance }) {
  const [selected, setSelected] = useState(false);
  return (
    <Chip
      onPress={() => {
        setSelected(!selected);
      }}
      mode={selected ? "flat" : "outlined"}
      selected={selected}
    >
      +{distance}KM
    </Chip>
  );
}
