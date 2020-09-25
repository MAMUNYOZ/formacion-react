import React from "react";
import { getProducstByOffer } from "../selectors/getProductsByOffer";
import { ProductCard } from "./ProductCard";

export const ProductList = ({ offer, amount, title }) => {
  const products = getProducstByOffer(offer, amount, title);

  return (
    <div className="container">
      <h2>{title}</h2>
      <div className="card-columns mt-5 mb-5">
        {products.map((product) => (
          <ProductCard key={product.id} {...product} />
        ))}
      </div>
    </div>
  );
};
