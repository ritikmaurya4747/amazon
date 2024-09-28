import React from "react";
import Header from "./Header/Header";
import Footer from "./Footer/Footer";
import Home from "./Home";
import Deals from "./Deals";
import { CategoryProvider } from "./Context/Context";

function App() {
  return (
    <CategoryProvider>
      <div>
        <Header />
        <Home />
        <Deals />
        <Footer />
      </div>
    </CategoryProvider>
  );
}

export default App;
