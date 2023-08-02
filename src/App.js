import React, { useState } from "react";
import { Route, Routes } from "react-router-dom";
import Header from "./components/Header/Header";
import ProductCounter from "./components/ProductCounter/ProductCounter";
import ProductGrid from "./components/ProductGrid/ProductGrid";
import Filter from "./components/Filter/Filter";
import Sort from "./components/Sort/Sort";
import LoadMore from "./components/LoadMore/LoadMore";
import Footer from "./components/Footer/Footer";
import SmartSpeakers from "./components/SmartSpeakers/SmartSpeakers";
import SmartLighting from "./components/SmartLighting/SmartLighting";
import SmartAppliances from "./components/SmartAppliances/SmartAppliances";
import HomeSecurity from "./components/HomeSecurity/HomeSecurity";
import HomeAutomation from "./components/HomeAutomation/HomeAutomation";

import products from "./data/products.json";

import "./App.css";

function App() {
  const [filterOption, setFilterOption] = useState("all");
  const [sortOption, setSortOption] = useState("name-asc");
  const [limit, setLimit] = useState(4);

  const handleLoadMore = () => {
    setLimit(limit + 4);
  };

  const totalProducts = products.length;

  const displayedProducts = products
    .filter(
      (product) => filterOption === "all" || product.category === filterOption
    )
    .sort((a, b) => {
      switch (sortOption) {
        case "name-asc":
          return a.name.localeCompare(b.name);
        case "name-desc":
          return b.name.localeCompare(a.name);
        case "price-asc":
          return a.price - b.price;
        case "price-desc":
          return b.price - a.price;
        default:
          return 0;
      }
    })
    .slice(0, limit);

  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/smart-speakers" element={<SmartSpeakers />} />
        <Route path="/smart-lighting" element={<SmartLighting />} />
        <Route path="/smart-appliances" element={<SmartAppliances />} />
        <Route path="/home-security" element={<HomeSecurity />} />
        <Route path="/home-automation" element={<HomeAutomation />} />
        <Route
          path="/"
          element={
            <div className="content">
              <ProductCounter
                count={displayedProducts.length}
                total={totalProducts}
              />
              <Filter onFilterChange={setFilterOption} />
              <Sort onSortChange={setSortOption} />
              <ProductGrid products={displayedProducts} />
              <LoadMore onLoadMore={handleLoadMore} />
            </div>
          }
        />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
