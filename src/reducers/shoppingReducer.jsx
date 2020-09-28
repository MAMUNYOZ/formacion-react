import { types } from "../types/types";

const initialState = {
  products: [],
  activeProduct: null,
};

export const shoppingReducer = (state = initialState, action) => {
  switch (action.type) {
    
    case types.purchaseAddNew:
      return {
        ...state,
        products: [...state.products, action.payload],
      };
    case types.purchaseUpdateTotal:
      return {
        ...state,
        products: action.payload,
      };

    default:
      return state;
  }
};
