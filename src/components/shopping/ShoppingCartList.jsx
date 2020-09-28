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
    <div className="container pb-4">
      <h2 className="text-center">{title}</h2>
      <h3 className="pt-5">Estos son los productos que has comprado:</h3>
      <ul className="list-group pt-4">
        {productsShopping.map((product) => (
          <ShoppingCartProduct key={product.id} product={product} />
        ))}
      </ul>
      <div className="row pt-4">
        <div className="col-9 text-right">
          <h4>Total:</h4>
        </div>
        <div className="col-3 text-right text-danger">
          <h4>{total.toFixed(2)} €</h4>
        </div>
      </div>
    </div>
  );
};
