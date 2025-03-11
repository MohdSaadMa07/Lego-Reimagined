import React from "react";
import ProductList from "./ProductList";
import "./Shop.css";

export default function Shop() {
  return (
    <div className="shop-container">
      <h1>Shop</h1>
      <ProductList />
    </div>
  );
}