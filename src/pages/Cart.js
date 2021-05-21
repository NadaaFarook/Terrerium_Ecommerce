//146
import { useToast } from "@chakra-ui/toast";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { useCartData } from "../Context-Reducer/CartData";
import { useUserData } from "../Context-Reducer/UserDatacontext";
import CartFunctions from "../utils/CartFunctions";

import "../App.css";

const Cart = () => {
  const { AddToCartApiCall, RemoveFromCartApiCall, DeleteFromCartApiCall } =
    CartFunctions();

  const { user } = useUserData();
  const [data, setData] = useState([]);
  const { cartContext, setCartContext } = useCartData();
  // eslint-disable-next-line no-unused-vars
  const [loader, setLoader] = useState(true);
  const toast = useToast();

  useEffect(() => {
    const fetchData = async () => {
      const result = await axios(
        "https://Terrarium-Backend.nadaafarook.repl.co/cart/" + user.id
      );

      if (result.data.success === true) {
        setData([...result.data.cart.products]);
        setCartContext([...result.data.cart.products]);
        setLoader(false);
      } else {
        setLoader(false);
        toast({
          title: "Error in fetching user cart. Please try again",
          status: "error",
        });
      }
    };
    fetchData();
  }, [cartContext, setCartContext, toast, user.id, setLoader]);

  const func = (state, value) => {
    return {
      totalPrice: Number(state.totalPrice) + Number(value.productId.price),
      discountPrice:
        state.discountPrice +
        (value.productId.price * value.productId.discount) / 100,
    };
  };

  const state = data.reduce(func, { totalPrice: 0, discountPrice: 0 });

  return (
    <div className="Cart">
      <div>
        {" "}
        {data.length === 0 ? (
          <div>
            <h2 className="p-2 center">No products added in cart</h2>
          </div>
        ) : (
          data.map(
            ({
              productId: { name, price, description, image, _id, discount },
              quantity,
              _id: id,
            }) => {
              return (
                <div
                  key={id}
                  className="cart-card"
                  style={{ border: "1px solid grey" }}
                >
                  <img src={image} alt="" />
                  <div key={_id}>
                    {" "}
                    <h1>{name}</h1>
                    <h3>$ {price}</h3>
                    <p>{description}</p>
                    <span>Discount : {discount} %</span>
                    <br />
                    <span>Total price : {price * quantity}</span>
                    <br />
                    <button
                      onClick={() => RemoveFromCartApiCall(user.id, _id, id)}
                    >
                      -
                    </button>
                    {quantity}
                    <button onClick={() => AddToCartApiCall(user.id, _id, id)}>
                      +
                    </button>
                    <button
                      onClick={() => DeleteFromCartApiCall(user.id, _id, id)}
                    >
                      Remove from cart
                    </button>
                  </div>
                </div>
              );
            }
          )
        )}
      </div>
      <div className="price_card">
        <p>
          Total price : <span>${state.totalPrice}</span>
        </p>
        <p>
          Total discount : <span>${state.discountPrice}</span>
        </p>
        <h3>
          Final Price : <span>${state.totalPrice - state.discountPrice}</span>
        </h3>
      </div>
    </div>
  );
};

export default Cart;
