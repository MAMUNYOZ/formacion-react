import React from 'react';
import { useDispatch, useSelector } from "react-redux";

import validator from "validator";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEdit } from "@fortawesome/free-solid-svg-icons";

import { useForm } from "../../hooks/useForm";
import { removeError, setError } from "../../actions/ui";
import { startUpdate } from "../../actions/users";

import "../register/style.css";

export const UserUpdate = ( user ) => {

  const dispatch = useDispatch();
 
  const { msgError, classError } = useSelector((state) => state.ui);

  const userdata = user[0];


  const [formValues, handleInputChange] = useForm({
    name: userdata.name,
    surnames: userdata.surnames,
    email: userdata.email,
    password: userdata.password,
    address: userdata.address,
    postalCode: userdata.postalCode,
    telephone: userdata.telephone,
  });

  const {
    name,
    surnames,
    email,
    password,
    address,
    postalCode,
    telephone,
  } = formValues;

  const handleUpdate = (e) => {
    e.preventDefault();
    dispatch(removeError());


    if (isFormValid()) {
      dispatch(
        startUpdate(
          name,
          surnames,
          email,
          password,
          address,
          postalCode,
          telephone
        )
      );
    }
  };
  // Se pasa a set Error el tipo de error ( 0 si es de login, 1 si es de registro, 2 de actualización de datos)
  const isFormValid = () => {
    if (validator.isEmpty(name)) {
      dispatch(setError("Nombre obligatorio", 1));
      return false;
    } else if (validator.isEmpty(surnames)) {
      dispatch(setError("Apellido obligatorio", 1));
      return false;
    } else if (!validator.isEmail(email)) {
      dispatch(setError("Email incorrecto", 1));
      return false;
    } else if (validator.isEmpty(password) || password.length < 6) {
      dispatch(
        setError("El tamaño de la clave tiene que ser mayor a 5 caracteres", 1)
      );
      return false;
    } else if (validator.isEmpty(address)) {
      dispatch(setError("La dirección es obligatoria", 1));
      return false;
    } else if (validator.isEmpty(postalCode)) {
      dispatch(setError("El código postal es obligatorio", 1));
      return false;
    } else if (validator.isEmpty(telephone)) {
      dispatch(setError("El teléfono es obligatorio", 1));
      return false;
    }

    dispatch(removeError());
    return true;
  };

  return (
    <div className="row mt-3">
      <div className="col-12">
        <form onSubmit={handleUpdate}>
          {msgError && classError === 2 && (
            <div className="alert alert-success text-center mt-4" role="alert">
              {msgError}
            </div>
          )}

          <h3 className="register-heading text-left"><FontAwesomeIcon icon={faEdit}></FontAwesomeIcon> Modificar datos</h3>
          <div className="row register-form">
            <div className="col-md-6">
              <div className="form-group">
                <input
                  type="text"
                  name="name"
                  className="form-control"
                  placeholder="Nombre *"
                  value={name}
                  onChange={handleInputChange}
                />
              </div>
              <div className="form-group">
                <input
                  type="text"
                  name="surnames"
                  className="form-control"
                  placeholder="Apellidos *"
                  value={surnames}
                  onChange={handleInputChange}
                />
              </div>
              <div className="form-group">
                <input
                  type="email"
                  name="email"
                  className="form-control"
                  placeholder="Email *"
                  value={email}
                  disabled
                />
              </div>
              <div className="form-group">
                <input
                  type="password"
                  name="password"
                  className="form-control"
                  placeholder="Password *"
                  value={password}
                  onChange={handleInputChange}
                />
              </div>
            </div>
            <div className="col-md-6">
              <div className="form-group">
                <input
                  type="text"
                  name="address"
                  className="form-control"
                  placeholder="Dirección *"
                  value={address}
                  onChange={handleInputChange}
                />
              </div>
              <div className="form-group">
                <input
                  type="text"
                  name="postalCode"
                  className="form-control"
                  placeholder="Código Postal *"
                  value={postalCode}
                  onChange={handleInputChange}
                />
              </div>
              <div className="form-group">
                <input
                  type="text"
                  name="telephone"
                  className="form-control"
                  placeholder="Teléfono *"
                  value={telephone}
                  onChange={handleInputChange}
                />
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-12 text-center">
              <input
                type="submit"
                className="btn btn-danger btn-lg"
                value="Modificar"
              />
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};
