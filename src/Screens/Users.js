import { FlatList, StyleSheet, Text, View } from "react-native";
import React, { useState } from "react";
import UserItem from "../Components/UserItem";
import UserInput from "../Components/UserInput";

const Users = () => {
  const [users, setUsers] = useState([]);
  const addUserHandler = (userName) => {
    setUsers((prevState) => [
      ...prevState,
      { name: userName, key: Math.random().toString() },
    ]);
  };
  const removeUser = (key) => {
    setUsers((prevState) => {
      return prevState.filter((user) => user.key !== key);
    });
  };
  return (
    <View style={styles.container}>
      <UserInput addUser={addUserHandler} />
      <View style={styles.users}>
        <FlatList
          data={users}
          renderItem={(user) => (
            <UserItem
              removeUser={removeUser}
              id={user.item.key}
              name={user.item.name}
            />
          )}
        />
      </View>
    </View>
  );
};

export default Users;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 16,
  },
  users: {
    flex: 5,
  },
});
