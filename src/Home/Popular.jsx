import React from "react";
import homeImg from "./homeimg";

function Popular() {
  const images = [
    {
      src: homeImg.electronics,
      whiteSrc: homeImg.elctronic_White,
      className: "electronics",
    },
    {
      src: homeImg.jwellery,
      whiteSrc: homeImg.jewellry_White,
      className: "jwellery",
    },
    {
      src: homeImg.men,
      whiteSrc: homeImg.men_White,
      className: "men",
    },
    {
      src: homeImg.women,
      whiteSrc: homeImg.women_White,
      className: "women",
    },
  ];
  return (
    <>
      <div className="flex justify-center py-14">
        <p className="text-2xl font-bold">Popular categories 🌟</p>
      </div>
      <div className="flex justify-center gap-5">
        <div className="bg-white p-3 rounded-xl flex justify-center ">
          {" "}
          <img className="w-14 h-13 cursor-pointer" src={homeImg.electronics} alt="" />
        </div>
        <div className="bg-white p-3 rounded-xl flex justify-center">
          {" "}
          <img className="w-14 h-13 cursor-pointer" src={homeImg.jwellery} alt="" />
        </div>
        <div className="bg-white p-3 rounded-xl flex justify-center">
          {" "}
          <img className="w-14 h-13 cursor-pointer" src={homeImg.men} alt="" />
        </div>
        <div className="bg-white p-3 rounded-xl flex justify-center ">
          {" "}
          <img className="w-14 h-13 cursor-pointer" src={homeImg.women} alt="" />
        </div>
      </div>
    </>
  ); 
}

export default Popular;
