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

  const LoadFromShoppingStock = (product) => {
    // Para actualizar el stock si ya lo tenemos en la cesta de la compra al cargar los productos
    const productFind = getProducstById(productsShopping, product.id);
    if (productFind) {
      productFind.stock = product.stock - productFind.total;
      product = productFind;
    }

    return product;
  };

  // Comprobamos si el producto lo tenenos en el carrito para actualizar el stock
  product = LoadFromShoppingStock(product);

  const { id, name, subdescription, description, stock, price } = product;

  const onSelectProduct = (e) => {
    const product = JSON.parse(e.currentTarget.dataset.product);
    const { id } = product;
    const type = e.currentTarget.dataset.type;

    if (type === "purchase") {
      // añadir al carrito de la compra
      const productFind = getProducstById(productsShopping, id);
      if (!productFind) {
        // actualizamos el stock
        product.stock = product.stock - 1;

        dispatch(purchaseAddNew(JSON.stringify(product)));
        productsShopping.push(product);
        localStorage.setItem("purchase", JSON.stringify(productsShopping));
      } else {
        const productUpdate = updateProductById(productsShopping, id, 1);
        dispatch(purchaseUpdateTotal(JSON.stringify(productUpdate)));
      }
    } else {
      // añadir a favoritos
      const productFind = getProducstById(productsFavorites, id);
      if (!productFind) {
        dispatch(favoritesAddNew(JSON.stringify(product)));
        productsFavorites.push(product);
        localStorage.setItem("favorites", JSON.stringify(productsFavorites));
      }
    }
  };

  const onDeleteProduct = (e) => {
    const productId = e.currentTarget.dataset.key;
    let favoriteStorage = JSON.parse(localStorage.getItem("favorites"));
    favoriteStorage = favoriteStorage.filter(
      (product) => product.id !== productId
    );

    localStorage.setItem("favorites", JSON.stringify(favoriteStorage));
    dispatch(favoritesDelete(favoriteStorage));
  };

  return (
    <div className="card ms-3">
      {stock <= 0 ? (
        <div className="card-header alert-danger text-center">
          <strong>Producto no disponible</strong>
        </div>
      ) : (
        <div className="card-header alert-info">
          <strong>Disponible {stock} unidades</strong>
        </div>
      )}

      <div className="row no-gutters">
        <div className="col-md-4 text-center">
          <img
            src={`./assets/imgs/products/product-${id}.jpg`}
            className="card-img"
            alt={name}
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
            {stock > 0 ? (
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
            ) : (
              <span className="badge badge-danger mr-2">No disponible</span>
            )}
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
