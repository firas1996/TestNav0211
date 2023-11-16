import { Button, StyleSheet, Text, View } from "react-native";
import React from "react";
import styles from "../assets/Style";

const Contact = ({ navigation, route }) => {
  //   const { abc } = route.params;
  const aaa = "";
  if (route.params) {
    aaa = route.params.abc;
  }
  const goToHome = () => {
    navigation.navigate("Home");
  };
  const goToAbout = () => {
    navigation.navigate("About");
  };
  return (
    <View style={styles.container}>
      <Text style={styles.txt}>Contact Screen</Text>
      <Text>{aaa}</Text>
      <View style={styles.btn}>
        <Button title="Home" onPress={goToHome} />
        <Button title="About" onPress={goToAbout} />
      </View>
    </View>
  );
};

export default Contact;
