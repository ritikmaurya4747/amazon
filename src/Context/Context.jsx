import React, { createContext, useEffect, useState } from "react";

// Create the context
export const CategoryContext = createContext();

// Create the provider component
export const CategoryProvider = ({ children }) => {
  const [category, setCategory] = useState("all"); // Default category
  const [products, setProducts] = useState([]); // Fetched products data from the server
  const [loading, setLoading] = useState(true); // Loading state
  const [error, setError] = useState(null); // Error state

  // Function to change category
  const changeCategory = (newCategory) => {
    setCategory(newCategory);
  };

  // Fetching the products data from the server
  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await fetch("https://fakestoreapi.com/products");
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        const productsData = await response.json();
        setProducts(productsData);
      } catch (error) {
        setError(error.message); // Set error message
      } finally {
        setLoading(false); // Set loading to false after fetch attempt
      }
    };

    fetchProducts(); // Call the function directly here
  }, []);

  // Return the context provider with values
  return (
    <CategoryContext.Provider value={{ category, changeCategory, products, loading, error }}>
      {children}
    </CategoryContext.Provider>
  );
};
