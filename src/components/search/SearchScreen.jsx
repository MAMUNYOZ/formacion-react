import React from "react";

export const SearchScreen = () => {
  return (
    <div className="container">
      <form>
        <div className="row">
          <div className="col-sm-12 col-md-3 pt-3"><h3>¿Necesitas ayuda?</h3></div>
          <div className="col-sm-12 col-md-6 pt-3">
            <input
              type="text"
              placeholder="Encuantra lo que buscas"
              className="form-control form-control-lg"
            />
          </div>
          <div className="col-sm-12 col-md-3 pt-3">
            <button tupe="submit" className="btn btn-danger btn-lg">Encontrar</button>
          </div>
        </div>
      </form>
    </div>
  );
};
