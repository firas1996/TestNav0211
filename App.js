import { StatusBar } from "expo-status-bar";
import { Text, View } from "react-native";
import styles from "./assets/Style";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Home from "./Screens/Home";
import About from "./Screens/About";
import Contact from "./Screens/Contact";
import { createDrawerNavigator } from "@react-navigation/drawer";

const stack = createNativeStackNavigator();
const drawer = createDrawerNavigator();

export default function App() {
  return (
    <>
      <NavigationContainer>
        <drawer.Navigator>
          <drawer.Screen name="Home" component={Home} />
          <drawer.Screen name="About" component={About} />
          <drawer.Screen name="Contact" component={Contact} />
        </drawer.Navigator>
      </NavigationContainer>
      <StatusBar style="auto" />
    </>
  );
}
