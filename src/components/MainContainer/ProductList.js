import React from "react";
import TopDeals from "./TopDeals";

function ProductList({ addToCart, productDetails }) {
  return (
    <div className=" w-screen bg-gray-200">
      <TopDeals addToCart={addToCart} productDetails={productDetails} />
    </div>
  );
}

export default ProductList;
