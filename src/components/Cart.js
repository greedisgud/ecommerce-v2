import React from "react";

const Cart = ({ cartItems, handleAddToCart, handleRemoveFromCart }) => {
  const totalPrice = cartItems.reduce(
    (price, item) => price + item.qty * item.price,
    0
  );
  return (
    <div className="cart">
      <h2 className="cartItemHeader">Cart Items</h2>
      <div className="cartItems">
        {cartItems.length === 0 && (
          <div className="cartMessage"> No Items in Cart</div>
        )}
        {cartItems.map((item) => (
          <div key={item.id} className="cartItemList">
            <img
              className="productImageCart"
              src={item.image}
              alt={item.name}
            />
            <div className="productCartName">{item.name}</div>
            <div className="cartBtnContainer">
              <button className="cartBtn" onClick={() => handleAddToCart(item)}>
                +
              </button>
              <button
                className="cartBtn"
                onClick={() => handleRemoveFromCart(item)}
              >
                -
              </button>
            </div>
            <div className="cartTotal">
              {item.qty}*${item.price}
            </div>
          </div>
        ))}
        <div className="totalPrice"> Total price: ${totalPrice}</div>
        <button>Checkout</button>
      </div>
    </div>
  );
};

export default Cart;
