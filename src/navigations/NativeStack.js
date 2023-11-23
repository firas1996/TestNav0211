import { View, Text } from "react-native";
import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Home from "../Screens/Home";
import About from "../Screens/About";
import Contact from "../Screens/Contact";
import Users from "../Screens/Users";
import FavUsers from "../Screens/FavUsers";
const stack = createNativeStackNavigator();
const NativeStack = () => {
  return (
    <stack.Navigator
      screenOptions={{ headerShown: false }}
      initialRouteName="Users"
    >
      <stack.Screen name="Home" component={Home} />
      <stack.Screen name="About" component={About} />
      <stack.Screen name="Contact" component={Contact} />
      <stack.Screen name="Users" component={Users} />
      <stack.Screen name="FavUsers" component={FavUsers} />
    </stack.Navigator>
  );
};

export default NativeStack;
