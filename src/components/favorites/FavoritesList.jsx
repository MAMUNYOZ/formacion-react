import React from "react";
import { ProductCard } from "../products/ProductCard";

import { useSelector } from "react-redux";
import "../products/style.css";

export const FavoritesList = ({ title }) => {
  const { productsFavorites } = useSelector((state) => state.favorites);

  return (
    <div className="container pt-5 pb-5">
      <h2>{title}</h2>
      {productsFavorites.length ? (
        <div className="card-columns mt-5 mb-5 animate__animated animate__fadeIn">
          {productsFavorites.map((product) => (
            <ProductCard key={product.id} product={product} page="favorites" />
          ))}
        </div>
      ) : (
        <div className="alert alert-info text-center mt-4" role="alert">
          <h4>No hay ningún producto en su lista de favoritos</h4>
        </div>
      )}
    </div>
  );
};
