import React from "react";
import "./style.css";

export default function BannerScreen() {
  return (
    <div className="jumbotron jumbotron-fluid">
      <div className="container">
        <h1 className="display-4">Oferta de bienvenida</h1>
        <p className="lead">
          Consigue 10 € de regalo para probar tus primeros vinos
        </p>
        <a class="btn btn-primary btn-lg" href="/login" role="button">
          Conseguir
        </a>
      </div>
    </div>
  );
}
