import { StatusBar, View, Text, ScrollView, Dimensions } from "react-native";
import { TextInput, Button } from "react-native-paper";
import ButtonWidget from "../components/ButtonWidget";

const windowHeight = Dimensions.get("window").height;
// const windowWidth = Dimensions.get("window").width;
function Profile({ navigation }) {
  return (
    <ScrollView>
      <View style={{ position: "relative", height: windowHeight }}>
        <View style={{ backgroundColor: "black", height: 200 }}></View>
        {/* map view */}
        <View
          style={{
            position: "absolute",
            top: 150, // Adjust the top value to control the vertical position
            left: 150,
          }}
        >
          <View
            style={{
              height: 100,
              width: 100,
              borderRadius: 50,
              backgroundColor: "blue",
            }}
          ></View>
          <Text style={{ textAlign: "center", color: "blue" }}>Name</Text>
        </View>
        <ProfileDetail />
      </View>
    </ScrollView>
  );
}
function ProfileDetail() {
  return (
    <View style={{ marginTop: 100 }}>
      <Detail title="Email" data="****@gmail.com" />
      <Detail title="Number" data="****09" />
      <ButtonWidget
        mode="contained"
        onPress={() => {
          navigation.navigate("Home");
          return Alert.alert(
            "Congratulations!!! ",
            "You are Logged In",
            [
              {
                text: "Cancel",
                // onPress: () => Alert.alert("Cancel Pressed"),
                style: "cancel",
              },
            ],
            {
              cancelable: true,
              onDismiss: () =>
                Alert.alert(
                  "This alert was dismissed by tapping outside of the alert dialog."
                ),
            }
          );
        }}
        text="login"
        style={{ marginVertical: 15, paddingVertical: 5, minWidth: "10%" }}
      />
    </View>
  );
  function Detail({ title, data }) {
    return (
      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-between",
          paddingHorizontal: 20,
        }}
      >
        <Text style={{ fontSize: 16, fontWeight: 700, paddingVertical: 15 }}>
          {title}
        </Text>
        <Text style={{ fontSize: 16, color: "grey", paddingVertical: 15 }}>
          {data}
        </Text>
      </View>
    );
  }
}

export default Profile;
