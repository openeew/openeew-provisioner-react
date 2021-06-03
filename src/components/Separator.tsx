import React from "react";
import { StyleSheet, View, ViewStyle } from "react-native";
import { Gray20 } from "../CarbonColors";

interface SeparatorProps {
  style?: ViewStyle;
}

function Separator(props: SeparatorProps) {
  return <View style={{ ...props.style, ...styles.separator }} />;
}

const styles = StyleSheet.create({
  separator: {
    height: 1,
    backgroundColor: Gray20,
  },
});

export default Separator;
