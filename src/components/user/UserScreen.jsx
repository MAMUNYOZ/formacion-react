import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import { UserPurchases } from "./UserPurchases";
import { UserUpdate } from "./UserUpdate";
import { userStarLoading } from "../../actions/users";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEdit, faShoppingCart } from "@fortawesome/free-solid-svg-icons";
import { removeError } from "../../actions/ui";

export const UserScreen = () => {
  const dispatch = useDispatch();


  const { user, loaded } = useSelector((state) => state.user);
  const { loading } = useSelector((state) => state.ui);

  const handleRemoveError = () => {
    // para ver si está visible el mensaje de error
    if (loading) {
      dispatch(removeError());
    }
    dispatch(userStarLoading());
  };

  return (
    <div className="contaniner-fluid animate__animated animate__fadeIn">
      <div className="container mt-4 mb-5">
        <h2>Información del usuario</h2>
        <nav className="nav mt-4">
          <div className="nav nav-tabs" id="nav-tab" role="tablist">
            <a
              className="nav-link active"
              id="nav-shopping-tab"
              data-toggle="tab"
              href="#nav-shopping"
              role="tab"
              aria-controls="nav-shopping"
              aria-selected="true"
            >
              <FontAwesomeIcon icon={faShoppingCart}></FontAwesomeIcon> Compras
              realizadas
            </a>
            <a
              className="nav-link"
              id="nav-update-tab"
              data-toggle="tab"
              href="#nav-update"
              role="tab"
              aria-controls="nav-update"
              aria-selected="false"
              onClick={handleRemoveError}
            >
              <FontAwesomeIcon icon={faEdit}></FontAwesomeIcon> Modificar
            </a>
          </div>
        </nav>
        <div className="tab-content" id="nav-tabContent">
          <div
            className="tab-pane fade show active"
            id="nav-shopping"
            role="tabpanel"
            aria-labelledby="nav-shopping-tab"
          >
            <UserPurchases></UserPurchases>
          </div>
          <div
            className="tab-pane fade"
            id="nav-update"
            role="tabpanel"
            aria-labelledby="nav-update-tab"
          >
            { loaded ? (
              <UserUpdate {...user} ></UserUpdate>
            ) : ("cargando...")}
            
          </div>
        </div>
      </div>
    </div>
  );
};
