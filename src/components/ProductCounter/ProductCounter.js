import React from "react";
import "./productCounter.css";

function ProductCounter({ count, total }) {
  return (
    <div className="product-counter">
      Showing {count} out of {total} products
    </div>
  );
}

export default ProductCounter;
