import { fetchSinToken } from '../helpers/fetch';
import { types } from "../types/types";


export const orderFinish = ( user, total, shopping, estado ) => {
    return async (dispatch) => {
      
        const resp = await fetchSinToken(
          "orders",
          { user, total, shopping, estado },
          "POST"
        );
        const body = await resp.json();      
        dispatch(orderAddNew( body ));
        if (body.user){
           dispatch(orderClear());
           localStorage.removeItem('purchase');
        }
        
    };
  };


export const orderAddNew = ( order ) => ({
    type: types.orderAddNew,
    payload: { ...order }
});

export const historicalStartLoading = () => {
    const uid = localStorage.getItem('uid');
    return async ( dispatch ) =>{
        try {

            const resp = await fetchSinToken( 'orders', { uid }, 'GET' );
            const body = await resp.json();
            const historical = body;

           dispatch ( historicalLoaded ( historical ))
            
        } catch (error) {
            console.log(error);
            
        }
    }
}

export const historicalLoaded = ( orders ) => ({
    type: types.historicalLoaded,
    payload: orders
});

export const orderClear = ( ) => ({
    type: types.orderClear,
    payload: []
});