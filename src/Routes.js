import React from "react";
import { Switch, Route } from "react-router-dom";
import Home from "./Container/Home2";
import About from "./Container/About";
import Cart from "./Container/Cart";
import Checkout from "./Container/Checkout";
import Contact from "./Container/Contact";
import Shop from "./Container/Shop";
import SingleProduct from "./Container/SingleProduct";
import NotFound from "./Container/Error/NotFound";

function Routes() {
  return (
    <>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/About" component={About} />
        <Route exact path="/Cart" component={Cart} />
        <Route exact path="/Checkout" component={Checkout} />
        <Route exact path="/Contact" component={Contact} />
        <Route exact path="/Shop" component={Shop} />
        <Route exact path="/SingleProduct" component={SingleProduct} />
        <Route component={NotFound} />
      </Switch>
    </>
  );
}

export default Routes;
