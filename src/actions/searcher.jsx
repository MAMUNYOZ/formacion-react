import { types } from "../types/types";

export const startSearcher = ( ) => ({
    type: types.searcherStart
});

export const searcherSuccess = ( product ) => ({
    type: types.searcherSuccess,
    payload: product
});

export const searcherFailure = ( error ) => ({
    type: types.searcherFailure,
    payload: error
});