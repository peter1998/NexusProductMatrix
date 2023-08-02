import React from "react";
import ProductTile from "../ProductTile/ProductTile";
import "./productGrid.css";

function ProductGrid({ products }) {
  return (
    <div className="product-grid">
      {products.map((product) => (
        <ProductTile key={product.id} product={product} />
      ))}
    </div>
  );
}

export default ProductGrid;
