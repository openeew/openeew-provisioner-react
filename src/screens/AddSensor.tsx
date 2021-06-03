import React from "react";
import { View } from "react-native";
import { StyleSheet } from "react-native";
import CarbonText from "../components/CarbonText";
import { FontSizeLarge, FontSizeMedium } from "../FontSizes";
import Separator from "../components/Separator";
import Field from "../components/Field";
import CarbonButton from "../components/CarbonButton";
import CarbonSmallText from "../components/CarbonSmallText";
import { useHistory } from "react-router-dom";

function AddSensor() {
  const history = useHistory();

  function addSensor() {
    history.push("/thankYou");
  }

  return (
    <View>
      <CarbonText style={styles.confirmMessage}>
        Alright! Your sensor is connected to the internet. Now, review the
        following and add your sensor to the OpenEEW network.
      </CarbonText>
      <Separator style={styles.separator} />
      <CarbonText style={styles.summaryHeader} bold={true}>
        Summary
      </CarbonText>
      <View style={styles.horizontal}>
        <View style={styles.vertical}>
          <Field title="Sensor ID" value="102912220372" style={styles.field} />
          <Field
            title="Device owner"
            value="Luis Vasquez"
            style={styles.field}
          />
        </View>
        <View style={styles.vertical}>
          <Field
            title="Coordinates"
            value="16.01°N, -96.01°E"
            style={styles.field}
          />
          <Field
            title="Device owner email"
            value="luis.vasquez@gmail.com"
            style={styles.field}
          />
        </View>
      </View>
      <Field title="Country" value="Mexico" />
      <Separator style={styles.separator} />
      <CarbonButton
        text="Add my sensor to the network"
        onPress={addSensor}
        style={styles.button}
      />
      <CarbonSmallText>
        Note: We'll list your device on the dashboard, but to maintain your
        privacy, we'll only show it's general location (ie. within ~5 km of the
        nearest town). Your name and email will not be visible publicly.
      </CarbonSmallText>
    </View>
  );
}

const styles = StyleSheet.create({
  confirmMessage: {
    fontSize: FontSizeMedium,
  },
  separator: {
    marginTop: 20,
    marginBottom: 20,
  },
  summaryHeader: {
    fontSize: FontSizeLarge,
    marginBottom: 15,
  },
  horizontal: {
    display: "flex",
    flexDirection: "row",
  },
  vertical: {
    display: "flex",
    flexDirection: "column",
  },
  field: {
    marginRight: 40,
    marginBottom: 20,
  },
  button: {
    marginBottom: 20,
    paddingRight: 80,
  },
});

export default AddSensor;
