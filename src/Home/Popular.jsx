import React from "react";
import homeImg from './homeimg'

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
  return(
  <>
    <div className="flex justify-center py-14">
        <div className="">
            <p className="text-2xl font-bold">Popular categories 🌟</p>
        </div>      
    </div>
  </>
  )
}

export default Popular;
