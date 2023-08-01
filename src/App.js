import React from "react";
import Header from "./components/Header/Header";
import ProductCounter from "./components/ProductCounter/ProductCounter";
import ProductGrid from "./components/ProductGrid/ProductGrid";
import ProductTile from "./components/ProductTile/ProductTile";
import Filter from "./components/Filter/Filter";
import Sort from "./components/Sort/Sort";
import LoadMore from "./components/LoadMore/LoadMore";
import Footer from "./components/Footer/Footer";
import "./App.css";

function App() {
  return (
    <div className="App">
      <Header />
      <div className="content">
        <ProductCounter />
        <Filter />
        <Sort />
        <ProductGrid />
        <ProductTile />
        <LoadMore />
      </div>
      <Footer />
    </div>
  );
}

export default App;
