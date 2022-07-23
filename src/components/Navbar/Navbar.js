import React from "react";
import logo from "../../images/CornerCart.PNG";
import flag from "../../images/india.png";
import { BsSearch } from "react-icons/bs";
import { Link } from "react-router-dom";
import { signInWithGoogle } from "../../Firebase";

function Navbar({ itemArray, searchFilter }) {
  return (
    <div className=" flex justify-between items-center p-2 w-screen bg-gray-800">
      <Link to="/">
        <img
          className=" w-44 h-10 ml-4 rounded-lg cursor-pointer"
          src={logo}
          alt="logo"
        />
      </Link>
      <div className=" flex w-[50%] items-center focus:border-4 focus:border-yellow-500">
        <input
          type="text"
          className=" w-[93%] h-10 placeholder: px-2 rounded-l-md focus:outline-none"
          placeholder="Search for products here..."
          onChange={searchFilter}
        />{" "}
        <BsSearch className=" flex items-center justify-center rounded-r-md bg-yellow-400 h-10 w-[7%] cursor-pointer p-3 hover:bg-yellow-500 " />
        <img className=" w-8 h-8 ml-10 " src={flag} alt="flag" />
      </div>
      <div className=" flex items-center gap-16 mr-8 text-white font-semibold">
        <p className=" cursor-pointer " onClick={signInWithGoogle}>
          Hello, Sign in &nbsp;
          <i className="fa-solid fa-user text-xl"></i>{" "}
        </p>
        <Link to="/cart">
          <div className=" flex items-center  cursor-pointer">
            <i className="fa-solid fa-cart-shopping text-3xl relative"></i>
            <p className=" absolute top-1 w-5 h-5 flex items-center justify-center rounded-full bg-orange-600 font-semibold">
              {itemArray.length}
            </p>
            <p className=" ml-2">Cart</p>
          </div>
        </Link>
      </div>
    </div>
  );
}

export default Navbar;
