import CartActionType from "./card-actiontype";
import { addItemToCart } from "./cart.utilis";

const INITIAL_STATE = {
  hidden: true,
  cartItems: [],
};

const cartReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case CartActionType.TOGGLE_CART:
      return {
        ...state,
        hidden: !state.hidden,
      };
    case CartActionType.ADD_CART:
      return {
        ...state,
        cartItems: addItemToCart(state.cartItems, action.payload),
      };
    default:
      return state;
  }
};

export default cartReducer;
