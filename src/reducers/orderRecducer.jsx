import { types } from "../types/types";

const initialState = {
  recived: false,
  order: [],
  historical: [],
};

export const orderReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.orderAddNew:
      return {
        ...state,
        order: action.payload,
        historical: [...state.historical, action.payload],
        recived: false
      };
    case types.historicalLoaded:
      return {
        ...state,
        historical: [ ...action.payload ],
        recived: false
      };
    case types.orderClear:
      return {
        ...state,
        order: action.payload,
        recived: true
      };

    default:
      return state;
  }
};
