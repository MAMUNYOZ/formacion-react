import React from "react";
import { SearchScreen } from "../search/SearchScreen";
import { ProductList } from "../products/ProductList";
import "./style.css";

export const EcommerceScreen = () => {

  return (
    <>
        <SearchScreen/>
        <div className="container-fluid mt-5 pt-3 pb-5 fondoOfertas text-center" >
          <ProductList offer = 'true' amount = '6' title='Ofertas del día' />
          <a className="btn btn-danger btn-lg mt-3 " href="/ofertas" role="button">Ver todas </a>      
        </div>
        <div className="container-fluid pt-3 pb-5 fondoProductos text-center" >
          <ProductList offer = 'false' amount = '12' title='Productos destacados' />
          <a className="btn btn-danger btn-lg mt-3" href="/productos" role="button">Ver todos </a>      
        </div>       
        
    </>

  );
};
