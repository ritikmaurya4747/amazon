import React, { useState } from "react";
import { useSelector } from "react-redux";

function Payment() {
  const cartItems = useSelector((state) => state.cart.cartItems);

  const [formData, setFormData] = useState({
    country: "",
    email: "",
    name: "",
    address: "",
    contact: "",
    pincode: "",
  });

  const [errors, setErrors] = useState({});
  const [showPaymentMethod, setShowPaymentMethod] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    let validationErrors = {};

    // Check for required fields
    Object.keys(formData).forEach((key) => {
      if (!formData[key].trim()) {
        validationErrors[key] = "This field is required";
      }
    });

    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
    } else {
      setErrors({});
      console.log("Form submitted:", formData);
      setShowPaymentMethod(true);
    }
  };

  // Calculate total price
  const totalPrice = cartItems.reduce(
    (total, item) => total + (Number(item.price) || 0),
    0
  );
  const taxRate = 0.05; 
  const totalPriceWithTax = totalPrice + totalPrice * taxRate;

  return (
    <div className="w-full h-[540px] bg-gray-100 py-10">
      {!showPaymentMethod && (
        <div className="w-[75%] h-auto bg-white mx-auto drop-shadow-2xl py-5 px-10 rounded-2xl">
          <h1 className="text-black text-2xl font-bold py-5">
            Shipping Details
          </h1>
          <form onSubmit={handleSubmit}>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label className="text-sm">Country*</label>
                <input
                  type="text"
                  name="country"
                  placeholder="India"
                  value={formData.country}
                  onChange={handleChange}
                  className="w-full border border-gray-300 rounded px-3 py-2 "
                />
                {errors.country && (
                  <span className="text-red-500">{errors.country}</span>
                )}
              </div>
              <div className="space-y-2">
                <label className="text-sm">Email address*</label>
                <input
                  type="email"
                  name="email"
                  placeholder="example@gmail.com"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full border border-gray-300 rounded px-3 py-2"
                />
                {errors.email && (
                  <span className="text-red-500">{errors.email}</span>
                )}
              </div>
              <div className="space-y-2">
                <label className="text-sm">Name*</label>
                <input
                  type="text"
                  name="name"
                  placeholder="Name"
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full border border-gray-300 rounded px-3 py-2"
                />
                {errors.name && (
                  <span className="text-red-500">{errors.name}</span>
                )}
              </div>
              <div className="space-y-2">
                <label className="text-sm">Home address*</label>
                <input
                  type="text"
                  name="address"
                  placeholder="Address"
                  value={formData.address}
                  onChange={handleChange}
                  className="w-full border border-gray-300 rounded px-3 py-2"
                />
                {errors.address && (
                  <span className="text-red-500">{errors.address}</span>
                )}
              </div>
              <div className="space-y-2">
                <label className="text-sm">Contact Number*</label>
                <input
                  type="text"
                  name="contact"
                  placeholder="Number"
                  value={formData.contact}
                  onChange={handleChange}
                  className="w-full border border-gray-300 rounded px-3 py-2"
                />
                {errors.contact && (
                  <span className="text-red-500">{errors.contact}</span>
                )}
              </div>
              <div className="space-y-2">
                <label className="text-sm">Pin Code</label>
                <input
                  type="text"
                  name="pincode"
                  placeholder="Pincode"
                  value={formData.pincode}
                  onChange={handleChange}
                  className="w-full border border-gray-300 rounded px-3 py-2"
                />
                {errors.pincode && (
                  <span className="text-red-500">{errors.pincode}</span>
                )}
              </div>
            </div>
            <button
              type="submit"
              className="mt-4 px-6 py-2 bg-blue-600 text-white rounded"
            >
              Submit
            </button>
          </form>
        </div>
      )}

      {/* Show payment method section only if showPaymentMethod is true */}
      {showPaymentMethod && (
        <div className="w-[450px] h-96 mx-auto shadow-2xl bg-white rounded-xl p-10 mt-12">
          <div className="flex-col justify-center space-y-12">
            <h1 className=" font-bold text-2xl">Choose your payment method</h1>
            <div className="flex gap-5 ">
              <input
                type="radio"
                name="payment-method"
                value="COD"
                defaultChecked
              />
              Cash on delivery (COD)
            </div>
            <div className="flex gap-4">
              <p>Total Amount: </p>
              <p className="font-bold">${totalPriceWithTax.toFixed(2)}</p>{" "}
            </div>
            <button className="bg-orange-500 w-32 h-12 text-white font-bold text-xl rounded-md">
              Place Order
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

export default Payment;
