import React, { useState } from "react";
import CarbonText from "../components/CarbonText";
import { Alert, StyleSheet, View } from "react-native";
import { FontSizeMedium } from "../FontSizes";
import { useHistory } from "react-router-dom";
import CarbonInput from "../components/CarbonInput";
import CarbonButton from "../components/CarbonButton";
import CarbonSmallText from "../components/CarbonSmallText";

function UserDetails() {
  const history = useHistory();

  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");

  function onNext() {
    if (
      firstName.match(/^ *$/) !== null ||
      lastName.match(/^ *$/) !== null ||
      email.match(/^ *$/) !== null
    )
      return Alert.alert("Error", "Please fill in all required fields.", [
        { text: "Ok" },
      ]);

    history.push("/wifi");
  }

  return (
    <View style={styles.container}>
      <CarbonText style={styles.instructions}>
        Connect your sensor to a USB-C cable. Then, let us know who the sensor
        belongs to. Please make sure your GPS is turned on.
      </CarbonText>
      <CarbonSmallText style={styles.label}>Sensor owner</CarbonSmallText>
      <View style={styles.names}>
        <CarbonInput
          style={{ ...styles.input, ...styles.inputOne, flex: 1 }}
          onChangeText={setFirstName}
          placeholder="First name"
          autoCorrect={false}
        />
        <CarbonInput
          style={{ flex: 1, ...styles.input }}
          onChangeText={(value) => setLastName(value)}
          placeholder="Last name"
          autoCorrect={false}
        />
      </View>
      <CarbonInput
        onChangeText={(value) => setEmail(value)}
        placeholder="Email"
        style={styles.input}
        autoCapitalize="none"
        autoCorrect={false}
      />
      <CarbonButton text="Next" onPress={onNext} style={styles.buttonNext} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: "100%",
  },
  label: {
    marginBottom: 10,
  },
  input: {
    width: "100%",
    marginBottom: 30,
  },
  buttonNext: {
    paddingRight: 200,
  },
  inputOne: {
    marginRight: 16,
  },
  instructions: {
    fontSize: FontSizeMedium,
    marginBottom: 20,
  },
  names: {
    display: "flex",
    flexDirection: "row",
    width: "100%",
  },
});

export default UserDetails;
