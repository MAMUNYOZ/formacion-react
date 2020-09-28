import React from "react";

import { useSelector } from "react-redux";

export const ShoppingScreen = () => {
  const { products } = useSelector((state) => state.shopping);

  return (
    <div className="container pb-4">
      <h2 className="text-center">Carrito de la compra</h2>
      <h3 className="pt-3">Estos son los productos que has comprado</h3>
      <ul className="list-group">
        {products.map((product) => (
          <li className="list-group-item align-items-center">
            <div className="row">
              <div className="col-md-2">
                <img
                  src={`./assets/imgs/products/product-${product.id}.jpg`}
                  className="w-50"
                  alt={product.name}
                />
              </div>
              <div class="col-md-5">{product.name}</div>

              <div class="col-md-5">
                <span class="badge badge-primary badge-pill">
                  {product.total}
                </span>
              </div>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};
