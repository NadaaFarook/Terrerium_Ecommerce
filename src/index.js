import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { BrowserRouter as Router } from "react-router-dom";
import { ChakraProvider } from "@chakra-ui/react";
import UserDataContextProvider from "./Context-Reducer/UserDatacontext";
import FilterContextProvider from "./Context-Reducer/FilterContext";
import ProductDataContextProvider from "./Context-Reducer/productDataContext";
import CartDataContextProvider from "./Context-Reducer/CartData";
import './App.css'
ReactDOM.render(
  <React.StrictMode>
    <ProductDataContextProvider>
      <UserDataContextProvider>
        <FilterContextProvider>
          <Router>
            <ChakraProvider>
              <CartDataContextProvider>
                <App />
              </CartDataContextProvider>
            </ChakraProvider>
          </Router>
        </FilterContextProvider>
      </UserDataContextProvider>
    </ProductDataContextProvider>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
