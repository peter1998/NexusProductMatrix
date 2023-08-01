import React from "react";
import "./header.css";

function Header() {
  return (
    <header className="header">
      <div className="logo">Logo</div>
      <nav className="nav">
        <a href="#products">Products</a>
        <a href="#about">About</a>
      </nav>
    </header>
  );
}

export default Header;
