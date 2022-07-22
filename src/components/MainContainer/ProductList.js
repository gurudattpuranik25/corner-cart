import React from "react";
import TopDeals from "./TopDeals";

function ProductList({ addToCart }) {
  return (
    <div className=" w-screen bg-gray-200">
      <TopDeals addToCart={addToCart} />
    </div>
  );
}

export default ProductList;
