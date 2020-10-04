import React from 'react'

import { useDispatch, useSelector } from "react-redux";
import { purchaseUpdateTotal } from "../../actions/shopping";
import { updateProductById } from "../selectors/updateProductById";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faPlus,
  faMinus,
} from "@fortawesome/free-solid-svg-icons";

import './style.css';

export const ShoppingCartProduct = ({ product }) => {

    const dispatch = useDispatch();
    const { productsShopping } = useSelector((state) => state.shopping);

    const {id, name, price, stock, total} = product;

    const addOne = (e) => {
        const productId = e.currentTarget.dataset.key;    

        const productUpdate = updateProductById(productsShopping, productId, 1);
        dispatch(purchaseUpdateTotal(JSON.stringify(productUpdate)));
        
      };

      const removeOne = (e) => {
        const productId = e.currentTarget.dataset.key;    
        const productUpdate = updateProductById(productsShopping, productId, -1);
        dispatch(purchaseUpdateTotal(JSON.stringify(productUpdate)));
      };


    return (
        <li className="list-group-item align-items-center">
            <div className="row">
              <div className="col-md-1 text-center">
                <img
                  src={`./assets/imgs/products/product-${id}.jpg`}
                  className="img-thumbnail"
                  alt={name}
                />
              </div>
              <div className="col-md-4 pt-3">
                <h4>{name}</h4>
    <span className={`${stock > 0 ? "badge-success" : "badge-danger"} badge`}>{ stock === 0 ? (
      "No disponemos de más unidades"
    ) : ( stock < 0 ? ( `Solo disponemos de ${total + stock} unidades`) : (`${stock} Unidades existentes` ))} </span>
              </div>

              <div className="col-md-1 pt-3 text-center">
                <h4>{total}</h4>
              </div>
              <div className="col-md-2 pt-3 text-center">
                <h4>{price} € <small>(p/u)</small></h4>
              </div>
              <div className="col-md-2 pt-3 text-center">
                {" "}
                <h4><button
                    type="button"
                    className="btn btn-primary mr-3 mt-1"
                    onClick={addOne}
                    data-key={id}
                    ><FontAwesomeIcon
                    icon={faPlus}></FontAwesomeIcon></button>  <button
                    type="button"
                    className="btn btn-primary mr-3 mt-1"
                    onClick={removeOne}
                    data-key={id}
                    ><FontAwesomeIcon
                    icon={faMinus}></FontAwesomeIcon></button></h4>
              </div>
              <div className="col-md-2 pt-3 text-right">
                <h4 className="text-danger">
                  {(parseFloat(price.replace(",", ".")) *
                    parseInt(total)).toFixed(2)}
                  {" €"}
                </h4>
              </div>
            </div>
            {

            }
          </li>
    )
}
