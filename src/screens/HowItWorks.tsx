import { Alert, Linking, StyleSheet, View, FlatList } from "react-native";
import React from "react";
import CarbonText from "../components/CarbonText";
import { FontSizeMedium } from "../FontSizes";
import CarbonButton from "../components/CarbonButton";
import CarbonButtonOutline from "../components/CarbonButtonOutline";
import { Gray100, White0 } from "../CarbonColors";
import SVGIcon from "../components/SVGIcon"
import { useHistory } from "react-router-dom";

function HowItWorks() {

    const history = useHistory();

      function userDetailsOnClick() {
        history.push("/userDetails");
      }

      function openURL(url: string) {
        Linking.canOpenURL(url).then((supported) => {
          if (supported) return Linking.openURL(url);
          Alert.alert("Error", "Could not open URL", [{ text: "Ok" }]);
        });
      }

    const howItWorksSteps = [
        {
            step: '1',
            icon: 'iconUSBC',
            title: 'Connect sensor to USB-C'
        },
        {
            step: '2',
            icon: 'iconEdit',
            title: 'Enter your info in the app'
        },
        {
            step: '3',
            icon: 'iconWifi',
            title: 'Enable internet'
        },
        {
            step: '4',
            icon: 'iconIot',
            title: 'Add sensor to network'
        },
        {
            step: '5',
            icon: 'iconLaptop',
            title: 'View your data on the dashboard'
        },
    ];

    const Step = ({ title, icon }) => (
        <View>
            <CarbonText style={styles.steps}>
            <SVGIcon type={icon} />
                {title}
            </CarbonText>
        </View>
      );

    const renderItem = ({ item }) => (
        <Step title={item.title} icon={item.icon} />
      );
    

  return (
    <View style={styles.container}>
      <CarbonText style={styles.HowItWorks}>
        How it works:
      </CarbonText>
      <FlatList
        data={howItWorksSteps}
        renderItem={renderItem}
        keyExtractor={item => item.step}
      />

        <View style={{ flexDirection:"row" }}>
            <CarbonButtonOutline
                text="OpenEEW dashboard"
                onPress={() => openURL("https://dashboard.openeew.com/")}
                style={styles.button}
            />
            <CarbonButton text="Get Started" onPress={userDetailsOnClick} style={styles.button} />
        </View>
    </View>
  );
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: Gray100,
        width: "100%",
    },
    HowItWorks: {
        fontSize: FontSizeMedium,
        color: White0,
        marginBottom: 24,
    },
    steps: {
        color: White0,
        fontSize: 16,
        fontWeight: "bold",
        marginBottom: 48,
        paddingLeft: 24
    },
    button: {
        marginTop: 100,
        paddingRight: 60,
    },
});

export default HowItWorks;
