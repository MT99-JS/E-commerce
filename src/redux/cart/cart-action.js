import CartActionType from "./card-actiontype";

export const toggleCart = () => ({
  type: CartActionType.TOGGLE_CART,
});
export const addItem = (item) => ({
  type: CartActionType.ADD_CART,
  payload: item,
});
