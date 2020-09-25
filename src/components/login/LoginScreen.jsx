import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFly } from "@fortawesome/free-brands-svg-icons";

export const LoginScreen = ({ history }) => {
  const makeLogin = () => {
    history.replace("/");
  };

  return (
    <div className="container mt-5 mb-5 text-center">
      <h3> Formulario de Acceso</h3>
      <div className="row mt-5">
        <div className="col-md-6">
          <div className="form-group">
            <input
              type="email"
              className="form-control"
              placeholder="Email *"
              value=""
            />
          </div>
        </div>
        <div className="col-md-6">
          <div className="form-group">
            <input
              type="password"
              className="form-control"
              placeholder="Password *"
              value=""
            />
          </div>
        </div>
      </div>
      <div className="row mt-5">
        <div className="col-12">
          <button
            type="submit"
            className="btn btn-danger btn-lg"
            onClick={makeLogin}
          >
            Acceder
          </button>
        </div>
      </div>
    </div>
  );
};
