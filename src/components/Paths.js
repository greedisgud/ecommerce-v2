import React from "react";
import Products from "./Products";
import Signup from "./Signup";
import Cart from "./Cart";
import { Route, Routes } from "react-router-dom";

const Paths = ({
  productItems,
  cartItems,
  handleAddToCart,
  handleRemoveFromCart,
}) => {
  return (
    <div className="routes">
      <Routes>
        <Route
          path="/ecommerce-v2/"
          element={
            <Products
              productItems={productItems}
              handleAddToCart={handleAddToCart}
            />
          }
        ></Route>
        <Route path="/signup" element={<Signup />}></Route>
        <Route
          path="/cart"
          element={
            <Cart
              cartItems={cartItems}
              handleAddToCart={handleAddToCart}
              handleRemoveFromCart={handleRemoveFromCart}
            />
          }
        ></Route>
      </Routes>
    </div>
  );
};

export default Paths;
