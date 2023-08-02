import React, { useContext } from "react";
import { CartContext } from "../../context/cartContext";
import StarRatings from "react-star-ratings";
import "./productTile.css";

function ProductTile({ product }) {
  const [cart, setCart] = useContext(CartContext);

  const addToCart = () => {
    setCart((currentCart) => [...currentCart, product]);
  };

  if (!product) {
    return null;
  }

  return (
    <div className="product-tile">
      <img src={product.image} alt={product.name} />
      <h2>{product.name}</h2>
      <p>{product.description}</p>
      <p>
        <strong>Price:</strong> ${product.price}
      </p>
      <StarRatings
        rating={product.rating}
        starRatedColor="orange"
        numberOfStars={5}
        name="rating"
      />
      <button onClick={addToCart}>Add to Cart</button>
    </div>
  );
}

export default ProductTile;
