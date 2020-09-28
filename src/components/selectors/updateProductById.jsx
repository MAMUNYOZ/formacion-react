
export const updateProductById = ( productsList, id ) => {

    productsList.map(function(dato){
        if(dato.id === id){
          dato.total = dato.total + 1;
        }
        
        return dato;
      });
     
    return productsList;
} 