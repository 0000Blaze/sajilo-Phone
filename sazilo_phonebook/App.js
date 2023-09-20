import { Icon } from "@rneui/themed";

import { createDrawerNavigator } from "@react-navigation/drawer";
import { NavigationContainer } from "@react-navigation/native";
import Home from "./src/Screens/Home";
import Login from "./src/Screens/Login";
import Fav from "./src/Screens/Fav";
import Search from "./src/Screens/Search";

import { StatusBar } from "react-native";
import { createMaterialBottomTabNavigator } from "@react-navigation/material-bottom-tabs";

const Drawer = createDrawerNavigator();
const Tab = createMaterialBottomTabNavigator();
export default function App() {
  return (
    <>
      <NavigationContainer>
        <Tab.Navigator>
          <Tab.Screen
            name="Home"
            component={DrawerSection}
            options={{ headerShown: false }}
            Icon
          />
          <Tab.Screen
            name="Search"
            component={Search}
            options={{
              headerShown: false,
              tabBarIcon: () => {
                <Icon name="home" />;
              },
            }}
          />
          <Tab.Screen
            name="Fav"
            component={Fav}
            options={{ headerShown: false }}
          />
        </Tab.Navigator>
      </NavigationContainer>
    </>
  );
}

function DrawerSection() {
  return (
    <>
      <Drawer.Navigator initialRouteName="HomeScreen">
        <Drawer.Screen
          name="HomeScreen"
          component={Home}
          options={{ headerShown: false }}
        />
        <Drawer.Screen
          name="SignIn"
          component={Login}
          options={{ headerShown: false }}
        />
      </Drawer.Navigator>

      <StatusBar hidden={true} />
    </>
  );
}
