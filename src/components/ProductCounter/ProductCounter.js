import React from "react";
import "./productCounter.css";

function ProductCounter({ count, total }) {
  return (
    <div className="product-counter">
      <span className="counter-text">Showing </span>
      <span className="counter-number">{count}</span>
      <span className="counter-text"> out of </span>
      <span className="counter-number">{total}</span>
      <span className="counter-text"> products</span>
    </div>
  );
}

export default ProductCounter;
