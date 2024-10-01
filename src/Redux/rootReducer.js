import { combineReducers } from 'redux';
import wishlistReducer from './wishlistReducer';
import cartReducer from './cartReducer'; 

const rootReducer = combineReducers({
  wishlist: wishlistReducer,
  cart: cartReducer, 
});

export default rootReducer;
