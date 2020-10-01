import React from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebookSquare,
  faYoutubeSquare,
  faTwitterSquare,
  faInstagramSquare,
} from "@fortawesome/free-brands-svg-icons";
import {
  faHome,
  faPhone,
  faEnvelope,
  faMobileAlt
} from "@fortawesome/free-solid-svg-icons";

import "./style.css";

export const FooterScreen = () => {
  return (
    <footer className="container-fluid bg-dark">
      <div className="container pt-5 pb-5">
        <div className="row">
          <div className="col-md-4 col-lg-3">
            <img src="./assets/imgs/logo.png" alt="logotipo" className="pl-3" />
          </div>
          <div className="col-md-8 col-lg-9 border-left">
            <h4 className="text-white pt-2">Tu tienda de vinos</h4>
          </div>
        </div>
        <div className="row">
          <div className="col-md-6">
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
          <div className="col-md-6 text-right">
            <FontAwesomeIcon
              icon={faFacebookSquare}
              className="pr-2 text-white icons"
            />
            <FontAwesomeIcon
              icon={faYoutubeSquare}
              className="pr-2 text-white icons"
            />
            <FontAwesomeIcon
              icon={faTwitterSquare}
              className="pr-2 text-white icons"
            />
            <FontAwesomeIcon
              icon={faInstagramSquare}
              className="pr-2 text-white icons"
            />
          </div>
        </div>
      </div>
      <div class="container">
        <div class="row">
          <div class="col-md-9">
<p className="text-white"> <FontAwesomeIcon icon={faHome} className="pr-1 text-white"></FontAwesomeIcon>C/ Hermosilla, 21 28003 Madrid | <FontAwesomeIcon icon={faEnvelope} className="pr-1 text-white"></FontAwesomeIcon>tienda@wine.com | <FontAwesomeIcon icon={faPhone} className="pr-1 text-white"></FontAwesomeIcon>91 222 11 00 | <FontAwesomeIcon icon={faMobileAlt} className="pr-1 text-white"></FontAwesomeIcon>696 100 200</p>
          </div>
          <div class="col-md-3">
<p className="text-white"> Aviso Legal | Cookies </p>
          </div>
        </div>
      </div>
    </footer>
  );
};
