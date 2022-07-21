import React from "react";
import data from "./data";
import { FcCancel } from "react-icons/fc";
import { FcApproval } from "react-icons/fc";

function TopDeals() {
  const {
    topDealsCardOne,
    topDealsCardTwo,
    topDealsCardThree,
    topDealsCardFour,
  } = data;

  return (
    <div>
      <h1 className=" text-center font-bold text-3xl p-3 ">
        Top Deals...Not to be missed!!
      </h1>
      <div className=" grid grid-cols-4 text-center ml-3 ">
        <div className=" bg-white w-[22rem] h-[28rem] rounded-sm relative">
          <div className=" m-4">
            <h1 className=" font-semibold text-2xl mb-2">
              Up to 70% off | Clearance store
            </h1>
            {topDealsCardOne.map((item) => (
              <div key={item.id}>
                <img src={item.image} alt="laptop" />
                <div className=" flex justify-between mt-2">
                  <p>{item.name}</p>
                  <p>$ {item.price}</p>
                </div>
                <div className=" flex justify-between mt-2">
                  <p className=" text-xs">{item.rating}</p>
                  <i className="fa-solid fa-basket-shopping text-lg cursor-pointer"></i>
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
        </div>
        <div className=" bg-white w-[22rem] h-[28rem] rounded-sm relative">
          <div className=" m-4">
            <h1 className=" font-semibold text-2xl mb-4">
              Top picks for your home
            </h1>
            <div className=" grid grid-cols-2 gap-x-3 gap-y-5">
              {topDealsCardTwo.map((item) => (
                <div key={item.id}>
                  <img src={item.image} alt="laptop" />
                  <div className=" flex justify-between mt-2">
                    <p className="  ">{item.name}</p>
                    <p className="  ">$ {item.price}</p>
                  </div>
                  <div className=" flex justify-between mt-1 mb-1">
                    <p className=" text-xs">{item.rating}</p>
                    <i className="fa-solid fa-basket-shopping cursor-pointer"></i>
                  </div>
                  {item.freeDelivery ? (
                    <p className=" text-xs flex justify-start">
                      {" "}
                      <FcApproval /> Free Delivery
                    </p>
                  ) : (
                    <p className=" text-xs flex justify-start">
                      {" "}
                      <FcCancel /> Charges applicable
                    </p>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
        <div className=" bg-white w-[22rem] h-[28rem] rounded-sm relative">
          <div className=" m-4">
            <h1 className=" font-semibold text-2xl mb-4">
              Revamp your home in style
            </h1>
            <div className=" grid grid-cols-2 gap-x-3 gap-y-5">
              {topDealsCardThree.map((item) => (
                <div key={item.id}>
                  <img src={item.image} alt="laptop" />
                  <div className=" flex justify-between mt-2">
                    <p className="  ">{item.name}</p>
                    <p className="  ">$ {item.price}</p>
                  </div>
                  <div className=" flex justify-between mt-1 mb-1">
                    <p className=" text-xs">{item.rating}</p>
                    <i className="fa-solid fa-basket-shopping cursor-pointer"></i>
                  </div>
                  {item.freeDelivery ? (
                    <p className=" text-xs flex justify-start">
                      {" "}
                      <FcApproval /> Free Delivery
                    </p>
                  ) : (
                    <p className=" text-xs flex justify-start">
                      {" "}
                      <FcCancel /> Charges applicable
                    </p>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
        <div className=" bg-white w-[22rem] h-[28rem] rounded-sm relative">
          <div className=" m-4">
            <h1 className=" font-semibold text-2xl mb-4">
              Up to 70% off | Men's style
            </h1>
            <div className=" grid grid-cols-2 gap-x-3 gap-y-5">
              {topDealsCardFour.map((item) => (
                <div key={item.id}>
                  <img src={item.image} alt="laptop" />
                  <div className=" flex justify-between mt-2">
                    <p className="  ">{item.name}</p>
                    <p className="  ">$ {item.price}</p>
                  </div>
                  <div className=" flex justify-between mt-1 mb-1">
                    <p className=" text-xs">{item.rating}</p>
                    <i className="fa-solid fa-basket-shopping cursor-pointer"></i>
                  </div>
                  {item.freeDelivery ? (
                    <p className=" text-xs flex justify-start">
                      {" "}
                      <FcApproval /> Free Delivery
                    </p>
                  ) : (
                    <p className=" text-xs flex justify-start">
                      {" "}
                      <FcCancel /> Charges applicable
                    </p>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default TopDeals;
