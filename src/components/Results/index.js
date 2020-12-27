import React from 'react';
import { Switch, Route } from 'react-router-dom'
import Results from './Results';


const Inicio = () => (
  <div>
    <Switch>
      <Route path='/search/:id' component={Results}/>
    </Switch>
  </div>
)

export default Inicio;