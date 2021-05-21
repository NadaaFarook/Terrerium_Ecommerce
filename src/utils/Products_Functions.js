
  const getsortedData = (data, sortBy) => {
    if (sortBy === "HIGH_TO_LOW") {
      return data.sort((a, b) => b["price"] - a["price"]);
    }

    if (sortBy === "LOW_TO_HIGH") {
      return data.sort((a, b) => a["price"] - b["price"]);
    }
    return data;
  };

  const getFilteredData = (data, state) => {
    return data
      .filter((product) => product.rating > state.filterRating)
      .filter((product) => product.price < state.filterPrice.max)
      .filter((product) => product.price > state.filterPrice.min)
      .filter((product) =>
        state.recommended ? product.recommended === true : product
      )
      .filter((product) =>
        state.includeOutOfStock ? product.includeOutOfStock === true : product
      );
  };


export {
    getsortedData , getFilteredData
}
