import React from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHeart,
  faShoppingBasket,
  faTrashAlt,
} from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";

import { useDispatch, useSelector } from "react-redux";
import { purchaseAddNew, purchaseUpdateTotal } from "../../actions/shopping";
import { favoritesAddNew, favoritesDelete } from "../../actions/favorites";
import { getProducstById } from "../selectors/getProductById";
import { updateProductById } from "../selectors/updateProductById";
import "./style.css";

// para quitar las posibles etiquetas html que hay en el contenido del json
const regex = /(<([^>]+)>)/gi;

export const ProductCard = ({ product, page }) => {
  const dispatch = useDispatch();
  const { productsShopping } = useSelector((state) => state.shopping);
  const { productsFavorites } = useSelector((state) => state.favorites);

  const { id, name, subdescription, description, price } = product;

  const onSelectProduct = (e) => {
    const product = e.currentTarget.dataset.product;
    const type = e.currentTarget.dataset.type;

    if (type === "purchase") {
      const productFind = getProducstById(
        productsShopping,
        JSON.parse(product).id
      );
      if (!productFind) {
        dispatch(purchaseAddNew(product));
        productsShopping.push(JSON.parse(product));
        localStorage.setItem("purchase", JSON.stringify(productsShopping));
      } else {
        const productUpdate = updateProductById(
          productsShopping,
          JSON.parse(product).id,
          1
        );
        dispatch(purchaseUpdateTotal(JSON.stringify(productUpdate)));
      }
    } else {
      const productFind = getProducstById(
        productsFavorites,
        JSON.parse(product).id
      );
      if (!productFind) {
        dispatch(favoritesAddNew(product));
        productsFavorites.push(JSON.parse(product));
        localStorage.setItem("favorites", JSON.stringify(productsFavorites));
      }
    }
  };

  const onDeleteProduct = (e) => {
    const productId = e.currentTarget.dataset.key;
    let favoriteStorage = JSON.parse(localStorage.getItem('favorites'));
    favoriteStorage = favoriteStorage.filter( product => product.id !== productId );

    console.log(favoriteStorage);
    
    localStorage.setItem('favorites', JSON.stringify(favoriteStorage));
    dispatch(favoritesDelete(favoriteStorage));

  };

  return (
    <div className="card ms-3">
      <div className="row no-gutters">
        <div className="col-md-4">
          <img
            src={`./assets/imgs/products/product-${id}.jpg`}
            className="card-img"
            alt={product.name}
          />
        </div>
        <div className="col-md-8 text-left">
          <div className="card-body">
            <h5 className="card-title">
              <Link to={`./producto/${id}`} className="dark-link">
                {" "}
                {name}{" "}
              </Link>
            </h5>
            <p className="card-text">
              <small className="text-muted"> {subdescription} </small>
            </p>
            <p className="card-text">
              {description.replace(regex, "").substr(0, 80)}...
            </p>
          </div>
        </div>
      </div>
      <div className="card-footer">
        <div className="row">
          <div className="col-md-5 col-sm-4">
            <h5 className="text-left"> {price} €</h5>
          </div>
          <div className="col-md-7 col-sm-8 text-right">
            <button
              type="button"
              className="btn btn-primary mr-3"
              onClick={onSelectProduct}
              data-product={JSON.stringify(product)}
              data-type="purchase"
            >
              <FontAwesomeIcon icon={faShoppingBasket} className="font-1em" />{" "}
              Añadir
            </button>
            {page === "favorites" ? (
              <FontAwesomeIcon
                icon={faTrashAlt}
                className="font-1em"
                onClick={onDeleteProduct}
                data-key={id}
              />
            ) : (
              <FontAwesomeIcon
                icon={faHeart}
                className="font-1em"
                onClick={onSelectProduct}
                data-product={JSON.stringify(product)}
                data-type="favorites"
              />
            )}
          </div>
        </div>
      </div>
    </div>
  );
};
