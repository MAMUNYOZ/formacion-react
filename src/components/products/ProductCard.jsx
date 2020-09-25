import React from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart, faShoppingBasket } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import './style.css';

// para quitar las posibles etiquetas html que hay en el contenido del json
const regex = /(<([^>]+)>)/gi;

export const ProductCard = ({
  id,
  name,
  description,
  subdescription,
  price,
}) => {
  return (
    <div className="card ms-3" style={{ maxWidth: 540 }}>
      <div className="row no-gutters">
        <div className="col-md-4">
          <img
            src={`./assets/imgs/products/product-${id}.jpg`}
            className="card-img"
            alt={name}
          />
        </div>
        <div className="col-md-8 text-left">
          <div className="card-body">
            <h5 className="card-title">
              <Link to={`./producto/${ id }`} className="dark-link">  {name} </Link>
            </h5>
            <p className="card-text">
              <small className="text-muted"> { subdescription } </small>
            </p>
            <p className="card-text">
              {description.replace(regex, "").substr(0, 80)}...
            </p>
          </div>
        </div>
      </div>
      <div className="card-footer">
        <div className="row">
          <div className="col-md-4">
            <h5 className="text-left"> {price} €</h5>
          </div>
          <div className="col-md-8 text-right">
            <button type="button" className="btn btn-primary mr-3">
              <FontAwesomeIcon icon={faShoppingBasket} />
              <span className="badge badge-light ml-2">0</span>
            </button>
            <FontAwesomeIcon icon={faHeart} />
          </div>
        </div>
      </div>
    </div>
  );
};
