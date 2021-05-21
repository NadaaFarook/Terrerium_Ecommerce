import { useToast } from "@chakra-ui/toast";
import axios from "axios";
import { useCartData } from "../Context-Reducer/CartData";

export default function CartFunctions() {
  const { cartContext, setCartContext } = useCartData();
  const toast = useToast();
  const AddToCartApiCall = async (userId, productId, id) => {
    toast({
      title: "Adding to cart",
      position: "top-right",
    });
    await axios.post(
      `https://Terrarium-Backend.nadaafarook.repl.co/cart/${userId}/${productId}`
    );
    setCartContext(
      cartContext.map((item) =>
        item._id === id ? { ...item, quantity: item.quantity + 1 } : item
      )
    );
    toast({
      title: "Added to cart",
      status: "success",
    });
  };

  const DeleteFromCartApiCall = async (userId, productId, id) => {
    toast({
      title: "Removing item",
      position: "top-right",
    });
    await axios.delete(
      `https://Terrarium-Backend.nadaafarook.repl.co/cart/${userId}/${id}`
    );
    setCartContext(cartContext.filter((e) => e._id !== id));
    toast({
      title: "Removed item from cart",
      status: "success",
    });
  };

  const RemoveFromCartApiCall = async (userId, productId, id) => {
    toast({
      title: "Removing from cart",
      position: "top-right",
    });
    await axios.post(
      `https://Terrarium-Backend.nadaafarook.repl.co/cart/${userId}/${productId}/decrement`
    );
    setCartContext(
      cartContext
        .map((item) => {
          if (item._id === id)
            if (item.quantity === 1) {
              return null;
            } else {
              return { ...item, quantity: item.quantity - 1 };
            }
          else {
            return item;
          }
        })
        .filter((item) => item !== null)
    );
    toast({
      title: "Removed from cart",
      status: "success",
    });
  };

  return {
    AddToCartApiCall,
    RemoveFromCartApiCall,
    DeleteFromCartApiCall,
  };
}
