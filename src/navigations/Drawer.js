import { View, Text } from "react-native";
import React from "react";
import { createDrawerNavigator } from "@react-navigation/drawer";
import Home from "../Screens/Home";
import About from "../Screens/About";
import Contact from "../Screens/Contact";
import NativeStack from "./NativeStack";
import DrawerC from "./DrawerC";

const drawer = createDrawerNavigator();
const Drawer = () => {
  return (
    <drawer.Navigator drawerContent={DrawerC}>
      <drawer.Screen name="Stack" component={NativeStack} />
    </drawer.Navigator>
  );
};

export default Drawer;
