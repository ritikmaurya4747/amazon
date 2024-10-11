const initialState = {
    wishlist: JSON.parse(localStorage.getItem('wishlist')) || [],
  };
  
  const wishlistReducer = (state = initialState, action) => {
    switch (action.type) {
      case 'TOGGLE_WISHLIST_ITEM':
        const isItemInWishlist = state.wishlist.some(item => item.id === action.payload.id);

        localStorage.setItem('wishlist',JSON.stringify(isItemInWishlist?state.wishlist.filter(item => item.id !== action.payload.id): [...state.wishlist, action.payload]));
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
  