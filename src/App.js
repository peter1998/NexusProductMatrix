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
    .sort(/* sort logic */)
    .slice(0, limit);

  return (
    <div className="App">
      <Header />
      <Routes>
        {/* Other Routes */}
        <Route
          path="/"
          element={
            <div className="content">
              <ProductCounter
                count={displayedProducts.length}
                total={totalProducts}
              />
              <Filter
                onFilterChange={(filterType, value) => {
                  setFilterOptions((prevFilterOptions) => ({
                    ...prevFilterOptions,
                    [filterType]: value,
                  }));
                }}
              />
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
