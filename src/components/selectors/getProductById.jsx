import { products } from '../../data/products';

export const getProducstById = ( id ) => {
     
    return products.find( product => product.id === id );
} 