import { types } from '../types/types';

export const setError = ( err, kindError ) => ({
    type: types.uiSetError,
    payload: err,
    kind: kindError  // Para determinar el tipo de error ( 0 si es de registro, 1 si es de login, 2 si es de actualización)
});

export const removeError = ( err ) => ({
    type: types.uiRemoveError,
});