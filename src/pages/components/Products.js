import React from "react";
import Loader from "../../UI_components/loader";
import { useFilter } from "../../Context-Reducer/FilterContext";
import { useProductData } from "../../Context-Reducer/productDataContext";
import { useUserData } from "../../Context-Reducer/UserDatacontext";
import axios from "axios";
import { useToast } from "@chakra-ui/toast";
import { useCartData } from "../../Context-Reducer/CartData";
import { getsortedData, getFilteredData } from "../../utils/Products_Functions";
const Products = () => {
  const { user } = useUserData();
  console.log(user , typeof(user.name))
  const toast = useToast();
  const { cartContext, setCartContext } = useCartData();
  const { state } = useFilter();
  const { data, loader } = useProductData();

  const AddToCartApiCall = async (userId, productId) => {
    toast({
      title: "Adding to cart",
      position: "top-right",
    });
    await axios.post(
      `https://Terrarium-Backend.nadaafarook.repl.co/cart/${userId}/${productId}`
    );
    setCartContext([...cartContext, { quantity: 1, _id: productId }]);
    toast({
      title: "Added to cart",
      status: "success",
      duration: 5000,
      isClosable: true,
    });
  };

  const sortedData = getsortedData([...data], state.sortBy);
  const filteredData = getFilteredData([...sortedData], state);
  return (
    <div className="ProductsPage box-basic">
      {loader && <Loader />}
      {!loader && <p>{filteredData.length} products avalable</p>}
      {!loader && filteredData.length === 0 && (
        <h1>No products available . Maybe try resetting the filters. </h1>
      )}
      <div style={{ flexWrap: "wrap" }} className="products flex">
        {filteredData.map(
          ({ name, price, image, discount, includeOutOfStock, _id }) => {
            return (
              <div key={_id} className="product">
                <img
                  src={image}
                  alt={name}
                  className={includeOutOfStock ? "" : "out_of_stock"}
                />
                <h4>
                  {/* <Link to={`/product/${_id}`}>{name}</Link> */}
                  {name}
                </h4>
                <div className="flex">
                  {" "}
                  <p className="p-1">
                    {(price - (price * discount) / 100).toFixed(2)}
                  </p>
                  <p className="p-1" style={{ textDecoration: "line-through" }}>
                    {price}
                  </p>
                  <p>{includeOutOfStock}</p>
                </div>
                <div className="buttons">
                  <button
                    onClick={() => {
                      user.name === undefined
                        ? toast({
                            title: "Please login/signup to add to cart",
                            status: "info",
                            duration: 3000,
                            isClosable: true,
                          })
                        : AddToCartApiCall(user.id, _id);
                    }}
                  >
                    Add To Cart
                  </button>
                </div>
              </div>
            );
          }
        )}
      </div>
    </div>
  );
};

export default Products;
