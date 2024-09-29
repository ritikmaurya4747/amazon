import React from "react";
import Home from "../src/Home/Home";
import Footer from "../src/Home/Footer";
import { CategoryProvider } from "./Context/Context";
import { BrowserRouter, Route, Routes } from "react-router-dom"; // Correct imports
import Wishlist from "./Pages/Wishlist";
import Cart from "./Pages/Cart";
import Order from "./Pages/Order";

function App() {
  return (
    <BrowserRouter>
      <CategoryProvider>
        <div>
          <Routes>
          <Route path="/" element={<Home />}/>
            <Route path="/wishlist" element={<Wishlist />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/order" element={<Order />}/>
          </Routes>
          <Footer />
        </div>
      </CategoryProvider>
    </BrowserRouter>
  );
}

export default App;
