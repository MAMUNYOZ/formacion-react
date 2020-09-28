import React from "react";
import { useDispatch, useSelector } from "react-redux";

import { useForm } from "../../hooks/useForm";
import { startLogin } from "../../actions/auth";
import { removeError, setError } from "../../actions/ui";

import validator from "validator";

export const LoginScreen = ({ history}) => {
  const dispatch = useDispatch();
  const { msgError } = useSelector((state) => state.ui);

  const [formValues, handleInputChange] = useForm({
    email: "uno@dos.es",
    password: "123456",
  });

  const { email, password } = formValues;

  const handleLogin = (e) => {
    e.preventDefault();
    if (isFormValid()) {
      dispatch( startLogin(email, password) );
      history.replace('/');
    }
  };

  const isFormValid = () => {
    if (
      !validator.isEmail(email) ||
      (validator.isEmpty(password) || password.length < 6)
    ) {
      dispatch(setError("Datos de acceso incorrectos"));
      return false;
    }
    dispatch(removeError());
    return true;
  };

  return (
    <div className="container mt-5 mb-5 text-center">
      <h3> Formulario de Acceso</h3>
      <form onSubmit={handleLogin}>
        {msgError && (
          <div className="alert alert-danger text-center" role="alert">
            {msgError}
          </div>
        )}
        <div className="row mt-5">
          <div className="col-md-6">
            <div className="form-group">
              <input
                type="email"
                className="form-control"
                name="email"
                placeholder="Email *"
                value={email}
                onChange={handleInputChange}
                autoComplete="off"
              />
            </div>
          </div>
          <div className="col-md-6">
            <div className="form-group">
              <input
                name="password"
                type="password"
                className="form-control"
                placeholder="Password *"
                value={password}
                onChange={handleInputChange}
              />
            </div>
          </div>
        </div>
        <div className="row mt-5">
          <div className="col-12">
            <button type="submit" className="btn btn-danger btn-lg">
              Acceder
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};
