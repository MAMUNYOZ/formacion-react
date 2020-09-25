import { products } from '../../data/products';

export const getProducstByOffer = ( offer, amount ) => {
     
    if (!offer) {
        return products.slice(0, amount);
    } else {
        return products.filter( product => product.offer === offer ).slice(0, amount);
    }
} 