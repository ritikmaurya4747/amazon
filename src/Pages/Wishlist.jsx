import React from "react";
import Navbar from "../Home/Navbar";
import { useSelector } from "react-redux";
import heart from "../imgs/heart.png";
import heart_red from "../imgs/red-heart.png";
import rating from "../imgs/rating.png";

function Wishlist() {
  const wishlist = useSelector((state) => state.wishlist.wishlist);

  return (
    <>
      <Navbar />
      <div className="bg-gray-100 h-[500px]">
        <h1 className="text-center font-bold text-3xl py-5">Wishlist</h1>
        <div className="w-[80%] h-auto mx-auto border border-red-500 ">
          {wishlist.length > 0 ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
              {wishlist.map((item) => (
                <>
                  <div>
                    <div
                      className="bg-white w-56 h-64 flex justify-center items-center rounded-xl aspect-[3/2] p-8 relative group"
                      key={item.id}
                    >
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
                            wishlist.some((w) => w.id === item.id)
                              ? heart_red
                              : heart
                          }
                          alt="like"
                        />
                      </div>
                    </div>
                    <div className="w-52 h-12 my-3">
                      <p className="font-bold text-gray-700">
                        {item.title.length > 33
                          ? `${item.title.substring(0, 33)}...`
                          : item.title}
                      </p>
                    </div>
                    <p className="text-sm">{item.category.toUpperCase()}</p>
                    <div className="flex my-4">
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
