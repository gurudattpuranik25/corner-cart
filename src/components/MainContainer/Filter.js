import React from "react";

function Filter({ freeDelivery }) {
  return (
    <div className=" w-[22rem] bg-gray-700 h-[40rem]">
      <div className=" p-3 ">
        <h1 className=" text-2xl text-center text-gray-200 font-semibold ">
          Filters
        </h1>
        <button className=" text-blue-200 text-lg" onClick={freeDelivery}>
          Free Delivery
        </button>
      </div>
    </div>
  );
}

export default Filter;
