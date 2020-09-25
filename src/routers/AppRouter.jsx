import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { EcommerceScreen } from "../components/ecommerce/EcommerceScreen";
import { LoginScreen } from "../components/login/LoginScreen";
import { RegisterScreen } from "../components/register/RegisterScreen";
import { OffersScreen } from "../components/offers/OffersScreen";
import { Navbar } from "../components/ui/Navbar";
import { BannerScreen } from "../components/banner/BannerScreen";
import { ProductsScreen } from "../components/products/ProductsScreen";
import { ProductScreen } from "../components/products/ProductScreen";
import { FooterScreen } from "../components/footer/FooterScreen";

export const AppRouter = () => {
  return (
    <Router>
      <div>
        <Navbar />
        <BannerScreen/>
        <Switch>
          <Route exact path="/login" component={LoginScreen} />
          <Route exact path="/registrarse" component={RegisterScreen} />
          <Route exact path="/productos" component={ProductsScreen} />
          <Route exact path="/producto/:productId" component={ProductScreen} />
          <Route exact path="/ofertas" component={OffersScreen} />
          <Route exact path="/" component={EcommerceScreen} />
        </Switch>
        <FooterScreen/>
      </div>
    </Router>
  );
};
