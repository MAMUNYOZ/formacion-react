import React from "react";
import { Link } from "react-router-dom";
import "./style.css";

export const BannerScreen = () =>{
  return (
    <div className="jumbotron jumbotron-fluid mb-0">
      <div className="container margin-60">
        <h1 className="display-4">Oferta de bienvenida</h1>
        <p className="lead">
          Consigue un sacacorchos exclusivo gratis por una compra superior a 80 €
        </p>
       
      </div>
    </div>
  );
}
