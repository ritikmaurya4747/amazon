const cartData = {
  cartItems: JSON.parse(localStorage.getItem('cartItems')) || [], 
  
};

const cartReducer = (state = cartData, action) => {
  switch (action.type) {
    case "ADD_TO_CART":
      const updatedCartItems = [...state.cartItems, {...action.payload, quantity: 1}];
      localStorage.setItem('cartItems', JSON.stringify(updatedCartItems)); // Save to local storage
      return {
        ...state,
        cartItems: updatedCartItems,
      };
    case "REMOVE_FROM_CART":
      const filteredCartItems = state.cartItems.filter(
        (item) => item.id !== action.payload.id
      );
      localStorage.setItem('cartItems', JSON.stringify(filteredCartItems)); // Save to local storage
      return {
        ...state,
        cartItems: filteredCartItems,
      };
    case "INCREMENT_ITEM_COUNT":
      const incrementedCartItems = state.cartItems.map((item) =>
        item.id === action.payload.id
          ? { ...item, quantity: item.quantity + 1 }
          : item
      );
      localStorage.setItem('cartItems', JSON.stringify(incrementedCartItems)); // Save to local storage
      return {
        ...state,
        cartItems: incrementedCartItems,
      };
    case "DECREMENT_ITEM_COUNT":
      const decrementedCartItems = state.cartItems.map((item) =>
        item.id === action.payload.id
          ? { ...item, quantity: Math.max(item.quantity - 1, 0) } // Ensure quantity doesn't go below 0
          : item
      );
      localStorage.setItem('cartItems', JSON.stringify(decrementedCartItems)); // Save to local storage
      return {
        ...state,
        cartItems: decrementedCartItems,
      };
      
    default:
      return state;
  }
};

export default cartReducer;
