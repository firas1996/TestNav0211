import { Button, StyleSheet, Text, View } from "react-native";
import React from "react";
import styles from "../assets/Style";

const About = ({ navigation }) => {
  const goToHome = () => {
    navigation.navigate("Home");
  };
  const goToContact = () => {
    navigation.navigate("Contact", { abc: 321 });
  };
  return (
    <View style={styles.container}>
      <Text style={styles.txt}>About Screen</Text>
      <View style={styles.btn}>
        <Button title="Home" onPress={goToHome} />
        <Button title="Contact" onPress={goToContact} />
      </View>
    </View>
  );
};

export default About;
