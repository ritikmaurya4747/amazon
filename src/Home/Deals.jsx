import React, { useEffect, useState, useContext } from "react";
import rating from "../imgs/rating.png";
import heart from "../imgs/heart.png";
import heart_red from "../imgs/red-heart.png";
import { CategoryContext } from "../Context/Context";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";

function Deals() {
  const [allProducts, setAllProducts] = useState([]);
  const { category, products } = useContext(CategoryContext);

  // for update the state of all products
  const dispatch = useDispatch();
  //Accessing all products state from redux store using useSelector Hook
  const wishlist = useSelector((state) => state.wishlist.wishlist);

  useEffect(() => {
    if (category !== "all") {
      const filteredProducts = products.filter(
        (product) => product.category === category
      );
      setAllProducts(filteredProducts);
    } else {
      setAllProducts(products);
    }
  }, [category, products]);

  const toggleWishlist = (item) => {
    dispatch({
      type: "TOGGLE_WISHLIST_ITEM",
      payload: item,
    });
  };

  return (
    <div className="bg-gray-100 mt-10 py-3">
      <p className="text-2xl font-bold text-center mb-10">Hot Deals 🔥</p>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-10 w-[95%] mx-auto">
        {allProducts.map((item) => (
          <div key={item.id} className="space-y-2 p-4 rounded-lg">
            <div className="bg-white w-56 h-64 flex justify-center items-center rounded-xl aspect-[3/2] p-8 relative group">
              <img
                className="w-44 h-36 object-contain rounded-md z-10 transition-transform duration-300 group-hover:scale-105"
                src={item.image}
                alt={item.title}
              />
              <div className="absolute top-3 right-3 z-20">
                <img
                  onClick={() => toggleWishlist(item)}
                  className="w-6 h-6 cursor-pointer"
                  src={
                    wishlist.some((w) => w.id === item.id) ? heart_red : heart
                  }
                  alt="like"
                />
              </div>
              <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-black bg-opacity-50 rounded-xl z-10">
                <Link to={`/product/${item.id}`}>
                  <button className="bg-white text-black rounded-md p-4 font-bold text-[15px]">
                    View product
                  </button>
                </Link>
              </div>
            </div>
            <div className="w-44 h-12">
              <p className="font-bold">
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
            <div className="flex gap-2">
              <p className="text-black font-bold">${item.price}</p>
              <p className="line-through">${Math.round(item.price * 1.66)}</p>
              <span className="text-red-600 font-bold">(60% OFF)</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Deals;
