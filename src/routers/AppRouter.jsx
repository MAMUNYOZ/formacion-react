import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import { EcommerceScreen } from "../components/ecommerce/EcommerceScreen";
import { LoginScreen } from "../components/login/LoginScreen";
import { Navbar } from "../components/ui/Navbar";


export const AppRouter = () => {
  return (
    <Router>
      <div>
        <Navbar />
        <Switch>
          <Route exact path="/login" component={ LoginScreen }/>
          <Route exact path="/" component={ EcommerceScreen }/>
        </Switch>
      </div>
    </Router>
  );
};
