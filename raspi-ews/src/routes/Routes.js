import React from 'react';
import { Route, Switch } from 'react-router-dom';
import ProtectedRoute from '../auth/ProtectedRoute';

import { withMainLayout } from '../layouts';

import Login from '../views/Login/Login';
import SignUp from '../views/SignUp/SignUp';
import SystemInfo from '../views/SystemInfo';
import TestView from '../views/Test';
import HomeView from '../views/Home/Home';

const Routes = (props) => {
  return (
    <Switch>
      <ProtectedRoute exact path="/" component={HomeView} />
      <Route exact path="/login" redirect="/test" component={Login} />
      <Route exact path="/register" component={SignUp} />
      <Route exact path="/systems" component={withMainLayout(SystemInfo)} />
      <ProtectedRoute exact path="/test" component={withMainLayout(TestView)} />
      <Route exact path="/public" component={withMainLayout(TestView)} />
    </Switch>
  );
};

export default Routes;