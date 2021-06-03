import { Alert, Linking, StyleSheet, View } from "react-native";
import React from "react";
import CarbonText from "../components/CarbonText";
import { FontSizeMedium } from "../FontSizes";
import Field from "../components/Field";
import CarbonButton from "../components/CarbonButton";
import CarbonSecondaryButton from "../components/CarbonSecondaryButton";

function ThankYou() {
  function openURL(url: string) {
    Linking.canOpenURL(url).then((supported) => {
      if (supported) return Linking.openURL(url);
      Alert.alert("Error", "Could not open URL", [{ text: "Ok" }]);
    });
  }

  return (
    <View>
      <CarbonText style={styles.thankYou}>
        Thank you for adding your sensor to the OpenEEW network - helping us
        detect earthquakes and issue alerts that allow people to get out of
        harm's way.
      </CarbonText>
      <Field
        style={styles.field}
        title="Next steps"
        value="Login to the OpenEEW dashboard and begin to see activity that your sensor detects."
      />
      <CarbonButton
        text="Visit the OpenEEW dashboard"
        onPress={() => openURL("https://dashboard.openeew.com/")}
        style={styles.button}
      />
      <CarbonSecondaryButton
        text="Add another sensor to the network"
        onPress={() => {}}
        style={styles.addAnotherSensor}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  thankYou: {
    fontSize: FontSizeMedium,
  },
  field: {
    marginTop: 40,
  },
  button: {
    marginTop: 100,
    paddingRight: 60,
  },
  addAnotherSensor: {
    marginTop: 10,
  },
});

export default ThankYou;
