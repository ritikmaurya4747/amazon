//cateogry
import React, { createContext, useState } from 'react';

// Create the context
export const CategoryContext = createContext();

// Create the provider component
export const CategoryProvider = ({ children }) => {
    const [category, setCategory] = useState('all'); // Default category

    const changeCategory = (newCategory) => {
        setCategory(newCategory);
    };

    return (
        <CategoryContext.Provider value={{ category, changeCategory }}>
            {children}
        </CategoryContext.Provider>
    );
};
