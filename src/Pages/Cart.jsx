import React from "react";
import Navbar from "../Home/Navbar";
import { useSelector } from 'react-redux';

function Cart() {
  const cartItems = useSelector((state) => state.cart.cartItems);
  const handleRemoveFromCart = () => {
    dispatch({
      type: 'REMOVE_FROM_CART',
      payload: { id: product.id },
    });
  };

  return (
    <>
      <Navbar />
      <div className="w-[80%] mx-auto flex flex-col">
        <h1 className="font-bold text-3xl py-2">Your Cart</h1>
        <div className="flex flex-col">
          {cartItems.length === 0 ? (
            <p>Your cart is empty</p>
          ) : (
            cartItems.map(item => (
              <div key={item.id} className="flex justify-between items-center py-2 border-b">
                <h2 className="font-semibold">{item.title}</h2>
                <p className="font-bold">${item.price}</p>
              </div>
            ))
          )}
        </div>
      </div>
    </>
  );
}

export default Cart;
