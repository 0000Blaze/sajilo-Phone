import React from "react";
import { View, Text, SectionList, Image, SafeAreaView } from "react-native";
import ButtonWidget from "./ButtonWidget";
const SelectionListWidget = ({ data }) => {
  const handleSelection = (item) => {
    console.log(item.department);
  };

  return (
    <SafeAreaView horizontal={false} style={{ flex: 1 }}>
      <SectionList
        sections={data}
        keyExtractor={(item, index) => index.toString()}
        renderSectionHeader={({ section: { category } }) => (
          <Text style={{ fontSize: 18, fontWeight: "bold" }}>{category}</Text>
        )}
        renderItem={({ item }) => (
          <View
            style={{
              flexDirection: "column",
              borderBottomWidth: 1,
              borderColor: "lightgray",
              paddingBottom: 10,
            }}
          >
            <Text>{item.department}</Text>
            <Image
              source={item.imageUrl}
              style={{
                width: "100%",
                height: 100,
                borderTopLeftRadius: 10,
                borderTopRightRadius: 10,
                borderColor: "black",
              }}
            />
            <View
              style={{
                flex: 1,
                height: 10,
                backgroundImage: "linear-gradient(to bottom, #ff0000, #00ff00)",
              }}
            ></View>

            <View
              style={{
                backgroundColor: "white",
                borderBottomLeftRadius: 10,
                borderBottomRightRadius: 10,
                paddingHorizontal: 15,
                paddingVertical: 10,
              }}
            >
              <Text style={{ marginBottom: 10 }}>description</Text>
              <ButtonWidget
                mode="contained"
                onPress={() => handleSelection(item)}
                text="view more"
              />
            </View>
          </View>
        )}
      />
    </SafeAreaView>
  );
};
const styles = {
  itemContainer: {
    padding: 16,
    borderBottomWidth: 1,
    borderBottomColor: "#ccc",
  },
  categoryName: {
    fontSize: 18,
    fontWeight: "bold",
  },
  departmentsContainer: {
    flexDirection: "row",
    flexWrap: "wrap",
  },
  department: {
    marginRight: 5,
    marginBottom: 5,
    backgroundColor: "#eee",
    padding: 5,
    borderRadius: 5,
  },
  imagesContainer: {
    flexDirection: "row",
    flexWrap: "wrap",
  },
  image: {
    width: 100,
    height: 100,
    marginRight: 5,
  },
};

export default SelectionListWidget;
