import React from 'react';
import { Provider } from 'react-redux';
import store from './Redux/Store';
import Home from './Home/Home';
import Footer from './Home/Footer';
import { CategoryProvider } from './Context/Context';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Wishlist from './Pages/Wishlist';
import Cart from './Pages/Cart';
import Order from './Pages/Order';
import Account from './Pages/Account';
import Product from './Pages/Product';

function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <CategoryProvider>
          <div>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/wishlist" element={<Wishlist />} />
              <Route path="/cart" element={<Cart />} />
              <Route path="/order" element={<Order />} />
              <Route path="/account" element={<Account />} />
              <Route path="product/:id" element={<Product/>}/>
            </Routes>
            <Footer />
          </div>
        </CategoryProvider>
      </BrowserRouter>
    </Provider>
  );
}

export default App;
