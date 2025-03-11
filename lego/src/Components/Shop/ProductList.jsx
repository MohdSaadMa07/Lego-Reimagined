import React from "react";
import ProductCard from "./ProductCard";
import "./Shop.css";

const products = [
  { id: 1, name: "Product A", price: "$20" },
  { id: 2, name: "Product B", price: "$30" },
  { id: 3, name: "Product C", price: "$40" },
];

export default function ProductList() {
  return (
    <div className="product-list">
      {products.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  );
}