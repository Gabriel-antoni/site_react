import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Login from './Components/login/login';
import Home from './Components/home/home'

 const Routes = () =>(
  <BrowserRouter>
  <Switch>
    <Route exact path= '/' component={Login} />
    <Route path='/login' component={Login} />
    <Route path='/home' component={Home} />
  </Switch>
  </BrowserRouter>
 );

export default Routes;