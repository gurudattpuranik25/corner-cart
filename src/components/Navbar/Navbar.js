import React from "react";
import logo from "../../images/CornerCart.PNG";
import flag from "../../images/india.png";
import { Link, useHistory } from "react-router-dom";
import { useAuth } from "../Context/AuthContext";
import Avatar from "../../images/Avatar.png";
import "./Navbar.css";
// import { BsSearch } from "react-icons/bs";
// import { signInWithGoogle } from "../../Firebase";

function Navbar({ itemArray }) {
  const history = useHistory();

  const { logout, currentUser } = useAuth();

  const logoutHandler = () => {
    logout()
      .then(() => {
        history.push("/");
      })
      .catch((e) => e);
  };

  return (
    <div className=" flex justify-between items-center p-2 w-screen bg-gray-800">
      <Link to="/">
        <img
          className=" w-44 h-10 ml-4 rounded-lg cursor-pointer"
          src={logo}
          alt="logo"
        />
      </Link>
      {/* <div className=" flex w-[50%] items-center focus:border-4 focus:border-yellow-500"> */}
      <h1 className="heading">Corner Cart : Buy All You Want</h1>
      {/* <input
          type="text"
          className=" w-[93%] h-10 placeholder: px-2 rounded-l-md focus:outline-none"
          placeholder="Search for products here..."
          onChange={searchFilter}
        />{" "}
        <BsSearch className=" flex items-center justify-center rounded-r-md bg-yellow-400 h-10 w-[7%] cursor-pointer p-3 hover:bg-yellow-500 " /> */}
      {/* </div> */}
      <div className=" flex items-center gap-8 mr-8 text-white font-semibold">
        <img className=" w-8 h-8 ml-10 " src={flag} alt="flag" />
        {!currentUser && (
          <Link
            to="/login"
            className=" cursor-pointer border-2 border-gray-500 rounded-md px-3 py-1  "
          >
            Sign In
            {/* <i className="fa-solid fa-user text-xl"></i>{" "} */}
          </Link>
        )}

        {!currentUser && (
          <Link
            to="/signUp"
            className=" cursor-pointer border-2 border-gray-500 rounded-md px-3 py-1 "
          >
            Sign Up / Register
          </Link>
        )}

        {currentUser && (
          <div className=" flex gap-4 items-center">
            <h1>Hi, {currentUser.email}</h1>
            <button
              className=" cursor-pointer border-2 border-gray-500 rounded-md px-3 py-1 "
              onClick={logoutHandler}
            >
              Logout
            </button>
          </div>
        )}

        <img src={Avatar} className=" w-8 h-8 rounded-full" alt="" />

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
