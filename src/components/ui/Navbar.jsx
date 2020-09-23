import React from "react";
import { Link, NavLink } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBars,
  faUserCircle,
  faShoppingBasket,
  faSearch,
} from "@fortawesome/free-solid-svg-icons";

export const Navbar = () => {
  return (
    <>
      <div className="collapse" id="navbarMenu">
        <div className="bg-dark p-4">
          <h5 className="text-white h4">Collapsed content</h5>
          <span className="text-muted">Toggleable via the navbar brand.</span>
        </div>
      </div>
      <nav className="navbar navbar-expand-sm navbar-dark bg-dark">
        <button
          type="button"
          data-toggle="collapse"
          data-target="#navbarMenu"
          aria-controls="navbarMenu"
          aria-expanded="false"
          aria-label="Toggle navigation"
          className="btn btn-outline-light"
        >
          <FontAwesomeIcon icon={faBars} style={{ fontSize: "2em" }} />
        </button>
        <Link className="navbar-brand" to="/">
          <img src="./assets/imgs/logo.png" alt="logotipo" className="pl-3" />
        </Link>

        <div className="navbar-collapse collapse w-100 order-3 dual-collapse2">
          <ul className="navbar-nav ml-auto">
            <li className="pr-3">
              <NavLink className="nav-item nav-link" exact to="/login">
                <FontAwesomeIcon icon={faSearch} style={{ fontSize: "2em" }} />
              </NavLink>
            </li>
            <li className="pr-3">
              <span className="badge badge-info">
                <NavLink className="nav-item nav-link" exact to="/login">
                  <FontAwesomeIcon
                    icon={faShoppingBasket}
                    style={{ fontSize: "2em" }}
                  />{" "}
                  3 prod.
                </NavLink>
              </span>
            </li>
            <li>
              <NavLink className="nav-item nav-link" exact to="/login">
                <FontAwesomeIcon
                  icon={faUserCircle}
                  style={{ fontSize: "2em" }}
                />{" "}
                Login / Registrarse
              </NavLink>
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
};
