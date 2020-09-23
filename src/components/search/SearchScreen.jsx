import React from "react";

export const SearchScreen = () => {
  return (
    <div className="container">
      <form>
        <div className="row">
          <div className="col-3"><h3>¿Necesitas ayuda?</h3></div>
          <div className="col-6">
            <input
              type="text"
              placeholder="Encuantra lo que buscas"
              className="form-control"
            />
          </div>
          <div className="col-3">
            <button tupe="submit" className="btn btn-primary">Encontrar</button>
          </div>
        </div>
      </form>
    </div>
  );
};
