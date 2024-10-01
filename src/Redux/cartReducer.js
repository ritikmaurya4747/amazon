const cartData = {
  cartItems: [],
};

const cartReducer = (state = cartData, action) => {
  switch (action.type) {
    case "ADD_TO_CART":
      return {
        ...state,
        cartItems: [...state.cartItems, {...action.payload, quantity: 1} ],
      };
    case "REMOVE_FROM_CART":
      return {
        ...state,
        cartItems: state.cartItems.filter(
          (item) => item.id !== action.payload.id
        ),
      };
    case "INCREMENT_ITEM_COUNT":
      return {
        ...state,
        cartItems: state.cartItems.map((item) =>
          item.id === action.payload.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        ),
      };
      case "DECREMENT_ITEM_COUNT":
      return {
        ...state,
        cartItems: state.cartItems.map((item) =>
          item.id === action.payload.id
            ? { ...item, quantity: Math.max(item.quantity - 1, 0) } // Ensure quantity doesn't go below 0
            : item
        ),
      };
    default:
      return state;
  }
};

export default cartReducer;
