import { useState, useEffect } from "react";
import { View, Text, StyleSheet, ScrollView } from "react-native";
import SearchBox from "../components/SearchBox";
import { Chip } from "react-native-paper";
import { Header, Icon } from "@rneui/base";

import HeaderWidget from "../components/HeaderWidget";
import ButtonWidget from "../components/ButtonWidget";

export default function Search({ navigation }) {
  const [selectedDistance, setSelectedDistance] = useState("");
  const [selectedDepartment, setSelectedDepartment] = useState("");

  const [selectedFilter, setSelectedFilter] = useState(0);
  useEffect(() => {
    console.log("Selected Distance:", selectedDistance);
    console.log("Selected Department:", selectedDepartment);
  }, [selectedDistance, selectedDepartment]);

  return (
    <>
      <HeaderWidget>
        <Text
          style={{
            color: "white",
            fontSize: 24,
            fontWeight: "900",
            textShadowColor: "grey",
          }}
        >
          Search Institutions Nearby
        </Text>
      </HeaderWidget>
      <View style={decoration.searchContainer}>
        <SearchBox />
        <ButtonWidget
          onPress={() => {
            selectedFilter === 0
              ? setSelectedFilter("auto")
              : setSelectedFilter(0);
          }}
          text="filter"
        />
        <View style={decoration.countParent}>
          <Text style={decoration.count}>Results </Text>
          <Text style={decoration.count}>(97)</Text>
        </View>
        <View style={{ height: selectedFilter, overflow: "hidden" }}>
          {/* filter */}
          <Text>Distance</Text>
          <View style={decoration.filter}>
            <Selection
              distance={"Near Me"}
              selected={selectedDistance}
              onSelect={() =>
                handleSelection(
                  "Near Me",
                  selectedDistance,
                  setSelectedDistance
                )
              }
            />
            <Selection
              distance={"+20KM"}
              selected={selectedDistance}
              onSelect={() =>
                handleSelection("+20KM", selectedDistance, setSelectedDistance)
              }
            />
            {/* Add more Selection components for distances */}
          </View>

          <Text>Department</Text>
          <View style={decoration.filter}>
            <Selection
              distance={"Hospital"}
              selected={selectedDepartment}
              onSelect={() =>
                handleSelection(
                  "Hospital",
                  selectedDepartment,
                  setSelectedDepartment
                )
              }
            />
            <Selection
              distance={"Police"}
              selected={selectedDepartment}
              onSelect={() =>
                handleSelection(
                  "Police",
                  selectedDepartment,
                  setSelectedDepartment
                )
              }
            />
            {/* Add more Selection components for departments */}
          </View>
        </View>

        {/* contactCard display */}
        <ScrollView>
          <ContactCard />
          <ContactCard />
          <ContactCard />
          <ContactCard />
          <ContactCard />
          <ContactCard />
          <ContactCard />
          <ContactCard />
          <ContactCard />
          <ContactCard />
          <ContactCard />
          <ContactCard />
          <ContactCard />
          <ContactCard />
          <ContactCard />
        </ScrollView>
      </View>
    </>
  );
}
function ContactCard() {
  return (
    <View style={decoration.contactCard}>
      <View style={decoration.details}>
        <Text
          style={[
            decoration.detailsTitle,
            { fontSize: 24, fontWeight: "400", marginBottom: 2 },
          ]}
        >
          Suryabinayak Hospital
        </Text>
        <Text style={decoration.address}>
          Address: thulobharyang, kathmandu{" "}
        </Text>
        <Text style={{ justifyContent: "center" }}>
          Helpline (1) <Text style={decoration.number}>9860817538</Text>
        </Text>
      </View>
      <View
        style={{
          justifyContent: "center",
          alignItems: "center",
          width: "30%",
        }}
      >
        <Text style={decoration.distance}>1.0 KM</Text>
      </View>
    </View>
  );
}

const decoration = StyleSheet.create({
  searchContainer: {
    marginTop: 10,
    marginHorizontal: 10,
    gap: 10,
  },
  filter: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "center",
  },

  count: {
    fontSize: 30,
    color: "#012169",
    fontWeight: "200",
  },
  countParent: {
    alignContent: "center",
    flexDirection: "row",
    borderBottomWidth: 0.2,
    borderColor: "#012169",
    paddingBottom: 10,
  },
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
});

function Selection({ distance, selected, onSelect }) {
  const isSelected = selected === distance;

  return (
    <Chip
      onPress={onSelect}
      mode={isSelected ? "outlined" : "flat"}
      selected={isSelected}
      closeIcon={<Icon name="cross" />}
      style={{
        marginRight: 10,
        marginTop: 10,
      }}
    >
      {distance}
    </Chip>
  );
}

function handleSelection(distance, selected, setSelected) {
  if (selected === distance) {
    // Double-press to unselect
    setSelected("");
  } else {
    setSelected(distance);
  }
}
