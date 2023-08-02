import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom"; // import BrowserRouter
import "bootstrap/dist/css/bootstrap.min.css"; // Import Bootstrap CSS
import App from "./App";
import "./index.css";

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      {" "}
      {/* Wrap App component with BrowserRouter */}
      <App />
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById("root")
);
