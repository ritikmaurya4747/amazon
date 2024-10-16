import React from "react";
import { useSelector } from "react-redux";
import deletes from "../imgs/delete-order.png";
import order_done from "../imgs/order-done.png";
import emptyOrder from "../imgs/order-now.gif";
import { NavLink } from "react-router-dom";

function Order() {
  const orders = useSelector((state) => state.order?.OrderItems || []);

  console.log("orders: " + orders);

  if (!orders || orders.length === 0) {
    return (
      <>
        <div className="w-full h-[520px] flex flex-col items-center justify-center">
          <p className="font-bold text-4xl">Your Orders</p>
          <img className="w-[70%] h-[80%]" src={emptyOrder} alt="" />
        </div>
      </>
    );
  }
  

  return (
    <div className="w-full h-auto bg-gray-100 py-10">
      <div className="w-[55%] mx-auto p-5 space-y-10">
        <div className="flex justify-between">
          <h1 className="text-3xl font-bold">Your Orders</h1>
          <button
            onClick={() => {
              localStorage.removeItem("OrderItems");
              window.location.reload();
            }}
            className="flex bg-red-500 rounded-md w-32 justify-center items-center"
          >
            <img className="w-6" src={deletes} alt="" />
            <p className="text-white font-bold">Clear Data</p>
          </button>
        </div>
        {orders.map((order) => (
          <div
            key={order.id}
            className="bg-white shadow-xl rounded-2xl p-4 mb-4 h-auto"
          >
            {order.cartItems.map((item) => (
              <NavLink to={`/product/${item.id}`} key={item.id}>
                <div className="flex mt-2">
                  <div className="w-[20%] h-44  flex justify-center items-center">
                    <img className="w-16 h-16" src={item.image} alt="xyz" />
                  </div>
                  <div className="w-[80%] h-44  space-y-3">
                    <p className="font-bold">{item.title}</p>
                    <p className="font-semibold text-sm">
                      {item.category.toUpperCase()}
                    </p>
                    <p className="">
                      {" "}
                      Number of items: <b>1</b>
                    </p>
                    <p className="font-semibold text-sm">Size :</p>
                    <div className="bg-green-300 flex w-[65%] h-8 rounded-md gap-2 justify-center items-center">
                      <img className="w-6" src={order_done} alt="" />
                      <p className="">
                        Ordered succesfully! Soon to be dispatch!
                      </p>
                    </div>
                  </div>
                </div>
              </NavLink>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}

export default Order;
