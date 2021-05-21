import React from "react";
import { useFilter } from "../../Context-Reducer/FilterContext";
const Filters = () => {
  const { state, dispatch } = useFilter();
  const { filterPrice } = state;
  const { min, max } = filterPrice;
  const rating = [4, 3, 2, 1];

  return (
    <div className="Filters box-basic">
      <h1>
        <button onClick={() => dispatch({ type: "CLEAR_ALL" })}>
          Clear All
        </button>
      </h1>
      <fieldset>
        <legend>Sort</legend>
        <input
          type="radio"
          name="sort"
          checked={state.sortBy === "HIGH_TO_LOW"}
          onChange={() => dispatch({ type: "SORT", payload: "HIGH_TO_LOW" })}
        />
        <label>Sort - High to Low</label>
        <br />
        <input
          type="radio"
          name="sort"
          checked={state.sortBy === "LOW_TO_HIGH"}
          onChange={() => dispatch({ type: "SORT", payload: "LOW_TO_HIGH" })}
        />
        <label>Sort - Low to High</label>
      </fieldset>
      <fieldset>
        <legend>Ratings</legend>
        {rating.map((stars) => {
          return (
            <>
              <input
                key={stars}
                type="radio"
                name="rating"
                checked={state.filterRating === stars}
                onChange={() =>
                  dispatch({ type: "FILTER_RATING", payload: stars })
                }
              />
              <label>{stars} stars & above</label>
              <br />
            </>
          );
        })}
      </fieldset>
      <fieldset>
        <legend>Price Range</legend>
        <input
          type="range"
          min="20"
          defaultValue="999"
          max="999"
          value={max}
          onChange={(e) => {
            dispatch({
              type: "FILTER_PRICE",
              payload: { min, max: parseInt(e.target.value) },
            });
          }}
        />
        <br />
        <input
          value={min}
          onChange={(e) =>
            dispatch({
              type: "FILTER_PRICE",
              payload: { max, min: parseInt(e.target.value) },
            })
          }
        />
        <br />
        <input
          value={max}
          onChange={(e) => {
            dispatch({
              type: "FILTER_PRICE",
              payload: { min, max: parseInt(e.target.value) },
            });
          }}
        />
      </fieldset>
      <fieldset>
        <input
          type="checkbox"
          onChange={() => dispatch({ type: "IS_RECOMMENDED" })}
          checked={state.recommended}
        />
        <label>Reccommended by Terrerium</label>
      </fieldset>
      <fieldset>
        <legend>Availability</legend>
        <input
          type="checkbox"
          onChange={() => dispatch({ type: "INCLUDE_OUT_OF_STOCK" })}
        />
        <label>Include out of stock</label>
      </fieldset>
    </div>
  );
};

export default Filters;
