import React from "react";
import {
  View,
  Text,
  ScrollView,
  Image,
  SafeAreaView,
  TouchableOpacity,
  FlatList,
} from "react-native";

const SelectionListWidget = ({ data, navigation, datas }) => {
  const handleSelection = (item) => {
    console.log(item.department);
    navigation.navigate("ViewMoreScreen", {
      department: item.department,
      datas: datas,
      // You can pass more variables here if needed
    });
  };

  const renderGridItem = ({ item }) => (
    <TouchableOpacity onPress={() => handleSelection(item)}>
      <View style={styles.gridItemContainer}>
        <Image source={item.imageUrl} style={styles.gridItemImage} />
        <Text style={styles.gridItemText}>{item.department}</Text>
        {/* <Text style={styles.gridItemDescription}>description</Text> */}
      </View>
    </TouchableOpacity>
  );

  return (
    <SafeAreaView>
      
      <FlatList
        style={{ marginBottom: "30%" }}
        data={data}
        keyExtractor={(item) => item.category}
        renderItem={({ item }) => (
          <View
            style={{
              borderBottomWidth: 1,
              borderColor: "lightgray",
              marginBottom: 10,
            }}
          >
            <Text style={{ fontSize: 18, fontWeight: "bold" }}>
              {item.category}
            </Text>
            <FlatList
              data={item.data}
              keyExtractor={(item) => item.id.toString()}
              renderItem={renderGridItem}
              numColumns={3}
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
    textAlign: "center",
    textTransform: "uppercase",
    fontWeight: 900,
  },
  gridItemDescription: {
    paddingHorizontal: 15,
    marginBottom: 10,
  },
};

export default SelectionListWidget;
