import { StatusBar } from "expo-status-bar";
import { NavigationContainer } from "@react-navigation/native";
import Drawer from "./src/navigations/Drawer";
import FavUsersProvider from "./src/store/context/favUsersStore";

export default function App() {
  return (
    <>
      <FavUsersProvider>
        <NavigationContainer>
          <Drawer />
        </NavigationContainer>
      </FavUsersProvider>
      <StatusBar style="auto" />
    </>
  );
}
