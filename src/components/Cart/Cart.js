import React, { useContext } from "react";
import { Card, Button } from "react-bootstrap";
import { CartContext } from "../../context/cartContext";
import "./cart.css"; // Import new CSS file

function Cart() {
  const [cart, setCart] = useContext(CartContext);

  const removeFromCart = (productToRemove) => {
    setCart(cart.filter((product) => product.id !== productToRemove.id));
  };

  return (
    <div className="cart">
      <h2>My Cart</h2>
      {cart.map((product) => (
        <Card className="cart-card" key={product.id}>
          <Card.Img variant="top" src={product.image} />
          <Card.Body>
            <Card.Title>{product.name}</Card.Title>
            <Card.Text>{product.description}</Card.Text>
            <Card.Text>Price: {product.price}</Card.Text>
            <Button variant="danger" onClick={() => removeFromCart(product)}>
              Remove
            </Button>
          </Card.Body>
        </Card>
      ))}
    </div>
  );
}

export default Cart;
