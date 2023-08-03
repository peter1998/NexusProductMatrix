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
import Cart from "./components/Cart/Cart";

function App() {
  const [filterOptions, setFilterOptions] = useState({
    category: "all",
    price: Infinity,
  });
  const [sortOption, setSortOption] = useState("name-asc");
  const [limit, setLimit] = useState(4);

  const handleLoadMore = () => {
    setLimit(limit + 4);
  };

  const totalProducts = products.length;

  const displayedProducts = products
    .filter(
      (product) =>
        (filterOptions.category === "all" ||
          product.category === filterOptions.category) &&
        product.price <= filterOptions.price
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
      <div className="content">
        <Routes>
          <Route path="/smart-speakers" element={<SmartSpeakers />} />
          <Route path="/smart-lighting" element={<SmartLighting />} />
          <Route path="/smart-appliances" element={<SmartAppliances />} />
          <Route path="/home-security" element={<HomeSecurity />} />
          <Route path="/home-automation" element={<HomeAutomation />} />
          <Route path="/cart" element={<Cart />} />
          <Route
            path="/"
            element={
              <>
                <ProductCounter
                  count={displayedProducts.length}
                  total={totalProducts}
                />
                <div className="filter-sort-container">
                  <Filter
                    onFilterChange={(filterType, value) => {
                      setFilterOptions((prevFilterOptions) => ({
                        ...prevFilterOptions,
                        [filterType]: value,
                      }));
                    }}
                  />
                  <Sort onSortChange={setSortOption} />
                </div>

                <ProductGrid products={displayedProducts} />
                <LoadMore onLoadMore={handleLoadMore} />
              </>
            }
          />
        </Routes>
      </div>
      <Footer />
    </div>
  );
}

export default App;
