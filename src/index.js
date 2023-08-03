import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import { CartProvider } from "./context/cartContext";
import App from "./App";
import "./index.css";

const basename =
  process.env.NODE_ENV === "development" ? "/" : "/NexusProductMatrix";

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter basename={basename}>
      <CartProvider>
        <App />
      </CartProvider>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById("root")
);
