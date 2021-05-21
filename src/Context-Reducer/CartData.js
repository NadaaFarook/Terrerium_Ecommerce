import React, { createContext, useContext, useState } from "react";

const CartDataContext = createContext();

const CartDataContextProvider = ({ children }) => {
  const [cartContext, setCartContext] = useState([]);
  return (
    <CartDataContext.Provider value={{ cartContext, setCartContext }}>
      {children}
    </CartDataContext.Provider>
  );
};
export default CartDataContextProvider;
//custom hook for context call
export const useCartData = () => {
  return useContext(CartDataContext);
};
