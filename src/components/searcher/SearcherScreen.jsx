import React, { useMemo } from "react";
import queryString from 'query-string';
import { useSelector } from "react-redux";
import { useLocation } from "react-router-dom";

import { useForm } from "../../hooks/useForm";

import { ProductCard } from "../products/ProductCard";
import { getProducstByName } from "../selectors/getProductsByName";

export const SearcherScreen = ({ history }) => {

  const location = useLocation();
  const { q = '' } = queryString.parse( location.search );
  const [formValues, handleInputChange] = useForm({
    searchText: q
  });
  const { searchText } = formValues;

  const { products } = useSelector((state) => state.products);
  const productsFiltered = useMemo(() => getProducstByName( products, q ), [products, q])

  const handleSearch = (e) => {
    e.preventDefault();
    history.push(`?q=${ searchText }`);
  };

  return (
    <div className="contaniner-fluid animate__animated animate__fadeIn">
      <div className="container mt-3 mb-5 border-bottom">
        <form onSubmit={handleSearch} className="pb-5">
          <div className="row">
            <div className="col-sm-12 col-md-3 pt-3">
              <h3>¿Necesitas ayuda?</h3>
            </div>
            <div className="col-sm-12 col-md-6 pt-3">
              <input
                name="searchText"
                type="text"
                value={searchText}
                onChange={handleInputChange}
                placeholder="Encuantra lo que buscas"
                className="form-control form-control-lg"
              />
            </div>
            <div className="col-sm-12 col-md-3 pt-3">
              <button tupe="submit" className="btn btn-danger btn-lg">
                Encontrar
              </button>
            </div>
          </div>
        </form>
      </div>
      <div className="container mb-5">
        <div className="row mt-4">
          <div className="col-12">
            <h3>Resultados:</h3>
            <div className="card-columns mt-5 mb-5">
              {productsFiltered.map((product) => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
