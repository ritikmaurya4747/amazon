import React, { useEffect, useState, useContext } from "react";
import rating from "./imgs/rating.png";
import heart from "./imgs/heart.png";
import heart_red from "./imgs/red-heart.png";
import { CategoryContext } from "./Context/Context";

function Deals() {
  const [allProducts, setAllProducts] = useState([]);
  const [likedProducts, setLikedProducts] = useState({});
  const { category } = useContext(CategoryContext);

  useEffect(() => {
    const getProducts = async () => {
      const response = await fetch("https://fakestoreapi.com/products");
      const products = await response.json();
      if (category !== "all") {
        const filteredProducts = products.filter(
          (product) => product.category === category
        );
        setAllProducts(filteredProducts);
      } else {
        setAllProducts(products);
      }
    };
    getProducts();
  }, [category]);

  const likedProductsHandle = (productId) => {
    setLikedProducts((prev) => ({
      ...prev,
      [productId]: !prev[productId],
    }));
  };

  return (
    <>
      <div className="bg-gray-100 mt-6">
        <p className="text-2xl font-bold text-center mb-10">Hot Deals 🔥</p>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-10 w-[95%] mx-auto">
          {allProducts.map((item) => (
            <div key={item.id} className="space-y-2 p-4 rounded-lg">
              {/* Main div for product */}
              <div className="bg-white w-56 h-64 flex justify-center items-center rounded-xl aspect-[3/2] p-8 relative group">
                {/* Product image */}
                <img
                  className="w-44 h-36 object-contain rounded-md z-10 transition-transform duration-300 group-hover:scale-105"
                  src={item.image}
                  alt={item.title}
                />
                {/* Like button */}
                <div className="absolute top-3 right-3 z-20">
                  <img
                    onClick={() => likedProductsHandle(item.id)}
                    className="w-6 h-6 cursor-pointer"
                    src={likedProducts[item.id] ? heart_red : heart}
                    alt="like"
                  />
                </div>
                {/* View product button */}
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-black bg-opacity-50 rounded-xl z-10">
                  <button
                    onClick={() => console.log('View product clicked')}
                    className="bg-white text-black rounded-md p-4 font-bold text-[15px]"
                  >
                    View product
                  </button>
                </div>
              </div>
              {/* Product title */}
              <div className="w-44 h-12">
                <p className="font-bold">
                  {item.title.length > 33
                    ? `${item.title.substring(0, 33)}...`
                    : item.title}
                </p>
              </div>
              {/* Product category */}
              <p className="text-sm font-base">{item.category.toUpperCase()}</p>
              {/* Ratings */}
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
              {/* Price */}
              <div className="flex gap-2">
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

export default Deals;1