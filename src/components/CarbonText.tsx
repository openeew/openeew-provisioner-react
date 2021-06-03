import React from "react";

import { Text, TextStyle } from "react-native";
import {
  useFonts,
  IBMPlexSans_700Bold,
  IBMPlexSans_700Bold_Italic,
  IBMPlexSans_400Regular_Italic,
  IBMPlexSans_400Regular,
} from "@expo-google-fonts/ibm-plex-sans";

interface CarbonTextProps {
  children: React.ReactNode;
  bold?: boolean;
  italic?: boolean;
  style?: TextStyle;
}

function getFont(bold?: boolean, italic?: boolean): [number, string] {
  if (bold && italic)
    return [IBMPlexSans_700Bold_Italic, "IBMPlexSans_700Bold_Italic"];

  if (bold) return [IBMPlexSans_700Bold, "IBMPlexSans_700Bold"];

  if (italic)
    return [IBMPlexSans_400Regular_Italic, "IBMPlexSans_400Regular_Italic"];

  return [IBMPlexSans_400Regular, "IBMPlexSans_400Regular"];
}

function CarbonText(props: CarbonTextProps) {
  const [font, fontName] = getFont(props.bold, props.italic);

  const [fontsLoaded] = useFonts({
    IBMPlexSans_700Bold,
    IBMPlexSans_700Bold_Italic,
    IBMPlexSans_400Regular_Italic,
    IBMPlexSans_400Regular,
  });

  if (!fontsLoaded) return <></>;

  return (
    <Text style={{ ...props.style, fontFamily: fontName }}>
      {props.children}
    </Text>
  );
}

export default CarbonText;
