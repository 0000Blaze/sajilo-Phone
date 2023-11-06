import React from "react";
import {
  View,
  Text,
  SectionList,
  Image,
  SafeAreaView,
  TouchableOpacity,
  FlatList,
} from "react-native";

const SelectionListWidget = ({ data, navigation }) => {
  const handleSelection = (item) => {
    console.log(item.department);
    navigation.navigate("ViewMoreScreen", {
      department: item.department,
      // You can pass more variables here if needed
    });
  };

  const renderGridItem = ({ item }) => (
    <TouchableOpacity onPress={() => handleSelection(item)}>
      <View style={styles.gridItemContainer}>
        <Image source={item.imageUrl} style={styles.gridItemImage} />
        <Text style={styles.gridItemText}>{item.department}</Text>
        <Text style={styles.gridItemDescription}>description</Text>
      </View>
    </TouchableOpacity>
  );

  return (
    <SafeAreaView>
      <SectionList
        sections={data}
        keyExtractor={(item) => item.id.toString()}
        style={{ marginBottom: "30%" }}
        renderSectionHeader={({ section: { category } }) => (
          <View
            style={{
              borderBottomWidth: 1,
              borderColor: "lightgray",
              marginBottom: 10,
            }}
          >
            <Text style={{ fontSize: 18, fontWeight: "bold" }}>{category}</Text>
          </View>
        )}
        renderItem={({ section }) => (
          <View style={styles.gridContainer}>
            <FlatList
              data={section.data}
              keyExtractor={(item) => item.id.toString()}
              renderItem={renderGridItem}
              numColumns={3} // Display three boxes per row
            />
          </View>
        )}
      />
    </SafeAreaView>
  );
};

const styles = {
  gridContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    flexWrap: "wrap",
  },
  gridItemContainer: {
    backgroundColor: "white",
    borderRadius: 10,
    margin: 5,
    width: 100, // 3 boxes in a row, adjust as needed
  },
  gridItemImage: {
    width: "100%",
    height: 100,
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
  },
  gridItemText: {
    paddingHorizontal: 15,
    paddingVertical: 10,
  },
  gridItemDescription: {
    paddingHorizontal: 15,
    marginBottom: 10,
  },
};

export default SelectionListWidget;
