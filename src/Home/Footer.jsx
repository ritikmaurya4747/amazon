import React from "react";
import footer_img from "../assets/imgs.js";

function Footer() {
  return (
    <>
    <div className="text-gray-100  bg-gray-900 flex py-6 mt-2 justify-center"><h3><span className=" font-bold">Disclaimer:</span> This Amazon clone project is a mere simulation and is not affiliated with Amazon in any way.</h3></div>
      <div className="flex justify-around">
        <div className="">
          <h2 className="font-bold  text-lg py-4">Get to Know us</h2>
          <ul className="space-y-4 text-gray-400 cursor-pointer">
            <li>Make Money with us</li>
            <li>Amazon Payment</li>
            <li>Let Us Help You</li>
          </ul>
        </div>
        <div className="">
          <h2 className="font-bold text-lg py-4">About Amazon</h2>
          <ul className="space-y-4 text-gray-400 cursor-pointer">
            <li>Sell products on Amazon </li>
            <li>Amazon Business Card</li>
            <li>Amazon and COVID-19</li>
          </ul>
        </div>
        <div className="">
          <h2 className="font-bold text-lg py-4">Connect with Us</h2>
          <ul className="space-y-4 text-gray-400 cursor-pointer">
            <li> Sell apps on Amazon</li>
            <li>Shop with Points</li>
            <li>Shipping Rates & Policies</li>
          </ul>
        </div>
        <div className="">
          <h2 className="font-bold text-lg py-4"> Amazon Cares</h2>
          <ul className="space-y-4 text-gray-400 cursor-pointer">
            <li>Become an Affiliate</li>
            <li>Reload Your Balance</li>
            <li>Returns & Replacements</li>
          </ul>
        </div>
      </div>
      <div className="flex justify-center pt-14 space-x-5">
        <img className="w-20 " src={footer_img.logo2} alt="" />
        <p className="mt-1"> © 2024 | Developed by <a href="https://github.com/pradeepyadav0503" target="_blank" className="text-purple-800 underline hover:text-blue-700">
    Pradeep Yadav
</a>
</p>
      </div>
    </>
  );
}

export default Footer;
