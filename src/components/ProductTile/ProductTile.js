import React from "react";
import "./productTile.css";

function ProductTile({ product }) {
  if (!product) {
    return null;
  }

  return (
    <div className="product-tile">
      <img src={product.image} alt={product.name} />
      <h2>{product.name}</h2>
      <p>{product.description}</p>
      <p>{product.price}</p>
    </div>
  );
}

export default ProductTile;
