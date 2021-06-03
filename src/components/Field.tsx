import { View, ViewStyle } from "react-native";
import React from "react";
import CarbonSmallText from "./CarbonSmallText";
import CarbonText from "./CarbonText";

interface FieldProps {
  title: string;
  value: string;
  style?: ViewStyle;
}

function Field(props: FieldProps) {
  return (
    <View style={props.style}>
      <CarbonSmallText>{props.title}</CarbonSmallText>
      <CarbonText>{props.value}</CarbonText>
    </View>
  );
}

export default Field;
