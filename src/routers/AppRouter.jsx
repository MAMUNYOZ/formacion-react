import React, { useEffect } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { EcommerceScreen } from "../components/ecommerce/EcommerceScreen";
import { LoginScreen } from "../components/login/LoginScreen";
import { RegisterScreen } from "../components/register/RegisterScreen";
import { OffersScreen } from "../components/offers/OffersScreen";
import { Navbar } from "../components/ui/Navbar";
import { BannerScreen } from "../components/banner/BannerScreen";
import { ProductsScreen } from "../components/products/ProductsScreen";
import { ProductScreen } from "../components/products/ProductScreen";
import { FooterScreen } from "../components/footer/FooterScreen";
import { ShoppingScreen } from "../components/shopping/ShoppingScreen";
import { SearcherScreen } from "../components/searcher/SearcherScreen";
import { FavoritesScreen } from "../components/favorites/FavoritesScreen";
import { UserScreen } from "../components/user/UserScreen";

import { startChecking } from "../actions/auth";
import { PrivateRoute } from "./PrivateRoute";
import { PublicRoute } from "./PublicRoute";
import { productsStartLoading } from "../actions/products";

export const AppRouter = () => {
  const dispatch = useDispatch();
  const { checking, uid } = useSelector((state) => state.auth);

  useEffect(() => {
    dispatch(startChecking());
    dispatch(productsStartLoading());
  }, [dispatch]);

  if (checking) {
    return <h5>Espere...</h5>;
  }

  return (
    <Router>
      <div>
        <Navbar />
        <BannerScreen />
        <Switch>
          <PublicRoute
            exact
            path="/login"
            component={LoginScreen}
            isAuthenticated={!!uid}
          />
          <PublicRoute
            exact
            path="/registrarse"
            component={RegisterScreen}
            isAuthenticated={!!uid}
          />
          <Route exact path="/productos" component={ProductsScreen} />
          <Route exact path="/producto/:productId" component={ProductScreen} />
          <Route exact path="/ofertas" component={OffersScreen} />
          <Route exact path="/buscar" component={SearcherScreen} />
          <Route exact path="/favoritos" component={FavoritesScreen} />
          <PrivateRoute
            exact
            path="/compra"
            component={ShoppingScreen}
            isAuthenticated={!!uid}
          />
          <PrivateRoute
            exact
            path="/usuario"
            component={UserScreen}
            isAuthenticated={!!uid}
          />
          <Route exact path="/" component={EcommerceScreen} />
        </Switch>
        <FooterScreen />
      </div>
    </Router>
  );
};
