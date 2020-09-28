import React from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart, faShoppingBasket } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";

import { useDispatch, useSelector } from "react-redux";
import { purchaseAddNew, purchaseUpdateTotal } from "../../actions/shopping";
import { getProducstById } from "../selectors/getProductById";
import { updateProductById } from "../selectors/updateProductById";
import "./style.css";

// para quitar las posibles etiquetas html que hay en el contenido del json
const regex = /(<([^>]+)>)/gi;

export const ProductCard = ({ product }) => {
  const dispatch = useDispatch();
  const { productsShopping } = useSelector((state) => state.shopping);

  const onSelectProduct = (e) => {
    const product = e.currentTarget.dataset.product;

    const productFind = getProducstById(productsShopping, JSON.parse(product).id);

    if (!productFind) {
      dispatch(purchaseAddNew(product));
    } else {
      const productUpdate = updateProductById(productsShopping, JSON.parse(product).id, 1);
      dispatch(purchaseUpdateTotal(JSON.stringify(productUpdate)));
    }
  };

  return (
    <div className="card ms-3" style={{ maxWidth: 540 }}>
      <div className="row no-gutters">
        <div className="col-md-4">
          <img
            src={`./assets/imgs/products/product-${product.id}.jpg`}
            className="card-img"
            alt={product.name}
          />
        </div>
        <div className="col-md-8 text-left">
          <div className="card-body">
            <h5 className="card-title">
              <Link to={`./producto/${product.id}`} className="dark-link">
                {" "}
                {product.name}{" "}
              </Link>
            </h5>
            <p className="card-text">
              <small className="text-muted"> {product.subdescription} </small>
            </p>
            <p className="card-text">
              {product.description.replace(regex, "").substr(0, 80)}...
            </p>
          </div>
        </div>
      </div>
      <div className="card-footer">
        <div className="row">
          <div className="col-md-5">
            <h5 className="text-left"> {product.price} €</h5>
          </div>
          <div className="col-md-7 text-right">
            <button
              type="button"
              className="btn btn-primary mr-3"
              onClick={onSelectProduct}
              data-product={JSON.stringify(product)}
            >
              <FontAwesomeIcon icon={faShoppingBasket} /> Añadir
            </button>
            <FontAwesomeIcon icon={faHeart} />
          </div>
        </div>
      </div>
    </div>
  );
};
