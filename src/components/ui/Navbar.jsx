import React from "react";
import { Link, NavLink } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBars,
  faUserCircle,
  faShoppingBasket,
} from "@fortawesome/free-solid-svg-icons";

import "./style.css";

export const Navbar = () => {
  return (
    <>
      <div className="collapse" id="navbarMenu">
        <div className="bg-dark p-4">
          <h5 className="text-white h3">Menú de navegación</h5>
          <ul className="nav flex-column">
            <li className="nav-item">
              <NavLink
                className="nav-item nav-link"
                data-toggle="collapse"
                data-target="#navbarMenu"
                aria-controls="navbarMenu"
                exact
                to="/"
              >
                Inicio
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                className="nav-item nav-link"
                data-toggle="collapse"
                data-target="#navbarMenu"
                aria-controls="navbarMenu"
                exact
                to="/ofertas"
              >
                Ofertas
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                className="nav-item nav-link"
                data-toggle="collapse"
                data-target="#navbarMenu"
                aria-controls="navbarMenu"
                exact
                to="/productos"
              >
                Productos
              </NavLink>
            </li>
          </ul>
        </div>
      </div>
      <nav className="navbar navbar-expand-sm navbar-dark bg-dark sombra">
        <button
          type="button"
          data-toggle="collapse"
          data-target="#navbarMenu"
          aria-controls="navbarMenu"
          aria-expanded="false"
          aria-label="Toggle navigation"
          className="btn btn-outline-light"
        >
          <FontAwesomeIcon icon={faBars} className="icons" />
        </button>
        <Link className="navbar-brand" to="/">
          <img src="./assets/imgs/logo.png" alt="logotipo" className="pl-3" />
        </Link>

        <div className="navbar-collapse collapse w-100 order-3 dual-collapse2">
          <ul className="navbar-nav ml-auto">            
            <li className="pr-3">
              <NavLink className="nav-item nav-link" exact to="/">
                <FontAwesomeIcon icon={faShoppingBasket} className="icons" />{" "}
                <div className="badge badge-danger">0 prod.</div>
              </NavLink>
            </li>
            <li className="pt-2">
              <FontAwesomeIcon className="icons" icon={faUserCircle} />{" "}
              <NavLink className="nav-item nav-link" exact to="/login">
                Login
              </NavLink>{" "}
              <span className="text-white">/</span>{" "}
              <NavLink className="nav-item nav-link" exact to="/registrarse">
                Registrarse
              </NavLink>
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
};
