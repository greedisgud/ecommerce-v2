import React from "react";
import { Link } from "react-router-dom";

const Header = ({ cartItems }) => {
  return (
    <div className="header">
      <h1>
        <Link to="/ecommerce-v2/">Golf World</Link>
      </h1>
      <div className="header-links">
        <ul>
          <li>
            <Link to="/ecommerce-v2/">Home</Link>
          </li>
        </ul>
        <ul>
          <li>
            <Link to="/signup">Signup</Link>
          </li>
        </ul>
        <ul>
          <li className="cartIcon">
            <Link to="/cart">🛒</Link>
            <div className="cartItemsInCart">{cartItems.length}</div>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
