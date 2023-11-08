import React from "react";
import { createDrawerNavigator } from "@react-navigation/drawer";

import { StyleSheet, View, FlatList, Text, Button } from "react-native";
import { NavigationContainer } from "@react-navigation/native";

import Dialog from "./components/Dialog";
import MiscPropTests from "./components/AccessibilityTests";
import SwitchControl from "./components/FormControls";
import HomeScreen from "./components/HomeScreen";

const Drawer = createDrawerNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Drawer.Navigator
        initialRouteName="Home"
        screenOptions={{
          headerStyle: {
            backgroundColor: "#2fede7",
          },
          headerTintColor: "#000000",
          headerTitleStyle: {
            fontWeight: "bold",
          },
        }}
      >
        <Drawer.Screen name="Home" component={HomeScreen} />

        <Drawer.Screen name="Prop Tests" component={MiscPropTests} />
        <Drawer.Screen name="Dialog" component={Dialog} />
        <Drawer.Screen name="Forms" component={SwitchControl} />
      </Drawer.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  appContainer: {
    flex: 1,
    paddingTop: 60,
    paddingHorizontal: 16,
  },
  goalsContainer: {
    flex: 4,
  },
});
