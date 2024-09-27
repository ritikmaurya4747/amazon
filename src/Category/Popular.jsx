import React, { useState } from "react";
import { categoryImg } from "./homeimg";

function Popular() {
  const [activeImg, setActiveImg] = useState(null);
  const images = [
    {
      src: categoryImg.electronic,
      whiteSrc: categoryImg.electronic_White,
      className: "electronics",
    },
    {
      src: categoryImg.jwellery,
      whiteSrc: categoryImg.jewellry_White,
      className: "jwellery",
    },
    {
      src: categoryImg.men,
      whiteSrc: categoryImg.men_White,
      className: "men",
    },
    {
      src: categoryImg.women,
      whiteSrc: categoryImg.women_White,
      className: "women",
    },
  ];

  const whiteImagesHandle = (index) => {
    setActiveImg(index === activeImg ? null : index);
  };

  return (
    <>
      <div className="flex justify-center py-14">
        <p className="text-2xl font-bold">Popular categories 🌟</p>
      </div>
      <div className="flex justify-center gap-10">
        {images.map((image, index) => (
          <div
            key={index}
            className={` p-3 rounded-xl flex justify-center ${activeImg===index?"bg-black":"bg-white"}`}
          >
            <img
              onClick={() => whiteImagesHandle(index)}
              src={activeImg === index ? image.whiteSrc : image.src}
              alt={image.className}
              className="w-14 h-13 cursor-pointer"
            />
          </div>
        ))}
      </div>
    </>
  );
}

export default Popular;
