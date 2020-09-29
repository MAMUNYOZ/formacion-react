import React from "react";
import { Link } from "react-router-dom";
import "./style.css";

export const BannerScreen = () =>{
  return (
    <div className="jumbotron jumbotron-fluid mb-0">
      <div className="container">
        <h1 className="display-4">Oferta de bienvenida</h1>
        <p className="lead">
          Consigue 10 € de regalo para probar tus primeros vinos
        </p>
        <Link className="btn btn-danger btn-lg" to="/registrarse"> Conseguir </Link>
      </div>
    </div>
  );
}
