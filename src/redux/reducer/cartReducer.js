import ActionTypes from "./actionTypes";

const initialState = {
  isLoading: false,
  error: null,
  cart: [],
};
export const cartReducer = (state = initialState, action) => {
  switch (action.type) {
    
    case ActionTypes.CART_LOADING:
      return { ...state, isLoading: true };
    
      case ActionTypes.CART_ERROR:
      return { ...state, isLoading: false, error: action.payload };
    
      case ActionTypes.CART_SUCCESS:
      return { ...state, isLoading: false, error: null, cart: action.payload };

    
      case ActionTypes.ADD_ITEM:
      const updatedCart = state.cart.concat(action.payload);
      return { ...state, cart: updatedCart };
    
      case ActionTypes.UPDATE_ITEM:
      const updatedKart = state.cart.map((i) =>
        i.id === action.payload.id ? action.payload : i
      );
      return { ...state, cart: updatedKart };
      case ActionTypes.DELETE_ITEM:
        const filtred=state.cart.filter((i)=>i.id!==action.payload)
        return{...state,cart:filtred}

    default:
      return state;
  }
};
