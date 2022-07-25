import React from "react";
// import Filter from "./Filter";
import PrimeSlider from "./PrimeSlider";
import ProductList from "./ProductList";
import Products from "./Products";
import SlideProducts from "./SlideProducts";

function MainContainer({ addToCart }) {
  return (
    <div>
      <PrimeSlider />
      <ProductList addToCart={addToCart} />
      <div className=" ml-3 mt-6  flex gap-8">
        <Products addToCart={addToCart} />
      </div>
      <div className=" mb-6">
        <SlideProducts />
      </div>
    </div>
  );
}

export default MainContainer;
