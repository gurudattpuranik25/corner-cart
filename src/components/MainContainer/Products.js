import React from "react";
import data from "./data";
import { FcCancel } from "react-icons/fc";
import { FcApproval } from "react-icons/fc";
import { BiRupee } from "react-icons/bi";

function Products({ addToCart }) {
  const { productList } = data;

  return (
    <div className=" grid grid-cols-4 gap-7">
      {productList.map((item) => (
        <div
          key={item.id}
          className=" w-[16rem] h-[19rem] p-4 bg-white rounded-sm"
        >
          <img src={item.image} className=" w-full h-[70%]" alt="" />
          <div className=" flex justify-between mt-2">
            <p>{item.name}</p>
            <p className=" flex items-center">
              {" "}
              <BiRupee /> {item.price}
            </p>
          </div>
          <div className=" flex justify-between mt-2">
            <p className=" text-xs">{item.rating}</p>
            <i
              className="fa-solid fa-basket-shopping text-lg cursor-pointer"
              onClick={() => addToCart(item)}
            ></i>
          </div>
          {item.freeDelivery ? (
            <p className=" text-xs flex">
              {" "}
              <FcApproval /> Free Delivery
            </p>
          ) : (
            <p className=" text-xs flex">
              {" "}
              <FcCancel /> Charges applicable
            </p>
          )}
        </div>
      ))}
    </div>
  );
}

export default Products;
