import { types } from "../types/types";

const initialState = {
  productsShopping: JSON.parse(localStorage.getItem('purchase')) || [],
};

export const shoppingReducer = (state = initialState, action) => {
  switch (action.type) {
    
    case types.purchaseAddNew:
      return {
        ...state,
        productsShopping: [...state.productsShopping, action.payload],
      };
    case types.purchaseUpdateTotal:
      return {
        ...state,
        productsShopping: action.payload,
      };

    default:
      return state;
  }
};
