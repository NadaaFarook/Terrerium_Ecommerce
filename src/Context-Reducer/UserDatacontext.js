import React, { createContext, useContext, useState } from "react";

const UserDataContext = createContext();

const UserDataContextProvider = ({ children }) => {
  // const [UserData, setUserData] = useState({
  //   wishlist: [{id : 'bb463b8b-b76c-4f6a-9726-65ab5730b69b', quantity : 1}],
  //   cart: [{id : 'bb463b8b-b76c-4f6a-9726-65ab5730b69b', quantity : 1}],
  //   toast: {
  //     display: false,
  //     value: "Added item to cart",
  //   },
  // });
const [user  , setUser] = useState({
  
})
  return (
    <UserDataContext.Provider value={{ user , setUser }}>
      {children}
    </UserDataContext.Provider>
  );
};
export default UserDataContextProvider;
//custom hook for context call
export const useUserData = () => {
  return useContext(UserDataContext);
};
