import { types } from '../types/types';


const initialState = {
    products: [],
};

export const productsReducer = ( state = initialState, action ) => {

    switch ( action.type ){
        case types.productsLoaded:
            return {
                ...state,
                products: [ ...action.payload ]
            }
        default:
            return state;
    }
}