import React, { useState } from "react";

import { Link, NavLink } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBars,
  faUserCircle,
  faShoppingBasket,
} from "@fortawesome/free-solid-svg-icons";

import "./style.css";
import { useSelector, useDispatch } from "react-redux";
import { startLogout } from "../../actions/auth";

export const Navbar = () => {
  const dispatch = useDispatch();
  const { name } = useSelector((state) => state.auth);
  const { productsShopping } = useSelector((state) => state.shopping);

  //para el control del despliegue del menu de navegación
  const [isNavCollapsed, setIsNavCollapsed] = useState(true);
  const handleNavCollapse = () => setIsNavCollapsed(!isNavCollapsed);

  // para contabilizar los productos de la cesta
  let total = 0;
  productsShopping.map((product) => (total = total + product.total));

  const handleLogout = () => {
    dispatch(startLogout());
  };

  return (
    <>
      <div
        className={`${isNavCollapsed ? "collapse" : ""} navbar-collapse`}
        id="navbarMenu"
      >
        <div className="bg-dark p-4">
          <h5 className="text-white h3">Menú de navegación</h5>
          <ul className="nav flex-column">
            <li className="nav-item">
              <NavLink
                className="nav-item nav-link"
                to="/"
                onClick={handleNavCollapse}
              >
                Inicio
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                className="nav-item nav-link"
                to="ofertas"
                onClick={handleNavCollapse}
              >
                Ofertas
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                className="nav-item nav-link"
                to="productos"
                onClick={handleNavCollapse}
              >
                Productos
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                className="nav-item nav-link"
                to="buscar"
                onClick={handleNavCollapse}
              >
                Buscar producto
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                className="nav-item nav-link"
                to="favoritos"
                onClick={handleNavCollapse}
              >
                Favoritos
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                className="nav-item nav-link"
                to="compra"
                onClick={handleNavCollapse}
              >
                Compra
              </NavLink>
            </li>           
            {name ? (
              <li className="pt-2 d-block d-sm-block d-md-none">
                <NavLink
                  className="nav-item nav-link"
                  exact
                  to="#"
                  onClick={handleNavCollapse}
                >
                  {name} <span className="text-white">/</span>{" "}
                </NavLink>
                <NavLink
                  className="nav-item nav-link"
                  exact
                  to="#"
                  onClick={(handleNavCollapse, handleLogout)}
                >
                  Logout
                </NavLink>
              </li>
            ) : (
              <li className="pt-2 d-block d-sm-block d-md-none">
                <NavLink
                  className="nav-item nav-link"
                  exact
                  to="/login"
                  onClick={handleNavCollapse}
                >
                  Login
                </NavLink>{" "}
                <span className="text-white">/</span>{" "}
                <NavLink
                  className="nav-item nav-link"
                  exact
                  to="/registrarse"
                  onClick={handleNavCollapse}
                >
                  Registrarse
                </NavLink>
              </li>
            )}
          </ul>
        </div>
      </div>
      <nav className="navbar navbar-expand-sm navbar-dark bg-dark sombra">
        <button
          type="button"
          aria-expanded={!isNavCollapsed ? true : false}
          aria-label="Toggle navigation"
          className="btn btn-outline-light"
          onClick={handleNavCollapse}
        >
          <FontAwesomeIcon icon={faBars} className="icons" />
        </button>
        <Link className="navbar-brand" to="/">
          <img src="./assets/imgs/logo.png" alt="logotipo" className="pl-3" />
        </Link>

        <div className="navbar-collapse collapse w-100 order-3 dual-collapse2">
          <ul className="navbar-nav ml-auto">
            <li className="pr-3">
              <NavLink className="nav-item nav-link" exact to="/compra">
                <FontAwesomeIcon icon={faShoppingBasket} className="icons" />{" "}
                <div className="badge badge-danger">{total} prod.</div>
              </NavLink>
            </li>
            {name ? (
              <li className="pt-2 d-none d-sm-none d-md-block">
                <FontAwesomeIcon className="icons" icon={faUserCircle} />{" "}
                <NavLink className="nav-item nav-link" exact to="#">
                  {name} <span className="text-white">/</span>{" "}
                </NavLink>
                <NavLink
                  className="nav-item nav-link"
                  exact
                  to="#"
                  onClick={handleLogout}
                >
                  Logout
                </NavLink>
              </li>
            ) : (
              <li className="pt-2 d-none d-sm-none d-md-block">
                <FontAwesomeIcon className="icons" icon={faUserCircle} />{" "}
                <NavLink className="nav-item nav-link" exact to="/login">
                  Login
                </NavLink>{" "}
                <span className="text-white">/</span>{" "}
                <NavLink className="nav-item nav-link" exact to="/registrarse">
                  Registrarse
                </NavLink>
              </li>
            )}
          </ul>
        </div>
      </nav>
    </>
  );
};
