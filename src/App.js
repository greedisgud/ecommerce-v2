import "./App.css";
import React, { useState } from "react";
import Header from "./components/Header";
import { BrowserRouter as Router } from "react-router-dom";
import Paths from "./components/Paths";
import Footer from "./components/Footer";
import irons from "./components/images/irons.jpeg";
import driver from "./components/images/driver.jpg";
import putter from "./components/images/putter.jpeg";
import wedges from "./components/images/wedges.jpeg";
import pants from "./components/images/pants.jpeg";
import shirt from "./components/images/shirt.png";
import balls from "./components/images/balls.jpeg";
import bag from "./components/images/bag.webp";
const data = {
  productItems: [
    {
      id: "1",
      name: "Iron Set",
      price: 1299,
      image: irons,
    },
    {
      id: "2",
      name: "Driver",
      price: 349,
      image: driver,
    },
    {
      id: "3",
      name: "Putter",
      price: 129,
      image: putter,
    },
    {
      id: "4",
      name: "Wedges",
      price: 499,
      image: wedges,
    },
    {
      id: "5",
      name: "Golf Pants",
      price: 79,
      image: pants,
    },
    {
      id: "6",
      name: "Golf Shirts",
      price: 59,
      image: shirt,
    },
    {
      id: "7",
      name: "Golf Balls",
      price: 49,
      image: balls,
    },
    {
      id: "8",
      name: "Golf Bags",
      price: 199,
      image: bag,
    },
  ],
};

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
