import React, { useState , useContext} from "react";
import { categoryImg } from "./homeimg";

import { CategoryContext } from "../Context/Context";


function Popular() {
  const { changeCategory } = useContext(CategoryContext);
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
      className: "jewelery",
    },
    {
      src: categoryImg.men,
      whiteSrc: categoryImg.men_White,
      className: "men's clothing",
    },
    {
      src: categoryImg.women,
      whiteSrc: categoryImg.women_White,
      className: "women's clothing",
    },
  ];

  const whiteImagesHandle = (index,image) => {
    setActiveImg(index === activeImg ? null : index);
    //alert(image.className + " white");
    changeCategory(image.className);

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
              onClick={() => whiteImagesHandle(index,image)}
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
