import CarbonText from "./CarbonText";
import React from "react";
import { StyleSheet, TextStyle } from "react-native";
import { Gray70 } from "../CarbonColors";

interface CarbonSmallTextProps {
  children: React.ReactNode;
  style?: TextStyle;
}

function CarbonSmallText(props: CarbonSmallTextProps) {
  return (
    <CarbonText style={{ ...props.style, ...styles.smallText }}>
      {props.children}
    </CarbonText>
  );
}

const styles = StyleSheet.create({
  smallText: {
    fontSize: 12, // TODO: add to FontSizes.ts
    color: Gray70,
    lineHeight: 20,
  },
});

export default CarbonSmallText;
