import { types } from "../types/types";

const initialState = {
  loading: false,
  msgError: null,
  classError: null
};

export const uiReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.uiSetError:
      return {
        ...state,
        msgError: action.payload,
        loading:true,
        classError: action.kind
      }
    case types.uiRemoveError:
      return {
        ...state,
        loading:false,
        msgError: null
      }

    default:
      return state;
  }
};
