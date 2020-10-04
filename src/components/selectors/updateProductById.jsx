
export const updateProductById = ( productsList, id, value ) => {

    productsList.map(function(product){
        if (product.id === id){
          if (value > 0) {
            if (product.stock > 0) {
              product.stock = product.stock - 1;
              product.total = product.total + value 
              } 
            } else {
              product.stock = product.stock + 1;
              product.total = product.total + value 
          }   
       

          if (product.total === 0) {
            productsList = productsList.filter( e => e.id !== id ); 
          } else return product;
        } else return product;
      });
      
      localStorage.setItem("purchase", JSON.stringify(productsList));

    return productsList;
} 