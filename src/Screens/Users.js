import { FlatList, StyleSheet, Text, View } from "react-native";
import React, { useContext, useState } from "react";
import UserItem from "../Components/UserItem";
import UserInput from "../Components/UserInput";
import { FavUsersContext } from "../store/context/favUsersStore";

const Users = () => {
  const ctx = useContext(FavUsersContext);
  return (
    <View style={styles.container}>
      <UserInput />
      <View style={styles.users}>
        <FlatList
          data={ctx.users}
          renderItem={(user) => (
            <UserItem id={user.item.key} name={user.item.name} />
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
