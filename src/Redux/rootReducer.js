import { combineReducers } from 'redux';
import wishlistReducer from './wishlistReducer';

const rootReducer = combineReducers({
  wishlist: wishlistReducer,
});

export default rootReducer;
