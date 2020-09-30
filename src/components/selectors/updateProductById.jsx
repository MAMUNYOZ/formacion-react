
export const updateProductById = ( productsList, id, value ) => {

    productsList.map(function(product){
        if (product.id === id){
          product.total = product.total + value;
          if (product.total === 0) {
            productsList = productsList.filter( e => e.id !== id ); 
          } else return product;
        } else return product;
      });
      
      localStorage.setItem("purchase", JSON.stringify(productsList));

    return productsList;
} 