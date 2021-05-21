import React from "react";
// import { useProductData } from "../Context-Reducer/productDataContext";
// import { useUserData } from "../Context-Reducer/UserDatacontext";

const Wishlist = () => {
  // const { data } = useProductData();
  // const { UserData, setUserData } = useUserData();
  // //    // const wishlistId
  // const wishlistIds = UserData.wishlist.map(item=>  item.id)

  // const wishlistData = wishlistIds.map((id) =>
  //   data.find((product) => product.id === id)
  // );
  // console.log(wishlistIds, wishlistData);

  return (
    <div className="Wishlist">
      {/* {wishlistData.length === 0 ? (
        <div>
          <h2 className="p-2 center">No products added in wishlist</h2>
        </div>
      ) : (
        wishlistData.map(({ name, price, description, id }) => {
          return (
            <div>
              <h2>{name}</h2>
              <p>{price}</p>
              <p>{description}</p>
              <button>Add to cart</button>

              <button
                onClick={() =>
                  setUserData({
                    ...UserData,
                    wishlist: UserData.wishlist.filter((idd) => idd !== id),
                  })
                }
              >
                Remove from wishlist
              </button>
            </div>
          );
        })
      )} */}
      <h1>Page under construction 🔨🔧</h1>
    </div>
  );
};

export default Wishlist;
