import React from "react";
import { useParams } from "react-router-dom";
import ProductData from "../../ProductData";
import { BiRupee } from "react-icons/bi";
import { Link } from "react-router-dom";

function ProductDetails({ addToCart }) {
  const { productId } = useParams();

  const selectedItem = ProductData.find((item) => item.id === productId);

  return (
    <div className=" w-[70%] m-auto bg-gray-300 flex mt-10 gap-10 p-10 rounded-sms">
      <img
        className=" w-[35rem] h-[25rem] border-2 border-black"
        src={selectedItem.image}
        alt=""
      />
      <div>
        <h1 className=" text-2xl font-semibold mb-2">
          {selectedItem.description}
        </h1>
        <span>{selectedItem.rating}</span>
        <hr className=" my-2" />
        <h1 className=" flex items-center text-xl font-semibold">
          {" "}
          <BiRupee /> {selectedItem.price}
        </h1>
        <span>Inclusive of all taxes</span>
        <hr className=" my-2" />
        <div className=" flex mt-4 gap-6">
          <div className=" flex flex-col items-center gap-1">
            <i className="fa-solid fa-arrow-rotate-left"></i>
            <span className=" text-center text-blue-700 font-semibold">
              10 days <br /> returnable
            </span>
          </div>
          <div className=" flex flex-col items-center gap-1">
            <i className="fa-solid fa-truck"></i>
            <span className=" text-center text-blue-700 font-semibold">
              CornerCart <br /> Delivered
            </span>
          </div>
          <div className=" flex flex-col items-center gap-1">
            <i className="fa-solid fa-building-circle-check"></i>
            <span className=" text-center text-blue-700 font-semibold">
              No-Contact <br /> Delivery
            </span>
          </div>
        </div>
        <div className=" flex gap-6 mt-4">
          <button
            className=" text-lg font-semibold border border-black bg-black text-yellow-400 px-2 py-1 rounded-lg"
            onClick={() => addToCart(selectedItem)}
          >
            Add to cart
          </button>
          <Link to="/">
            <button className=" text-lg font-semibold border border-black bg-yellow-300 px-2 py-1 rounded-lg">
              Home
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default ProductDetails;
