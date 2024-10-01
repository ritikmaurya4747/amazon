import React from "react";
import Navbar from "../Home/Navbar";
import { useDispatch, useSelector } from "react-redux";
import cart_empty from "../imgs/cart-empty.png";
import save from "../imgs/save.png";
import heart_red from "../imgs/red-heart.png";
import del from "../imgs/delete.png";
function Cart() {
  const dispatch = useDispatch();
  const wishlist = useSelector((state) => state.wishlist.wishlist);
  const cartItems = useSelector((state) => state.cart.cartItems);

  const handleRemoveFromCart = (product) => {
    dispatch({
      type: "REMOVE_FROM_CART",
      payload: { id: product.id },
    });
  };
  const toggleWishlist = (item) => {
    dispatch({
      type: "TOGGLE_WISHLIST_ITEM",
      payload: item,
    });
  };

  return (
    <>
      <Navbar />
      <div className="bg-gray-100">
        <div className="w-[80%] h-auto mx-auto ">
          <div className="flex justify-center">
            <h1 className="font-bold text-3xl py-2">Your Cart</h1>
          </div>
          <div className="">
            {cartItems.length === 0 ? (
              <div className="flex justify-center py-5">
                {" "}
                <img className="w-96" src={cart_empty} alt="" />
              </div>
            ) : (
              cartItems.map((item) => (
                <>
                  <div className=" w-[80%] h-auto mx-auto gap-5  flex justify-between py-8">
                    <div
                      key={item.id}
                      className="w-[60%] h-60 border bg-white shadow-4xl py-2 rounded-xl flex"
                    >
                      <div className="w-[20%] px-4 py-2 flex justify-center items-center">
                        <img className="w-44" src={item.image} alt="" />
                      </div>
                      <div className="w-[80%] py-3">
                        <div className="space-y-4">
                          <p className="font-bold text-gray-500">
                            {item.title}
                          </p>
                          <p className="font-bold">${item.price}</p>
                          <p className="font-semibold text-gray-900">
                            Size : Not Choosen
                          </p>
                        </div>
                        <div className="flex mt-5 items-center gap-10">
                          <div className="w-28 h-12 flex justify-center items-center gap-6 bg-white shadow-xl rounded-md ">
                            <button className="font-bold text-2xl">+</button>
                            <p>{item.quantity}</p>
                            <button className="font-bold text-2xl">-</button>
                          </div>
                          <div className="flex gap-4 font-semibold text-gray-700">
                            <div className="flex gap-2 ">
                              <img
                                onClick={() => toggleWishlist(item)}
                                className="w-6 h-6 cursor-pointer"
                                src={
                                  wishlist.some((w) => w.id === item.id)
                                    ? heart_red
                                    : save
                                }
                                alt="like"
                              />
                              <button>Save</button>
                            </div>
                            <div className="flex gap-2">
                                
                              <img className="w-6 h-6" src={del} alt="" />
                              <button onClick={handleRemoveFromCart}>Delete</button>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    {/* Chekout to payment  */}
                    <div className="w-[50%] h-auto bg-white shadow-lg rounded-2xl p-7">
                      <div className="bg-green-400 p-2 rounded-md text-gray-800 font-base">
                        <p>
                          Congrats! You're eligible for <b>Free Delivery</b>.
                        </p>
                        <p>
                          Use code <b>SHUBHO20</b> for 20% discount.
                        </p>
                      </div>
                      <hr className="border-x-gray-500 my-5 " />
                      <div className="flex gap-2">
                        <input
                          className="border w-60 rounded-md h-10 outline-none pl-2 placeholder:text-base"
                          type="text"
                          placeholder="Promocode"
                        />
                        <button className="bg-black text-white font-semibold text-xl px-2 py-1 rounded-md">
                          Apply
                        </button>
                      </div>
                      <hr className="border-x-gray-500 my-5 " />
                      <div className="flex justify-between font-bold">
                        <p>Sub-Total</p>
                        <p>${item.price}</p>
                      </div>
                      <div className="flex justify-between text-gray-600 my-2">
                        <p>Delivery</p>
                        <p>$0.00</p>
                      </div>
                      <div className="flex justify-between text-gray-600">
                        <p>Tax</p>
                        <p>(5%) + $1.11</p>
                      </div>
                      <hr className="border-x-gray-500 my-5 " />
                      <div className="flex justify-between font-bold my-2">
                        <p>Total</p>
                        <p>${item.price}</p>
                      </div>
                      <div className="flex justify-center mt-6">
                        <button className="bg-orange-400 font-bold text-white rounded-md w-80 h-14 text-xl">
                          Proceed to Payment
                        </button>
                      </div>
                    </div>
                  </div>
                </>
              ))
            )}
          </div>
        </div>
      </div>
    </>
  );
}

export default Cart;
