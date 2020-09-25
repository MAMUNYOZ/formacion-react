import React from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebookSquare,
  faYoutubeSquare,
  faTwitterSquare,
  faInstagramSquare,
} from "@fortawesome/free-brands-svg-icons";

import "./style.css";

export const FooterScreen = () => {
  return (
    <footer className="container-fluid bg-dark">
      <div className="container pt-5 pb-5">
        <div className="row">
          <div className="col-sm-12 col-md-3">
            <img src="./assets/imgs/logo.png" alt="logotipo" className="pl-3" />
          </div>
          <div className="col-sm-12 col-md-9 border-left">
            <h4 className="text-white pt-2">Tu tienda de vinos</h4>
          </div>
        </div>
        <div className="row">
          <div className="col-6">
            <nav className="nav mt-5">
              <Link className="nav-link active" to="/">
                Inicio
              </Link>
              <Link className="nav-link" to="ofertas">
                Ofertas
              </Link>
              <Link className="nav-link" to="productos">
                Productos
              </Link>
            </nav>
          </div>
          <div className="col-6 text-right">
            <FontAwesomeIcon
              icon={faFacebookSquare}
              style={{ fontSize: "2em" }}
              className="pr-2 text-white"
            />
            <FontAwesomeIcon
              icon={faYoutubeSquare}
              style={{ fontSize: "2em" }}
              className="pr-2 text-white"
            />
            <FontAwesomeIcon
              icon={faTwitterSquare}
              style={{ fontSize: "2em" }}
              className="pr-2 text-white"
            />
            <FontAwesomeIcon
              icon={faInstagramSquare}
              style={{ fontSize: "2em" }}
              className="pr-2 text-white"
            />
          </div>
        </div>
      </div>
    </footer>
  );
};
