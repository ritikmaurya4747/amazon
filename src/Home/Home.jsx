import React from "react";
import man_logo from "../imgs/delivery.png";
import Popular from "./Popular";
import Deals from "./Deals";
function Home() {
  return (
    <>
      <div className=" bg-gray-100 py-10">
        <div className="flex justify-around bg-orange-400 w-[70%] mx-auto rounded-xl text-white">
          <div className="w-1/2">
            <p className="text-5xl font-bold py-7">Free Delivery!</p>
            <p className="max-w-[380px] text-xl ">
              Don't miss it out! Only today, get free <b>Next Day</b> delivery
              on all your <br /> orders
            </p>
            <a href="#deals-section">
              <button className="bg-white text-orange-400 rounded-[30px] font-bold text-xl my-6 p-3 ">
                Browse products
              </button>
            </a>
          </div>
          <div className="">
            <img className="w-80" src={man_logo} alt="" />
          </div>
        </div>
        <Popular />
      </div>
      <div id="deals-section">
        <Deals />
      </div>
    </>
  );
}

export default Home;
