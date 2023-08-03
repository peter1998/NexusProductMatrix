import React, { useContext } from "react";
import { Container, Card, Button } from "react-bootstrap";
import { CartContext } from "../../context/cartContext";
import StarRatings from "react-star-ratings";
import "./cart.css";

function Cart() {
  const [cart, setCart] = useContext(CartContext);

  const removeFromCart = (productToRemove) => {
    if (
      window.confirm(
        "Are you sure you want to remove this item from your cart?"
      )
    ) {
      setCart(cart.filter((product) => product.id !== productToRemove.id));
    }
  };

  const totalPrice = cart
    .reduce((total, product) => total + product.price, 0)
    .toFixed(2);

  return (
    <Container>
      <div className="cart">
        <h2>My Cart</h2>
        {cart.map((product) => (
          <Card className="cart-card" key={product.id}>
            <Card.Img variant="top" src={product.image} />
            <Card.Body>
              <Card.Title>{product.name}</Card.Title>
              <Card.Text>{product.description}</Card.Text>
              <Card.Text>Price: {product.price}</Card.Text>
              <StarRatings
                rating={product.rating}
                starRatedColor="orange"
                numberOfStars={5}
                name="rating"
              />
              <Button variant="danger" onClick={() => removeFromCart(product)}>
                Remove
              </Button>
            </Card.Body>
          </Card>
        ))}
        <h3>Total Price: {totalPrice}</h3>
      </div>
    </Container>
  );
}

export default Cart;
