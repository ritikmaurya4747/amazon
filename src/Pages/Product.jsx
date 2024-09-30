import React, { useContext, useState } from "react";
import Navbar from "../Home/Navbar";
import { CategoryContext } from "../Context/Context";
import { useParams } from "react-router-dom";
import rating from "../imgs/rating.png";
function Product() {
  const { products } = useContext(CategoryContext);
  const { id } = useParams();
  const product = products.find((e) => e.id === Number(id));
  const [size, setSize] = useState("");

  return (
    <>
      <Navbar />
      <div className="bg-slate-50">
        <div className="w-[80%] mx-auto h-[500px] flex justify-between">
          <div className=" w-full h-auto flex justify-center items-center">
            <div className="relative transition-transform transform hover:scale-105 shadow-lg rounded-2xl bg-white p-5">
              <img
                className="w-80 h-96 p-4 "
                src={product.image}
                alt={product.title}
              />
            </div>
          </div>
          <div className=" w-full h-auto  ">
            <div className="w-[100%] mx-auto flex flex-col justify-center  py-10">
              <h1 className="font-bold text-4xl">{product.title}</h1>
              <p className="py-5">{product.description}</p>
              <div className="flex items-center gap-1">
                <img className="w-6" src={rating} alt="" />
                <img className="w-6" src={rating} alt="" />
                <img className="w-6" src={rating} alt="" />
                <img className="w-6" src={rating} alt="" />
                <img className="w-6" src={rating} alt="" />
                <p className="text-sm font-bold mx-2">
                  ({product.rating.count})
                </p>
              </div>
              <hr className=" border-gray-300 mt-8" />
            </div>
            <h1 className="font-bold text-3xl -mt-6">Choose a size</h1> 
            {/* this is the button size div */}
            <div className="options flex gap-2 mt-3 ">
              <p
                onClick={() => setSize("S")}
                className={`px-4 py-2 border-2 font-semibold border-orange-300  rounded cursor-pointer ${
                  size === "S"
                    ? "bg-orange-400 text-white border-none"
                    : "bg-white text-black"
                }`}
              >
                S
              </p>
              <p
                onClick={() => setSize("M")}
                className={`px-4 py-2 border-2 font-semibold border-orange-300  rounded cursor-pointer ${
                  size === "M"
                    ? "bg-orange-400 text-white border-none"
                    : "bg-white text-black"
                }`}
              >
                M
              </p>
              <p
                onClick={() => setSize("L")}
                className={`px-4 py-2 border-2 font-semibold border-orange-300  rounded cursor-pointer ${
                  size === "L"
                    ? "bg-orange-400 text-white border-none"
                    : "bg-white text-black"
                }`}
              >
                L
              </p>
              <p
                onClick={() => setSize("XL")}
                className={`px-4 py-2 border-2 font-semibold border-orange-300  rounded cursor-pointer ${
                  size === "XL"
                    ? "bg-orange-400 text-white border-none"
                    : "bg-white text-black"
                }`}
              >
                XL
              </p>
              <p
                onClick={() => setSize("XXL")}
                className={`px-4 py-2 border-2 font-semibold border-orange-300  rounded cursor-pointer ${
                  size === "XXL"
                    ? "bg-orange-400 text-white border-none"
                    : "bg-white text-black"
                }`}
              >
                XXL
              </p>
              
            </div>
            <hr className=" border-gray-300 mt-8" />
            {/* Product Price  */}
            <div className="">
                <p>Price : {product.price}</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Product;
