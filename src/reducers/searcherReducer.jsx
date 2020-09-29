import { types } from "../types/types";


const initialState = {
    checking: false,
    productsList:[]
}

export const searcherReducer = ( state = initialState, action ) => {

    switch ( action.type ) {
        case types.startSearcher:
            return {
                ...state,
                ...action.payload,
                checking: true
            }
        case types.searcherSuccess:
                return { 
                    ...state,
                    checking: true,
                    productsList: action.payload,
                }
        default: 
            return state;
    }

}