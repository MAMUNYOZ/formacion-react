import React from "react";
import { useSelector } from "react-redux";

import { ShoppingCartProduct } from "./ShoppingCartProduct";

export const ShoppingCartList = ({ title }) => {
  const { productsShopping } = useSelector((state) => state.shopping);

  let total = 0;
  productsShopping.map(function (product) {
    total =
      total +
      parseFloat(product.price.replace(",", ".")) * parseInt(product.total);
  });

  return (
    <div className="container pb-4 animate__animated animate__fadeIn">
      <h2 className="text-center">{title}</h2>
      {productsShopping.length ? (
        <>
          <h3 className="pt-5">Estos son los productos que has comprado:</h3>
          <ul className="list-group pt-4">
            {productsShopping.map((product) => (
              <ShoppingCartProduct key={product.id} product={product} />
            ))}
          </ul>
          <div className="row pt-4">
            <div className="col-8 text-right">
              <h4>Total:</h4>
            </div>
            <div className="col-4 text-right text-danger">
              <h4>{total.toFixed(2)} €</h4>
            </div>
          </div>
          <div className="row mt-5">
            <div className="col-12 text-right">
                  <button className="btn btn-danger btn-lg"> Terminar compra </button>
            </div>
          </div>
        </>
      ) : (
        <div className="alert alert-info text-center mt-5 mb-4" role="alert">
          <h4>No hay ningún producto en su cesta de la compra</h4>
        </div>
      )}
    </div>
  );
};
