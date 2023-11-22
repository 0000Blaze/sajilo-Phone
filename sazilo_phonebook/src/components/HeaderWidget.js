import * as React from "react";
import { Appbar } from "react-native-paper";
import { Platform, ImageBackground, View, Text } from "react-native";
import { StatusBar } from "expo-status-bar";
import { Icon } from "@rneui/base";
// const MORE_ICON = Platform.OS === "ios" ? "dots-horizontal" : "dots-vertical";
import image from "../../assets/images/header.jpg";
import { useNavigation } from "@react-navigation/native";
const HeaderWidget = ({ children }) => {
  const navigation = useNavigation();
  return (
    <View
      style={{
        borderColor: "#012169",
        borderBottomWidth: 0.5,
      }}
    >
      <ImageBackground source={image} resizeMode="cover">
        <Appbar.Header
          style={{
            backgroundColor: "transparent",
            height: 100,
            alignItems: "flex-start",
            flexDirection: "column",
            paddingTop: 10,
            paddingLeft: 20,
            backgroundColor: "#01216930",
          }}
        >
          <StatusBar backgroundColor="#01216930" />
          <View
            style={{
              flexDirection: "row",
              height: "auto",
              maxWidth: 110,
              marginBottom: 15,
            }}
            //profile
          >
            <Icon
              name="account-circle"
              color="#fff"
              // style={{ backgroundColor: "skyblue" }}
              onPress={() => {
                navigation.navigate("Profile");
              }}
            />
            <Text
              style={{
                color: "#fff",
                marginLeft: 5,
                fontSize: 18,
                textAlign: "center",
                fontWeight: "bold",
                textTransform: "capitalize",
              }}
            >
              welcome
            </Text>
          </View>
          <View
            style={{
              flexDirection: "row",
              gap: 10,
              width: "100%",
            }}
          >
            {children}
          </View>
          {/* <Appbar.Action icon="magnify" color="white" onPress={() => {}} />
  <Appbar.Action icon={MORE_ICON} color="white" onPress={() => {}} /> */}
        </Appbar.Header>
      </ImageBackground>
    </View>
  );
};

export default HeaderWidget;
