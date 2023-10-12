import "react-native-gesture-handler";
import { Icon } from "@rneui/themed";

import { NavigationContainer } from "@react-navigation/native";
import Home from "./src/Screens/Home";
import Login from "./src/Screens/Login";
import Register from "./src/Screens/Registration";
import Fav from "./src/Screens/Fav";
import Search from "./src/Screens/Search";
import Profile from "./src/Screens/Profile";

import { createMaterialBottomTabNavigator } from "@react-navigation/material-bottom-tabs";
import { createStackNavigator } from "@react-navigation/stack";

const Stack = createStackNavigator();
const Tab = createMaterialBottomTabNavigator();

export default function App() {
  return (
    <>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen
            name="HomeScreen"
            component={HomeScreen}
            options={{ headerShown: false }}
          />
          <Stack.Screen name="Login" component={Login} />
          <Stack.Screen name="Register" component={Register} />
          <Stack.Screen name="Profile" component={Profile} />
          <Stack.Screen name="Search" component={Search} />
        </Stack.Navigator>
      </NavigationContainer>
    </>
  );
}

function HomeScreen() {
  return (
    <Tab.Navigator initialRouteName="Home">
      <Tab.Screen
        name="Home"
        component={Home}
        options={{
          headerShown: true,
          tabBarIcon: ({ color }) => (
            <Icon name="home-outline" type="material-community" />
          ),
        }}
      />
      <Tab.Screen
        name="Search"
        component={Search}
        options={{
          tabBarIcon: ({ color }) => <Icon name="search" />,
        }}
      />
      <Tab.Screen
        name="Favourites"
        component={Fav}
        options={{
          tabBarIcon: ({ color }) => <Icon name="hearto" type="ant-design" />,
        }}
      />
    </Tab.Navigator>
  );
}
