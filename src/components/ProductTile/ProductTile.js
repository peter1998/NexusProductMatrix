import React, { useContext, useState } from "react";
import { CartContext } from "../../context/cartContext";
import StarRatings from "react-star-ratings";
import { v4 as uuidv4 } from "uuid";
import "./productTile.css";

function ProductTile({ product }) {
  const [cart, setCart] = useContext(CartContext);
  const [addedToCart, setAddedToCart] = useState(false);

  const addToCart = () => {
    const productWithUUID = { ...product, uuid: uuidv4() };
    setCart((currentCart) => [...currentCart, productWithUUID]);
    setAddedToCart(true);

    setTimeout(() => {
      setAddedToCart(false);
    }, 3000);
  };

  if (!product) {
    return null;
  }

  return (
    <div className="product-tile">
      <img src={process.env.PUBLIC_URL + product.image} alt={product.name} />

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
      <button
        onClick={addToCart}
        className={addedToCart ? "added-to-cart" : ""}
      >
        {addedToCart ? "Added to Cart" : "Add to Cart"}
      </button>
    </div>
  );
}

export default ProductTile;
