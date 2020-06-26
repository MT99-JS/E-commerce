import SHOPDATA from "./shop_data";

const INITIAL_STATE = {
  collection: SHOPDATA,
};

const collectionReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    default:
      return state;
  }
};

export default collectionReducer;
