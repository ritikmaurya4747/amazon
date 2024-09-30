const initialState = {
    wishlist: [],
  };
  
  const wishlistReducer = (state = initialState, action) => {
    switch (action.type) {
      case 'TOGGLE_WISHLIST_ITEM':
        const isItemInWishlist = state.wishlist.some(item => item.id === action.payload.id);
        if (isItemInWishlist) {
          return {
            ...state,
            wishlist: state.wishlist.filter(item => item.id !== action.payload.id),
          };
        }
        return {
          ...state,
          wishlist: [...state.wishlist, action.payload],
        };
  
      default:
        return state;
    }
  };
  
  export default wishlistReducer;
  