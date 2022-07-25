import React from "react";
import data from "./data";
import { FcCancel } from "react-icons/fc";
import { FcApproval } from "react-icons/fc";
import { BiRupee } from "react-icons/bi";
import { Link } from "react-router-dom";

function Products({ addToCart, searchItem }) {
  const { productList } = data;

  return (
    <div className=" grid grid-cols-5 gap-7">
      {productList.map((item) => (
        <div
          key={item.id}
          className=" w-[17.3rem] h-[21rem] p-4 bg-white rounded-sm"
        >
          <Link to={`/productDetails/${item.id}`}>
            <img
              src={item.image}
              className=" w-full h-[70%]  cursor-pointer"
              alt=""
            />
          </Link>
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
