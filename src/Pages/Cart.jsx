import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import cart_empty from "../imgs/cart-empty.png";
import save from "../imgs/save.png";
import heart_red from "../imgs/red-heart.png";
import del from "../imgs/delete.png";
import { Link } from "react-router-dom";
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
   
  const incrementHandler = (item) =>{
    dispatch({
      type: "INCREMENT_ITEM_COUNT",
      payload: { id: item.id },
    });
  }

  const decrementHandler = (item) => {
    if (item.quantity > 1) { // Only decrement if quantity is greater than 1
      dispatch({
        type: "DECREMENT_ITEM_COUNT",
        payload: { id: item.id },
      });
    } else {
      handleRemoveFromCart(item); // Remove item if quantity reaches 0
    }
  };

  // adding percent on the total quantity of the itmes
  const [total, setTotal] = useState(0);
  useEffect(()=>{
    const newTotal = cartItems.reduce(
      (total,item) => total + item.price * item.quantity,0 )
      setTotal(newTotal); 
  },[cartItems])

  const discountPrice = (total*0.2).toFixed(2);
  const taxPrice = (total * 0.05).toFixed(2);




  return (
    <>
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
                            <button 
                            onClick={()=>incrementHandler(item)}
                            className="font-bold text-2xl">+</button>
                            <p>{item.quantity}</p>
                            <button 
                            onClick={()=>decrementHandler(item)}
                            className="font-bold text-2xl">-</button>
                          </div>
                          <div className="flex gap-4 font-semibold text-gray-700">
                            <div className="flex gap-2 ">
                              <img
                                onClick={() => toggleWishlist(item)}
                                className="w-6 h-6 cursor-pointer transform transition-transform duration-200 hover:scale-125"
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
                              <img
                                onClick={() => handleRemoveFromCart(item)}
                                className="w-6 h-6 cursor-pointer transform transition-transform duration-200 hover:scale-125"
                                src={del}
                                alt=""
                              />
                              <button>Delete</button>
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
                        <p>${(item.price * item.quantity).toFixed(2)}</p>

                      </div>
                      <div className="flex justify-between text-gray-600 my-2">
                        <p>Delivery</p>
                        <p>$0.00</p>
                      </div>
                      <div className="flex justify-between text-gray-600">
                        <p>Tax</p>
                        <p>(5%)+${taxPrice} </p>
                      </div>
                      <hr className="border-x-gray-500 my-5 " />
                      <div className="flex justify-between font-bold my-2">
                        <p>Total</p>
                        <p>${total}</p>
                      </div>
                      <div className="flex justify-center mt-6">
                        <Link to="/payment">
                        <button  className="bg-orange-400 font-bold text-white rounded-md w-80 h-14 text-xl">
                          Proceed to Payment
                        </button>
                        </Link>
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
