import React from "react";
import { Switch, Route } from "react-router-dom";
import Inicio from "./Inicio";
import Results from "./Results";

const Content = () => (
  <div>
    <Switch>
      <Route exact path="/" component={Inicio} />
      <Route exact path="/search/:searchString" component={Results} />
      <Route path="*" component={Inicio} />
    </Switch>
  </div>
);
export default Content;
