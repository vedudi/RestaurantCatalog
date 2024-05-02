import { applyMiddleware, combineReducers, createStore } from "redux";
import productReducer from "./reducer/productReducer";
import restaurantReducer from "./reducer/restaurantReducer";
import { thunk } from "redux-thunk";
import { cartReducer } from "./reducer/cartReducer";

const rootReducer = combineReducers({
  product: productReducer,
  restaurant: restaurantReducer,
  cart: cartReducer,
});
export default createStore(rootReducer, applyMiddleware(thunk));
