
export const getProducstById = ( productsList, id ) => {
     
    return productsList.find( product => product.id === id );
} 