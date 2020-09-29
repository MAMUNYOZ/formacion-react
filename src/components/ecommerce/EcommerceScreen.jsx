import React from "react";
import { ProductList } from "../products/ProductList";

import { Link } from "react-router-dom";
import "./style.css";

export const EcommerceScreen = () => {

  return (
    <>
        <div className="container-fluid pt-3 pb-5 fondoOfertas text-center" >
          <ProductList offer = 'true' amount = '6' title='Ofertas del día' />
          <Link className="btn btn-danger btn-lg mt-3" to="/ofertas"> Ver todas </Link>  
        </div>
        <div className="container-fluid pt-5 pb-5 fondoProductos text-center" >
          <ProductList offer = 'false' amount = '12' title='Productos destacados' />
          <Link className="btn btn-danger btn-lg mt-3" to="/productos">Ver todos </Link>      
        </div>       
        
    </>

  );
};
