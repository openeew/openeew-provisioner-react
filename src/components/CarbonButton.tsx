import React from "react";
import { StyleSheet, TouchableOpacity } from "react-native";

import { Blue60, Gray30, Gray50, White0 } from "../CarbonColors";
import CarbonText from "./CarbonText";
import { FontSizeMedium } from "../FontSizes";

interface CarbonButtonProps {
  text: string;
  onPress: () => void;
  style?: any;
  disabled?: boolean;
}

function CarbonButton(props: CarbonButtonProps) {
  return (
    <TouchableOpacity
      onPress={props.disabled ? undefined : props.onPress}
      style={{
        ...props.style,
        ...styles.button,
        ...(props.disabled ? { ...styles.buttonDisabled } : undefined),
      }}
    >
      <CarbonText
        style={{
          ...styles.buttonText,
          ...(props.disabled ? { ...styles.disabledText } : undefined),
        }}
      >
        {props.text}
      </CarbonText>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  button: {
    backgroundColor: Blue60,
    padding: 15,
    alignSelf: "flex-start",
  },
  buttonDisabled: {
    backgroundColor: Gray30,
  },
  disabledText: {
    color: Gray50,
  },
  buttonText: {
    color: White0,
    fontSize: FontSizeMedium,
  },
});

export default CarbonButton;
