import React from "react";
import { useSelector } from "react-redux";
import deletes from "../imgs/delete-order.png";

function Order() {
  const orders = useSelector((state) => state.OrderAdded.OrderItems);

 

  if (!orders || orders.length === 0) {
    return <p>No orders placed.</p>;
  }

  return (
    <div className="w-full h-auto bg-gray-100 py-10">
      <div className="w-[60%] mx-auto p-5 space-y-10">
        <div className="flex justify-between">
          <h1 className="text-3xl font-bold">Your Orders</h1>
          <div className="flex bg-red-500 rounded-md w-28 justify-center items-center">
            <img className="w-6" src={deletes} alt="" />
            <p className="text-white font-bold">Clear Data</p>
          </div>
        </div>
        {orders.map((order, index) => (
         
            <div key={index} className="bg-white shadow-2xl rounded-md p-4 mb-4">
            <h2 className="text-xl font-bold">Order #{index + 1}</h2>
            {order.cartItems.map((item, itemIndex) => (
              <div key={itemIndex} className="flex items-center space-x-4 mt-2">
                <img className="w-28" src={item.image} alt={item.title} />
                <p>Item: {item.title}</p>
              </div>
            ))}
          </div>
        
        ))}
      </div>
    </div>
  );
}

export default Order;
