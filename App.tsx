import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, View } from "react-native";
import CarbonText from "./src/components/CarbonText";
import { Gray10, Gray100, White0 } from "./src/CarbonColors";
import { NativeRouter, Route } from "react-router-native";
import { SafeAreaView } from "react-native-safe-area-context";
import UserDetails from "./src/screens/UserDetails";
import WifiDetails from "./src/screens/WifiDetails";
import AddSensor from "./src/screens/AddSensor";
import ThankYou from "./src/screens/ThankYou";
import HowItWorks from "./src/screens/HowItWorks";

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar hidden={true} />
      <View style={styles.header}>
        <CarbonText bold={true} style={styles.title}>
          OpenEEW
        </CarbonText>
        <CarbonText style={styles.title}>Sensors</CarbonText>
      </View>
      <View style={styles.screen}>
        <NativeRouter>
          <Route exact path="/" component={HowItWorks} />
          <Route exact path="/userDetails" component={UserDetails} />
          <Route exact path="/wifi" component={WifiDetails} />
          <Route exact path="/addSensor" component={AddSensor} />
          <Route exact path="/thankYou" component={ThankYou} />
        </NativeRouter>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    height: "100%",
    backgroundColor: Gray100,
  },
  screen: {
    backgroundColor: Gray10,
    width: "100%",
    padding: 20,
    height: "100%",
  },
  header: {
    backgroundColor: Gray100,
    width: "100%",
    padding: 20,
    display: "flex",
    flexDirection: "row",
  },
  title: {
    fontSize: 20,
    color: White0,
    marginRight: 5,
  },
});
