import React from "react";
// import Logo from "../assets/logo.png";
import header_img from "../assets/imgs.js";
import { Link } from "react-router-dom";
import Home from "../Home.jsx";

function Header() {
  return (
    <>
      <div className="bg-gray-900 flex text-white px-8 p-5 justify-between items-center">
        <div className="flex justify-around space-x-24">
          <div>
            <Link to="/"> 
            <img className="w-28" src={header_img.logo} alt="img" /></Link>
          </div>
          <div className="flex">
            <input
              className="outline-none rounded-tl-lg rounded-bl-lg border border-gray-400 bg-gray-700 px-2 w-72"
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
        <div className="flex gap-5 ">
          <Link to="/wishlist">
            <img
              className="w-8 h-8 cursor-pointer"
              src={header_img.heart}
              alt="heart"
            />
          </Link>
          <img
            className="w-8 h-8 cursor-pointer"
            src={header_img.added}
            alt="added"
          />
          <img
            className="w-8 h-8 cursor-pointer"
            src={header_img.orders}
            alt="order"
          />
          <img
            className="w-8 h-8 cursor-pointer"
            src={header_img.user}
            alt="user"
          />
        </div>
      </div>
      <Home />
    </>
  );
}

export default Header;
