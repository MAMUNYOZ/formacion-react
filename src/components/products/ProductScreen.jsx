import React, { useMemo } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faShoppingBasket,
  faDollyFlatbed,
  faCoins,
  faGift,
} from "@fortawesome/free-solid-svg-icons";
import { useParams, Redirect } from "react-router-dom";
import { getProducstById } from "../selectors/getProductById";
import { purchaseAddNew, purchaseUpdateTotal } from "../../actions/shopping";
import { updateProductById } from "../selectors/updateProductById";

import { useDispatch, useSelector } from "react-redux";

export const ProductScreen = ( { history }) => {
  const { productId } = useParams();
  const dispatch = useDispatch();
  const { products } = useSelector((state) => state.products);

  const product = useMemo(() => getProducstById(products, productId), [
    products,
    productId,
  ]);

  const { productsShopping } = useSelector((state) => state.shopping);

  if (!product) {
    return <Redirect to="/" />;
  }

  const handleReturn = () => {
    if ( history.length <=2 ) {
      history.push('/');
    } else {
      history.goBack();
    }
  }

  const { id, name, description, subdescription, price } = product;

  const onSelectProduct = (e) => {
    const product = e.currentTarget.dataset.product;

    const productFind = getProducstById(
      productsShopping,
      JSON.parse(product).id
    );

    if (!productFind) {
      dispatch(purchaseAddNew(product));
    } else {
      const productUpdate = updateProductById(
        productsShopping,
        JSON.parse(product).id,
        1
      );
      dispatch(purchaseUpdateTotal(JSON.stringify(productUpdate)));
    }
  };

  return (
    <div className="container-fluid">
      <div className="container pb-5 animate__animated animate__fadeIn">
        <div className="row pt-3">
          <div className="col-12 text-right">
            <button className="btn btn-outline-danger" onClick={handleReturn}>
              {" "}
              Volver{" "}
            </button>
          </div>
        </div>
        <div className="row mt-5">
          <div className="col-md-3">
            <img
              src={`../assets/imgs/products/product-${productId}.jpg`}
              alt={name}
              className="img-thumbnail"
            />
          </div>
          <div className="col-md-9">
            <h3 className="mb-4">{name}</h3>
            <h4 className="mb-4">
              {subdescription}
              <br />
              <small className="text-muted">{id} </small>
            </h4>
            <h5 className="mb-4">{description} </h5>
            <div className="row">
              <div className="col-md-6 text-center pt-2">
                <p className=" price">Precio: {price} €</p>
              </div>
              <div className="col-md-6 text-center">
                <button
                  type="button"
                  className="btn btn-primary mr-3"
                  onClick={onSelectProduct}
                  data-product={JSON.stringify(product)}
                >
                  <FontAwesomeIcon icon={faShoppingBasket} className="price" />
                  <span className="price"> Añadir</span>
                </button>
              </div>
            </div>
            <div className="row mt-5">
              <div className="col-12">
                <div className="card text-center">
                  <div className="card-header price">Importante</div>
                  <div className="card-body">
                    <h5 className="card-title">
                      Con tu primer pedido superior a 70 €{" "}
                    </h5>
                    <div className="row mt-5">
                      <div className="col-md-4 text-center card-text pt-3">
                        <FontAwesomeIcon
                          icon={faDollyFlatbed}
                          className="icons-cards"
                        />
                        <br />
                        Transporte gratis
                      </div>
                      <div className="col-md-4 text-center pt-3">
                        <FontAwesomeIcon
                          icon={faCoins}
                          className="icons-cards"
                        />
                        <br />
                        Descuento 10 €
                      </div>
                      <div className="col-md-4 text-center pt-3">
                        <FontAwesomeIcon
                          icon={faGift}
                          className="icons-cards"
                        />
                        <br />
                        Regalo sacacorchos
                      </div>
                    </div>
                  </div>
                  <div class="card-footer text-muted">
                    <small>*Solo para la península</small>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
