import React from "react";
import { Link } from "react-router-dom";
import { useCartData } from "../Context-Reducer/CartData";

export const Navbar = () => {
  const { cartContext} = useCartData()
 
  return (
    <div className="Navbar p-2">
      <Link to="/products">Products</Link> 
      <Link to="/cart">Cart {cartContext.length}</Link>
      <Link to="/wishlist">Wishlist</Link>
      <Link to="/user">User</Link>
    </div>
  );
};
