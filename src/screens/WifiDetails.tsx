import React, { useState } from "react";
import { StyleSheet, View } from "react-native";
import CarbonText from "../components/CarbonText";
import { FontSizeLarge } from "../FontSizes";
import CarbonSmallText from "../components/CarbonSmallText";
import CarbonInput from "../components/CarbonInput";
import CarbonButton from "../components/CarbonButton";
import { useHistory } from "react-router-dom";

function WifiDetails() {
  const history = useHistory();

  const [password, setPassword] = useState("");

  function connectSensorOnClick() {
    history.push("/addSensor");
  }

  return (
    <View>
      <View style={styles.container}>
        <CarbonText style={styles.title}>
          Connect your sensor to Wi-Fi
        </CarbonText>
        <CarbonSmallText>
          We'll use the Wi-Fi network that your phone is connected to.
        </CarbonSmallText>
      </View>
      <View style={styles.container}>
        <CarbonSmallText>Network</CarbonSmallText>
        <CarbonText>my-wifi-network</CarbonText>
      </View>
      <View style={styles.container}>
        <CarbonInput
          placeholder="Wi-Fi password"
          secureTextEntry={true}
          onChangeText={setPassword}
        />
        <CarbonSmallText style={styles.wifiPasswordDescription}>
          After the initial setup, you can connect your device via ethernet or
          LTE if you prefer.
        </CarbonSmallText>
      </View>
      <View style={styles.container}>
        <CarbonButton
          text="Connect sensor to Wi-Fi"
          onPress={connectSensorOnClick}
          style={styles.buttonConnect}
          disabled={password.match(/^ *$/) !== null}
        />
        <CarbonSmallText style={styles.connectDescription}>
          We don't store your Wi-Fi credentials. Upon entering your password
          here, we share it only with your sensor and only this one time to
          connect the sensor to the internet.
        </CarbonSmallText>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  title: {
    fontSize: FontSizeLarge,
    marginBottom: 7,
  },
  buttonConnect: {
    paddingRight: 70,
  },
  container: {
    marginBottom: 40,
  },
  connectDescription: {
    marginTop: 10,
  },
  wifiPasswordDescription: {
    marginTop: 10,
    marginBottom: 10,
  },
});

export default WifiDetails;
