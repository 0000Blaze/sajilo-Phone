import { StatusBar } from "expo-status-bar";
import {
  View,
  Text,
  Button,
  Image,
  StyleSheet,
  SafeAreaView,
  Dimensions,
  TouchableOpacity,
} from "react-native";

export default function FirstPage({ setPageSecond }) {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.titleBox}>
        <Text style={styles.title}>Category</Text>
      </View>
      <View style={styles.categoryContainer}>
        <TouchableOpacity
          style={styles.category}
          onPress={() => {
            setPageSecond(true);
          }}
        >
          <Image source={require("../../assets/button/ambulance.png")} />
        </TouchableOpacity>
      </View>
      <View style={styles.navStyles}>
        <Image source={require("../../assets/button/home-icon.png")} />
        <Image source={require("../../assets/button/search-icon.png")} />
        <Image source={require("../../assets/button/fav-icon.png")} />
        <Image source={require("../../assets/button/profile-icon.png")} />
      </View>
    </SafeAreaView>
  );
}
const windowWidth = Dimensions.get("window").width;
const windowHeight = Dimensions.get("window").height;
const styles = StyleSheet.create({
  container: {
    display: "flex",
    flexGrow: 1,
    height: windowHeight,
    width: windowWidth,
    paddingTop: 50,
    paddingHorizontal: 20,
    backgroundColor: "#FCA311",
  },
  navStyles: {
    height: 50,
    width: "auto",
    backgroundColor: "#14213D",
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    borderTopRightRadius: 20,
    borderTopLeftRadius: 20,
    padding: 20,
    margin: 20,
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
  title: {
    color: "#fff",
    textTransform: "capitalize",
  },
  categoryContainer: {
    marginTop: 20,
  },
  category: {},
});
