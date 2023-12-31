import { View, Text } from "react-native";
import React from "react";
import { DrawerItem } from "@react-navigation/drawer";
import { useNavigation } from "@react-navigation/native";

const DrawerC = () => {
  const navigation = useNavigation();
  return (
    <View style={{ paddingTop: 50 }}>
      <DrawerItem
        label="Users"
        onPress={() => {
          navigation.navigate("Users");
        }}
      />
      <DrawerItem
        style={{ backgroundColor: "#ccc" }}
        label="FavUsers"
        onPress={() => {
          navigation.navigate("FavUsers");
        }}
      />
    </View>
  );
};

export default DrawerC;
