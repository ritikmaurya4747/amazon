import React from "react";
import Navbar from "../Home/Navbar";
import { useDispatch, useSelector } from "react-redux";
import heart from "../imgs/heart.png";
import heart_red from "../imgs/red-heart.png";
import rating from "../imgs/rating.png";
import { NavLink } from "react-router-dom";

function Wishlist() {
  const wishlist = useSelector((state) => state.wishlist.wishlist);
  const dispatch = useDispatch();

  // Function to toggle wishlist item
  const toggleWishlist = (item) => {
    dispatch({
      type: "TOGGLE_WISHLIST_ITEM",
      payload: item,
    });
  };

  return (
    <>
      <Navbar />
      <div className="bg-gray-100 h-auto pb-10 py-3">
        <h1 className="text-center font-bold text-3xl py-5">Wishlist</h1>
        <div className="w-[80%] h-auto mx-auto  flex justify-center">
          {wishlist.length > 0 ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-10 ">
              {wishlist.map((item) => (
                <>
                  <div className="shadow-md  rounded-2xl ">
                    <div
                      className="bg-white w-56 h-60 flex justify-center items-center rounded-tr-xl rounded-tl-xl aspect-[3/2] p-8 relative group"
                      key={item.id}
                    >
                      <img
                        className="w-44 h-36 object-contain rounded-md z-10 transition-transform duration-300 group-hover:scale-105"
                        src={item.image}
                        alt={item.title}
                      />
                      <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-black bg-opacity-50 rounded-xl z-10">
                        <NavLink to={`/product/${item.id}`} key={item.id}>
                          <button className="bg-white text-black rounded-md p-4 font-bold text-[15px]">
                            View product
                          </button>
                        </NavLink>
                      </div>
                      <div className="absolute top-3 right-3 z-20">
                        <img
                          onClick={() => toggleWishlist(item)}
                          className="w-6 h-6 cursor-pointer"
                          src={
                            wishlist.some((w) => w.id === item.id)
                              ? heart_red
                              : heart
                          }
                          alt="like"
                        />
                      </div>
                    </div>
                    <div className="w-52 h-12 my-3 mx-2">
                      <p className="font-bold text-gray-700 ">
                        {item.title.length > 33
                          ? `${item.title.substring(0, 33)}...`
                          : item.title}
                      </p>
                    </div>
                    <p className="text-sm mx-2">
                      {item.category.toUpperCase()}
                    </p>
                    <div className="flex my-4 mx-2">
                      <div className="flex ">
                        <img className="w-4" src={rating} alt="" />
                        <img className="w-4" src={rating} alt="" />
                        <img className="w-4" src={rating} alt="" />
                        <img className="w-4" src={rating} alt="" />
                        <img className="w-4" src={rating} alt="" />
                      </div>
                      <div>
                        <p className="text-sm font-bold mx-2">5</p>
                      </div>
                    </div>
                    <div className="flex mx-2 gap-2 pb-3">
                      <p className="text-black font-bold">${item.price}</p>
                      <p className="line-through">
                        ${Math.round(item.price * 1.66)}
                      </p>
                      <span className="text-red-600 font-bold">(60%)</span>
                    </div>
                  </div>
                </>
              ))}
            </div>
          ) : (
            <p className="text-center py-10">Your wishlist is empty!</p>
          )}
        </div>
      </div>
    </>
  );
}

export default Wishlist;
