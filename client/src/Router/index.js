import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";

import Home from "../screens/Home";
import Item from "../screens/Item";

function Router() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/search/:search" component={Home} />
        <Route path="/item/:category/:id" component={Item} />
      </Switch>
    </BrowserRouter>
  );
}

export default Router;
