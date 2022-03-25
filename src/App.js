import "./App.css";
import React, { useState } from "react";
import data from "./components/data";
import Header from "./components/Header";
import { BrowserRouter as Router } from "react-router-dom";
import Paths from "./components/Paths";
import Footer from "./components/Footer";

function App() {
  const { productItems } = data;

  const [cartItems, setCartItems] = useState([]);

  const handleAddToCart = (product) => {
    const duplicateProduct = cartItems.find((item) => item.id === product.id);
    if (duplicateProduct) {
      setCartItems(
        cartItems.map((item) =>
          item.id === product.id
            ? { ...duplicateProduct, qty: duplicateProduct.qty + 1 }
            : item
        )
      );
    } else {
      setCartItems([...cartItems, { ...product, qty: 1 }]);
    }
  };

  const handleRemoveFromCart = (product) => {
    const duplicateProduct = cartItems.find((item) => item.id === product.id);
    if (duplicateProduct.qty === 1) {
      setCartItems(cartItems.filter((item) => item.id !== product.id));
    } else {
      setCartItems(
        cartItems.map((item) =>
          item.id === product.id
            ? { ...duplicateProduct, qty: duplicateProduct.qty - 1 }
            : item
        )
      );
    }
  };

  return (
    <div className="App">
      <Router>
        <Header cartItems={cartItems} />
        <Paths
          productItems={productItems}
          cartItems={cartItems}
          handleAddToCart={handleAddToCart}
          handleRemoveFromCart={handleRemoveFromCart}
        />
        <Footer />
      </Router>
    </div>
  );
}

export default App;
