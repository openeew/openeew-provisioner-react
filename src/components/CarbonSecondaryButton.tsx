import React from "react";
import { StyleSheet, TouchableOpacity } from "react-native";

import { Blue60, Gray30, Gray50, White0 } from "../CarbonColors";
import CarbonText from "./CarbonText";
import { FontSizeMedium } from "../FontSizes";

interface CarbonSecondaryButtonProps {
  text: string;
  onPress: () => void;
  style?: any;
  disabled?: boolean;
}

function CarbonSecondaryButton(props: CarbonSecondaryButtonProps) {
  return (
    <TouchableOpacity
      onPress={props.disabled ? undefined : props.onPress}
      style={props.style}
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
  buttonDisabled: {
    backgroundColor: Gray30,
  },
  disabledText: {
    color: Gray50,
  },
  buttonText: {
    color: Blue60,
    fontSize: FontSizeMedium,
  },
});

export default CarbonSecondaryButton;
