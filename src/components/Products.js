import React from "react";

const Products = ({ productItems, handleAddToCart }) => {
  return (
    <div className="products">
      {productItems.map((productItem) => (
        <div className="product">
          <img
            className="productImage"
            src={productItem.image}
            alt={productItem.name}
          />
          <h4>{productItem.name}</h4>
          <div className="buttonContainer">
            <button
              onClick={() => handleAddToCart(productItem)}
              className="addCart"
            >
              Add to Cart
            </button>
            <h4>${productItem.price}</h4>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Products;
