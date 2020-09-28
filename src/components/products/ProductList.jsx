import React from "react";
import { getProducstByOffer } from "../selectors/getProductsByOffer";
import { ProductCard } from "./ProductCard";

import { useSelector } from "react-redux";

export const ProductList = ({ offer, amount, title }) => {

  const { products } = useSelector((state) => state.products);

   const productsList = getProducstByOffer(products, offer, amount, title);

  return (
    <div className="container">
      <h2>{title}</h2>
      <div className="card-columns mt-5 mb-5">
        {productsList.map((product) => (
          <ProductCard key={product.id} product={product}/>
        ))}
      </div>
    </div>
  );
};
