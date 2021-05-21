import React from "react";
import { useParams } from "react-router-dom";
import { useProductData } from "../Context-Reducer/productDataContext";

const ProductPage = () => {
  const { data } = useProductData();
  const { productId } = useParams();
  const { name, price, description } = data.find(
    (item) => item._id === productId
  );

  return (
    <div className="ProductPage box-basic">
      <h1>{name}</h1>
      <span>{price}</span>
      <p>{description}</p>
      <button>Add to cart</button>
      <button>+</button>
      <p></p>
      <button>-</button>
    </div>
  );
};

export default ProductPage;
