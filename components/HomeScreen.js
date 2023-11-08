import React, { useState } from "react";
import { View, Text, Switch, StyleSheet } from "react-native";
import { FlatList } from "react-native-gesture-handler";
import MiscPropTests from "./AccessibilityTests";
import Dialog from "./Dialog";
import SwitchControl from "./FormControls";

function HomeScreen() {
  return (
    <View style={styles.homeView}>
      <View style={styles.contentView}>
        <Text role="heading" style={styles.headingText}>
          React Native A11y Tests
        </Text>
      </View>
    </View>
  );
}
export default HomeScreen;

const styles = StyleSheet.create({
  homeView: {
    flex: 1,
    justifyContent: "flex-center",
    alignItems: "center",
  },
  contentView: {
    flex: 1,
    justifyContent: "center",
    textAlign: "center",
  },
  headingText: {
    fontWeight: "bold",
    fontSize: 25,
    justifyContent: "center",
    textAlign: "center",
  },
});
