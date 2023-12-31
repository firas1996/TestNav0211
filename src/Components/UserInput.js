import { View, TextInput, Button, StyleSheet } from "react-native";
import React, { useContext, useState } from "react";
import { FavUsersContext } from "../store/context/favUsersStore";

const UserInput = () => {
  const ctx = useContext(FavUsersContext);
  const [userData, setUserData] = useState("");
  const userInputHandler = (data) => {
    setUserData(data);
  };
  const addNewUser = () => {
    if (userData != "") {
      ctx.addUser(userData);
      setUserData("");
    }
  };
  return (
    <View style={styles.inputContainer}>
      <TextInput
        style={styles.textInput}
        placeholder="User Name"
        onChangeText={userInputHandler}
        value={userData}
      />
      <Button title="Add" onPress={addNewUser} />
    </View>
  );
};

export default UserInput;

const styles = StyleSheet.create({
  inputContainer: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 24,
    // borderBottomWidth: 1,
    // borderBottomColor: "#cccccc",
  },
  textInput: {
    borderWidth: 1,
    borderColor: "#cccccc",
    width: "70%",
    marginRight: 8,
    padding: 8,
  },
});
