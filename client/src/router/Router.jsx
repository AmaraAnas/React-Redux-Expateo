import React from 'react';
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';

import Layout from '../pages/Main.layout';
import LoginPage from '../pages/Login.page';
import NoMatchPage from '../pages/NoMatch.page';

const Router = () => (
  <Layout>
    <BrowserRouter>
      <Switch>
        <Redirect exact from="/" to="/login" />
        <Route exact path="/login" component={LoginPage} />
        <Route component={NoMatchPage} />
      </Switch>
    </BrowserRouter>
  </Layout>
);

export default Router;
