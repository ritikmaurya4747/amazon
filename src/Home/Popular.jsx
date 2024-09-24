import React from "react";
// images
import men from "../imgs/men.png";
import women from "../imgs/women.png";
import jwellery from "../imgs/jwelery.png";
import electronics from "../imgs/pc.png";
import elctronic_White from "../imgs/pc-white.png";
import men_White from "../imgs/men-white.png";
import women_White from "../imgs/women-white.png";
import jewellry_White from "../imgs/jwelery-white.png";

function Popular() {
  const images = [
    {
      src: electronics,
      whiteSrc: elctronic_White,
      className: "electronics",
    },
    {
      src: jwellery,
      whiteSrc: jewellry_White,
      className: "jwellery",
    },
    {
      src: men,
      whiteSrc: men_White,
      className: "men",
    },
    {
      src: women,
      whiteSrc: women_White,
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
