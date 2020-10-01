import { types } from "../types/types";

export const purchaseAddNew = ( product ) => ({
    type: types.purchaseAddNew,
    payload: JSON.parse(product)
});

export const purchaseUpdateTotal = ( product ) => ({
    type: types.purchaseUpdateTotal,
    payload: JSON.parse(product)
});
export const purchaseClear = ( ) => ({
    type: types.purchaseClear,
    payload: []
});