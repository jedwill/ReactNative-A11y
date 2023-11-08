import React, { useState } from "react";
import { View, Text, Switch, StyleSheet } from "react-native";

function SwitchControl() {
  const [notificationEnabled, setNotificationEnabled] = useState(false);
  const [locationEnabled, setLocationEnabled] = useState(false);
  const toggleNotification = () =>
    setNotificationEnabled((previousState) => !previousState);
  const toggleLocation = () =>
    setLocationEnabled((previousState) => !previousState);

  return (
    <View style={styles.formsContainer}>
      <View style={styles.container}>
        <Text style={styles.labelText}>Allow Notifications</Text>
        <Switch
          trackColor={{ false: "#767577", true: "#81b0ff" }}
          thumbColor={notificationEnabled ? "#f5dd4b" : "#f4f3f4"}
          ios_backgroundColor="#3e3e3e"
          onValueChange={toggleNotification}
          value={notificationEnabled}
          accessibilityLabel="Allow Notifications"
        />
      </View>
      <View style={styles.container}>
        <Text style={styles.labelText}>Allow Location Access</Text>
        <Switch
          trackColor={{ false: "#767577", true: "#81b0ff" }}
          thumbColor={locationEnabled ? "#f5dd4b" : "#f4f3f4"}
          ios_backgroundColor="#3e3e3e"
          onValueChange={toggleLocation}
          value={locationEnabled}
          accessibilityLabel="Allow Location Access"
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  formsContainer: {
    flex: 1,
    justifyContent: "flex-start",
    alignItems: "center",
  },
  container: {
    flexDirection: "row",
    alignItems: "center",
    paddingVertical: 20,
    paddingHorizontal: 10,
    borderBottomWidth: 1,
    borderBottomColor: "#CCCCCC",
  },
  labelText: {
    fontSize: 18,
    flex: 1,
  },
});

export default SwitchControl;
