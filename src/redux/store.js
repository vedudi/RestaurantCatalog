import { combineReducers, createStore } from "redux";
import productReducer from "./reducer/productReducer";
import restaurantReducer from "./reducer/restaurantReducer";

const rootReducer = combineReducers({
  product:productReducer,
  restaurant:restaurantReducer,
});
export default createStore(rootReducer);

