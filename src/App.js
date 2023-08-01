import React from "react";
import Header from "./components/Header/Header";
import ProductCounter from "./components/ProductCounter/ProductCounter";
import ProductGrid from "./components/ProductGrid/ProductGrid";
import ProductTile from "./components/ProductTile/ProductTile";
import Filter from "./components/Filter/Filter";
import Sort from "./components/Sort/Sort";
import LoadMore from "./components/LoadMore/LoadMore";
import Footer from "./components/Footer/Footer";

function App() {
  return (
    <div className="App">
      <Header />
      <ProductCounter />
      <Filter />
      <Sort />
      <ProductGrid />
      <ProductTile />
      <LoadMore />
      <Footer />
    </div>
  );
}

export default App;
