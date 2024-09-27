import React, { useEffect, useState } from "react";
import rating from "./imgs/rating.png";
import heart from "./imgs/heart.png";
import heart_white from "./imgs/red-heart.png";
function Deals() {
  const [allProducts, setAllProducts] = useState([]);
  const [likedProducts, setLikedProducts] = useState(heart);

  useEffect(() => {
    const getProducts = async () => {
      const response = await fetch("https://fakestoreapi.com/products");
      const products = await response.json();
      setAllProducts(products);
    };
    getProducts();
  }, []);

  return (
    <>
      <div className="bg-gray-100 mt-6">
        <p className="text-2xl font-bold text-center mb-10">Hot Deals 🔥</p>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-10 w-[95%] mx-auto">
          {allProducts.map((item) => (
            <div key={item.id} className="space-y-2 p-4 rounded-lg ">
              <div className="bg-white w-56 h-64 flex  justify-center items-center rounded-xl aspect-[3/2] p-8 relative">
                <div className="absolute top-3 right-3">
                  {" "}
                  <img className="w-6 h-6" src={heart} alt="" />
                </div>

                <img
                  src={item.image}
                  alt={item.title}
                  className="w-44    h-36 object-contain rounded-md"
                />
              </div>
              <div className="w-44 h-12">
                <p className="font-bold ">
                  {item.title.length > 33
                    ? `${item.title.substring(0, 33)}...`
                    : item.title}
                </p>
              </div>
              <p className="text-sm font-base">{item.category.toUpperCase()}</p>

              <div className="flex justify-between gap-2">
                <div className="flex">
                  <img className="w-4" src={rating} alt="" />
                  <img className="w-4" src={rating} alt="" />
                  <img className="w-4" src={rating} alt="" />
                  <img className="w-4" src={rating} alt="" />
                  <img className="w-4" src={rating} alt="" />
                </div>
                <div>
                  <p className="text-sm font-bold">
                    {"5 " + "(" + item.rating.count + " reviews)"}
                  </p>
                </div>
              </div>
              <div className="flex gap-2 ">
                <p className="text-black font-bold">${item.price}</p>
                <p className="line-through">${Math.round(item.price * 1.66)}</p>
                <span className="text-red-600 font-bold">(60% OFF)</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default Deals;
