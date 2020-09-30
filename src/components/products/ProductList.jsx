import React, { useMemo } from "react";
import { getProducstByOffer } from "../selectors/getProductsByOffer";
import { ProductCard } from "./ProductCard";

import { useSelector } from "react-redux";
import './style.css';

export const ProductList = ({ offer, amount, title }) => {

  const { products } = useSelector((state) => state.products);

  const productsList = useMemo(() => getProducstByOffer(products, offer, amount, title), [ products, offer, amount, title ]);

  return (
    <div className="container pt-4">
      <h2>{title}</h2>
      <div className="card-columns mt-5 mb-5 animate__animated animate__fadeIn">
        {productsList.map((product) => (
          <ProductCard key={product.id} product={product} page="purchase"/>
        ))}
      </div>
    </div>
  );
};
