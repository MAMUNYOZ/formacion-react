import { types } from "../types/types";

const initialState = {
  productsFavorites: JSON.parse(localStorage.getItem("favorites")) || [],
};

export const favoritesReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.favoritesAddNew:
      return {
        ...state,
        productsFavorites: [...state.productsFavorites, action.payload],
      };

    case types.favoritesDelete:
      return {
        ...state,
        productsFavorites: action.payload,
      };

    default:
      return state;
  }
};
