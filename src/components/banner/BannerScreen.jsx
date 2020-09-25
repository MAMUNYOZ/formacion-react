import React from "react";
import "./style.css";

export const BannerScreen = () =>{
  return (
    <div className="jumbotron jumbotron-fluid">
      <div className="container">
        <h1 className="display-4">Oferta de bienvenida</h1>
        <p className="lead">
          Consigue 10 € de regalo para probar tus primeros vinos
        </p>
        <a className="btn btn-danger btn-lg" href="/registrarse" role="button">
          Conseguir
        </a>
      </div>
    </div>
  );
}
