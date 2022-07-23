import React from "react";
import { BiRupee } from "react-icons/bi";
import { AiOutlinePlus } from "react-icons/ai";
import { AiOutlineMinus } from "react-icons/ai";
import EmptyCart from "../../images/EmptyCart.JPG";
import { Link } from "react-router-dom";

function Cart({ itemArray, removeFromCart, addToCart, subtractFromCart }) {
  const subTotal = itemArray.reduce(
    (accumulator, current) => accumulator + current.price * current.quantity,
    0
  );

  return (
    <div className=" bg-white m-6 p-4">
      <h1 className=" text-4xl font-semibold mb-4">Shopping Cart</h1>
      <hr className=" mb-5" />
      {itemArray.length === 0 ? (
        <div className=" flex items-center justify-center gap-4 text-xl">
          <img className=" w-[30rem] h-[22rem]" src={EmptyCart} alt="" />
          <p className=" flex flex-col items-center">
            No items in the cart !!{" "}
            <Link className=" text-blue-600 hover:underline" to="/">
              Add here
            </Link>{" "}
          </p>
        </div>
      ) : (
        <div>
          <div>
            {itemArray.map((item) => (
              <div
                key={item.id}
                className=" flex items-center gap-4 mb-4 border-b-2"
              >
                <img
                  src={item.image}
                  className=" w-[10rem] h-[8rem] bg-gray-200 p-2 mb-4 rounded-sm"
                  alt=""
                />
                <div>
                  <h1 className=" text-lg ">{item.description}</h1>
                  <span>{item.rating}</span>
                  <h1 className=" flex items-center text-lg ">
                    {" "}
                    <BiRupee /> {item.price}
                  </h1>
                  {/* <hr className=" my-2" /> */}
                  <span className=" flex items-center gap-2">
                    {" "}
                    Quantity :{" "}
                    <AiOutlinePlus
                      className=" bg-red-300 text-2xl p-1 cursor-pointer font-bold rounded-sm"
                      onClick={() => addToCart(item)}
                    />{" "}
                    {item.quantity}{" "}
                    <AiOutlineMinus
                      className=" bg-red-300 text-2xl p-1 cursor-pointer font-bold rounded-sm"
                      onClick={() => subtractFromCart(item)}
                    />{" "}
                    <span>|</span>
                    <button
                      className=" text-md hover:underline font-semibold text-blue-600"
                      onClick={() => removeFromCart(item)}
                    >
                      Remove
                    </button>
                  </span>
                </div>
              </div>
            ))}
          </div>

          <div className=" flex gap-10 items-center">
            <h1 className=" flex items-center text-xl font-semibold">
              Subtotal ( {itemArray.length}{" "}
              {itemArray.length === 1 ? "item" : "items"} ) : <BiRupee />{" "}
              {subTotal}
            </h1>
            <Link
              className=" text-lg shadow-lg bg-yellow-400 px-4 rounded-lg"
              to="/checkout"
            >
              Proceed To Buy
            </Link>
          </div>
        </div>
      )}
    </div>
  );
}

export default Cart;
