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
export const orderAddNew = ( shopping ) => ({
    type: types.orderAddNew,
    payload: JSON.parse( shopping )
});
export const orderFinish = ( ) => ({
    type: types.orderAddNew,
    payload: []
});