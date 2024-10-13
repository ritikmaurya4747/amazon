import { combineReducers } from 'redux';
import wishlistReducer from './wishlistReducer';
import cartReducer from './cartReducer'; 
import OrderAdded from './orderReducer';

const rootReducer = combineReducers({
  wishlist: wishlistReducer,
  cart: cartReducer, 
  order: OrderAdded
});

export default rootReducer;
