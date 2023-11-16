import { Button, StyleSheet, Text, View } from "react-native";
import React from "react";
import styles from "../assets/Style";

const Home = ({ navigation }) => {
  const goToAbout = () => {
    navigation.navigate("About");
  };
  const goToContact = () => {
    navigation.navigate("Contact", { abc: 123 });
  };
  return (
    <View style={styles.container}>
      <Text style={styles.txt}>Home Screen</Text>
      <View style={styles.btn}>
        <Button title="About" onPress={goToAbout} />
        <Button title="Contact" onPress={goToContact} />
      </View>
    </View>
  );
};

export default Home;
