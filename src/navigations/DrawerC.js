import { View, Text } from "react-native";
import React from "react";
import { DrawerItem } from "@react-navigation/drawer";
import { useNavigation } from "@react-navigation/native";

const DrawerC = () => {
  const navigation = useNavigation();
  return (
    <View style={{ paddingTop: 50 }}>
      <DrawerItem
        label="Home"
        onPress={() => {
          navigation.navigate("Home");
        }}
      />
      <DrawerItem
        style={{ backgroundColor: "#ccc" }}
        label="Contact"
        onPress={() => {
          navigation.navigate("Contact");
        }}
      />
      <DrawerItem
        label="About"
        onPress={() => {
          navigation.navigate("About");
        }}
      />
    </View>
  );
};

export default DrawerC;
