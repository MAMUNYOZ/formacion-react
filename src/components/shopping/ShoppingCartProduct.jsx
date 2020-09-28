import React from 'react'

import { useDispatch, useSelector } from "react-redux";
import { purchaseAddNew, purchaseUpdateTotal } from "../../actions/shopping";
import { getProducstById } from "../selectors/getProductById";
import { updateProductById } from "../selectors/updateProductById";

export const ShoppingCartProduct = ({ product }) => {

    const dispatch = useDispatch();
    const { productsShopping } = useSelector((state) => state.shopping);

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
              <div className="col-md-1">
                <img
                  src={`./assets/imgs/products/product-${product.id}.jpg`}
                  className="w-50"
                  alt={product.name}
                />
              </div>
              <div className="col-md-4 pt-3">
                <h4>{product.name}</h4>
              </div>

              <div className="col-md-1 pt-3 text-center">
                <h4>{product.total}</h4>
              </div>
              <div className="col-md-2 pt-3 text-center">
                <h4>{product.price} € <small>(p/u)</small></h4>
              </div>
              <div className="col-md-2 pt-3 text-center">
                {" "}
                <h4><button
                    type="button"
                    className="btn btn-primary mr-3"
                    onClick={addOne}
                    data-key={product.id}
                    >+</button>  <button
                    type="button"
                    className="btn btn-primary mr-3"
                    onClick={removeOne}
                    data-key={product.id}
                    >-</button></h4>
              </div>
              <div className="col-md-2 pt-3 text-right">
                <h4>
                  {(parseFloat(product.price.replace(",", ".")) *
                    parseInt(product.total)).toFixed(2)}
                  {" €"}
                </h4>
              </div>
            </div>
          </li>
    )
}
