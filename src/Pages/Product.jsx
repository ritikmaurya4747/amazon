import React, { useContext, useState } from "react";
import { CategoryContext } from "../Context/Context";
import { useParams, Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import rating from "../imgs/rating.png";
import { toast } from "react-toastify";

function Product() {
  const { products } = useContext(CategoryContext);
  const { id } = useParams();
  const product = products.find((e) => e.id === Number(id));
  const [size, setSize] = useState("");
  const dispatch = useDispatch();

  // Check if the product exists
  if (!product) {
    return (
      <div className="bg-slate-50 h-screen flex items-center justify-center">
        <h1 className="text-2xl font-bold">Product not found</h1>
      </div>
    );
  }

  const handleAddToCart = () => {
    dispatch({
      type: "ADD_TO_CART",
      payload: product,
    });
    toast.success("Product added to cart!");
  };

  return (
    <>
      <div className="bg-slate-50">
        <div className="w-[80%] mx-auto h-auto flex justify-between">
          <div className="w-full h-auto flex justify-center items-center">
            <div className="relative transition-transform transform hover:scale-105 shadow-lg rounded-2xl bg-white p-7">
              <img
                className="w-96 h-[420px] p-4"
                src={product.image}
                alt={product.title}
              />
            </div>
          </div>
          <div className="w-full h-auto">
            <div className="w-[100%] mx-auto flex flex-col justify-center py-5">
              <h1 className="font-bold text-4xl">{product.title}</h1>
              <p className="py-2">{product.description}</p>
              <div className="flex items-center gap-1">
                {[...Array(5)].map((_, index) => (
                  <img key={index} className="w-5" src={rating} alt="" />
                ))}
                <p className="text-sm font-bold mx-2">
                  ({product.rating.count})
                </p>
              </div>
              <hr className="border-gray-300 mt-5" />
            </div>
            <h1 className="font-bold text-2xl -mt-2">Choose a size</h1>
            {/* Size options */}
            <div className="options flex gap-2 mt-2">
              {["S", "M", "L", "XL", "XXL"].map((sizeOption) => (
                <p
                  key={sizeOption}
                  onClick={() => setSize(sizeOption)}
                  className={`px-4 py-2 border-2 font-semibold border-orange-300 rounded cursor-pointer ${
                    size === sizeOption
                      ? "bg-orange-400 text-white border-none"
                      : "bg-white text-black"
                  }`}
                >
                  {sizeOption}
                </p>
              ))}
            </div>
            {/* Product Price */}
            <hr className="border-gray-300 mt-8" />
            <div className="flex items-center gap-3 py-5">
              <p className="font-bold text-2xl"> Price: ${product.price} </p>
              <p className="text-red-700 font-semibold text-xl line-through">
                ${Math.round(product.price * 1.66)}
              </p>
            </div>
            {/* Buttons */}
            <div className="flex gap-9 my-3 mb-8">
              <Link to="/cart">
                <button
                  onClick={handleAddToCart}
                  className="bg-orange-400 text-white text-xl font-bold px-4 py-3 rounded-md"
                >
                  Buy Now
                </button>
              </Link>
              <button 
              onClick={handleAddToCart}
              className="bg-black text-white text-xl font-bold px-6 py-3 rounded-md">
                Added
              </button>
            </div>
          </div>
        </div>    
      </div>
    </>
  );
}

export default Product;
