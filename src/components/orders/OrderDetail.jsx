import React from "react";

import './style.css';

export const OrderDetail = ({ order }) => {
  const accordionId = "#collapse" + order.id;
  const accordionName = "collapse" + order.id;

  return (
    <div id="accordion">
      <div className="card">
        <div className="card-header" id="headingOne">
          <h5 className="mb-0">
            <button
              className="btn btn-link"
              data-toggle="collapse"
              data-target={accordionId}
              aria-expanded="false"
              aria-controls={accordionName}
            >
              Pedido-{order.id}
            </button>
            <span className="badge badge-info float-right">{order.estado}</span>
          </h5>
        </div>

        <div
          id={accordionName}
          className="collapse"
          aria-labelledby="headingOne"
          data-parent="#accordion"
        >
          <div className="card-body">
            <ul className="list-group pt-4">
              
            {order.shopping.map((shopping) => ( 
              
              <li className="list-group-item align-items-center" key= {shopping.id}>
                <div className="row">
                  <div className="col-md-1 text-center">
                    <img
                      src={`./assets/imgs/products/product-${shopping.id}.jpg`}
                      className="img-thumbnail"
                      alt={shopping.name}
                    />
                  </div>
                  <div className="col-md-4 pt-3">
                    <h4>{shopping.name}</h4>                    
                  </div>

                  <div className="col-md-1 pt-3 text-center">
                    <h4>{shopping.total}</h4>
                  </div>
                  <div className="col-md-2 pt-3 text-center">
                    <h4>
                      {shopping.price} € <small>(p/u)</small>
                    </h4>
                  </div>                  
                  <div className="col-md-3 pt-3 text-right">
                    <h4 className="text-danger">
                      {(
                        parseFloat(shopping.price.replace(",", ".")) * parseInt(shopping.total)
                      ).toFixed(2)}
                      {" €"}
                    </h4>
                  </div>
                </div>
              </li>
            ))}
            </ul>
            <div className="row pt-4">
            <div className="col-8 text-right">
              <h4>Total:</h4>
            </div>
            <div className="col-4 text-right text-danger">
              <h4>{order.total } €</h4>
            </div>
          </div>
          </div>
        </div>
      </div>
    </div>
  );
};
