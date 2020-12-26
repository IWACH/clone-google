import React from "react";
import { Switch, Route } from "react-router-dom";
import Inicio from "./Inicio/index";

const Content = () => (
  <div>
    <Switch>
      <Route exact path="/" component={Inicio} />
      <Route path="*" component={Inicio} />
    </Switch>
  </div>
);
export default Content;
