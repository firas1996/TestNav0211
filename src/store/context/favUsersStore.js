import { createContext, useState } from "react";

export const FavUsersContext = createContext({
  users: [],
  favUsersIds: [],
  addUser: (data) => {},
  removeUser: (id) => {},
  addFav: (id) => {},
  removeFav: (id) => {},
});

const FavUsersProvider = ({ children }) => {
  const [users, setUsers] = useState([]);
  const [favUsersIds, setFavUsersIds] = useState([]);
  const addUser = (data) => {
    setUsers((prevState) => [
      ...prevState,
      { name: data, key: Math.random().toString() },
    ]);
  };
  const removeUser = (id) => {
    setUsers((prevState) => {
      return prevState.filter((user) => user.key !== id);
    });
  };
  const addFav = (id) => {
    setFavUsersIds((prevState) => [...prevState, id]);
  };
  const removeFav = (id) => {
    setFavUsersIds((prevState) => {
      return prevState.filter((item) => item !== id);
    });
  };

  const value = {
    users,
    favUsersIds,
    addUser,
    removeUser,
    addFav,
    removeFav,
  };

  return (
    <FavUsersContext.Provider value={value}>
      {children}
    </FavUsersContext.Provider>
  );
};
export default FavUsersProvider;
