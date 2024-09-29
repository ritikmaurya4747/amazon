import React from "react";
import Footer from "./Footer/Footer";
import { CategoryProvider } from "./Context/Context";
import { BrowserRouter, Route, Routes } from "react-router-dom"; // Correct imports
import Wishlist from "./Pages/Wishlist";
import Home from "./Home";

function App() {
  return (
    <BrowserRouter>
      <CategoryProvider>
        <div>
          
          <Routes>
          <Route path="/" element={<Home />}/>
            <Route path="/wishlist" element={<Wishlist />} />
          </Routes>
          <Footer />
        </div>
      </CategoryProvider>
    </BrowserRouter>
  );
}

export default App;
