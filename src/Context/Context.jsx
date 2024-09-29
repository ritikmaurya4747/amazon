import React, { createContext, useEffect, useState } from "react";

// For data filterning purposes

// Create the context
export const CategoryContext = createContext();

// Create the provider component
export const CategoryProvider = ({ children }) => {
  const [category, setCategory] = useState("all"); // Default category
  const [products, setProducts] = useState([]); // fetched products data from the server

  const changeCategory = (newCategory) => {
    setCategory(newCategory);
  };

 // Fetching the products data from the server
 useEffect(() => {
  const fetchProducts = async () => {
    try {
      const response = await fetch("https://fakestoreapi.com/products");
      const productsData = await response.json();
      setProducts(productsData);
      console.log(productsData);
      
    } catch (error) {
      console.error("Error fetching products:", error);
    }
  };

  fetchProducts(); // Call the function directly here
}, []);

  return (
    <CategoryContext.Provider value={{ category, changeCategory , products}}>
      {children}
    </CategoryContext.Provider>
  );
};
