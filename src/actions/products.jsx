import { fetchSinToken } from '../helpers/fetch';
import { types } from '../types/types';

export const productsStartLoading = () => {
    return async ( dispatch ) =>{
        try {

            const resp = await fetchSinToken('products');
            const body = await resp.json();
            const products = body;

           dispatch ( productsLoaded ( products))
            
        } catch (error) {
            console.log(error);
            
        }
    }
}

const productsLoaded = ( products ) => ({
    type:types.productsLoaded,
    payload: products
})