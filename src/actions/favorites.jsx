import { types } from "../types/types";

export const favoritesAddNew = ( products ) => ({
    type: types.favoritesAddNew,
    payload: JSON.parse(products)
});

export const favoritesDelete = ( products ) => ({
    type: types.favoritesDelete,
    payload: products
});

