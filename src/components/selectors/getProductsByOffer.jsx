
export const getProducstByOffer = ( productsList, offer, amount ) => {
     
    if (!offer) {
        return productsList.slice(0, amount);
    } else {
        return productsList.filter( product => product.offer === offer ).slice(0, amount);
    }
} 