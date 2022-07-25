import React from "react";
import logo from "../../images/CornerCart.PNG";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <div className="  bg-gray-700 flex items-center justify-center">
      <Link to="/">
        <img
          className=" w-[12rem] h-[4rem] p-3 rounded-2xl"
          src={logo}
          alt=""
        />
      </Link>
      <h1 className=" text-gray-300 text-lg">
        Made with <span className=" text-red-600">❤</span> &nbsp; &copy;
        Gurudatt Puranik
      </h1>
    </div>
  );
}

export default Footer;
