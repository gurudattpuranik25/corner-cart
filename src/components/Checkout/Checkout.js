import React from "react";
import { Link } from "react-router-dom";

function Checkout() {
  return (
    <div className="  flex justify-center items-center flex-col mt-[15%]">
      <h1 className=" text-green-500 text-4xl font-bold ">
        Order placed successfully ✅ <br />{" "}
      </h1>
      <Link to="/" className=" text-xl mt-4 text-blue-600 hover:underline">
        Home
      </Link>
    </div>
  );
}

export default Checkout;
