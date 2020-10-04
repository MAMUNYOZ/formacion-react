import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";
import { OrdersList } from "../orders/OrdersList";

export const UserPurchases = () => {
  return (
    <>
    <div className="row pt-5">
      <div className="col-12">
        <h3>
          {" "}
          <FontAwesomeIcon icon={faShoppingCart}></FontAwesomeIcon> Compras
          realizadas
        </h3>
      </div>
    </div>
    <OrdersList></OrdersList>
    </>
  );
};
