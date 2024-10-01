import React from "react";
import header_img from "../assets/imgs.js";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";


function Header() {
  const wishlistCount = useSelector((state) => state.wishlist.wishlist.length);

  return (
    <>
      <div className="bg-gray-900 flex text-white px-8 p-6 justify-between items-center sticky top-0 z-50">
        <div className="flex justify-around space-x-24">
          <div>
            <Link to="/"> 
            <img className="w-28" src={header_img.logo} alt="img" /></Link>
          </div>
          <div className="flex">
            <input
              className=" rounded-tl-lg rounded-bl-lg border border-gray-600 bg-gray-700 px-2 w-[350px]"
              placeholder="Search..."
              type="text"
            />
            <img
              className="w-12 h-12 bg-yellow-600 rounded-top-right rounded-tr-lg rounded-br-lg p-2"
              src={header_img.search}
              alt="search"
            />
          </div>
        </div>
        <div className="flex gap-8 mx-5 items-center">
          <Link to="/wishlist">
            <div className="relative"><img
              className="w-8 h-8 cursor-pointer"
              src={header_img.heart}
              alt="heart"
            />
            <span className="absolute -top-2 -right-2 text-xs bg-red-600 text-white rounded-full h-5 w-5 flex items-center justify-center">
            {wishlistCount}
          </span></div>
          </Link>
          <Link to="/cart">
          <img
            className="w-8 h-8 cursor-pointer "
            src={header_img.added}
            alt="added"
          />
          </Link>
          <Link to="/order">
          <img
            className="w-8 h-8 cursor-pointer"
            src={header_img.orders}
            alt="order"
          />
          </Link>
          <Link to="/account">
          <img
            className="w-12 h-12 cursor-pointer"
            src={header_img.user}
            alt="user"
          />
          </Link>
        </div>
      </div>
    </>
  );
}

export default Header;
