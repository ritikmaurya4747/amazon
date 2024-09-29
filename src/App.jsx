import React from "react";
import Header from "./Header/Header";
import Footer from "./Footer/Footer";
import Deals from "./Deals";
import { CategoryProvider } from "./Context/Context";
import { BrowserRouter, Route, Routes } from "react-router-dom"; // Correct imports
import Wishlist from "./Pages/Wishlist";

function App() {
  return (
    <BrowserRouter>
      <CategoryProvider>
        <div>
          <Header />
          <Deals />
          
          <Routes>
            {" "}
            {/* Use Routes to wrap Route components */}
            <Route path="/wishlist" element={<Wishlist />} />
          </Routes>
          <Footer />
        </div>
      </CategoryProvider>
    </BrowserRouter>
  );
}

export default App;
