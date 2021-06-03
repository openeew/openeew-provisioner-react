import React from "react";
import { TextInput, TextInputProps } from "react-native";
import { StyleSheet } from "react-native";
import { White0 } from "../CarbonColors";
import { FontSizeMedium } from "../FontSizes";

function CarbonInput(props: TextInputProps) {
  return (
    <TextInput
      {...props}
      style={{ ...(props.style as any), ...styles.input }}
    />
  );
}

const styles = StyleSheet.create({
  input: {
    shadowColor: "black",
    shadowOpacity: 0.3,
    shadowRadius: 0.5,
    shadowOffset: { width: 0, height: 3 },
    backgroundColor: White0,
    padding: 16,
    paddingLeft: 18,
    fontSize: FontSizeMedium,
  },
});

export default CarbonInput;
