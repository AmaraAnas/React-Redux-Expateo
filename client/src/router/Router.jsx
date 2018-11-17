import React from 'react';
import { connect } from 'react-redux';
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';

import Layout from '../pages/main.layout';
import LoginPage from '../pages/login.page';
import NoMatchPage from '../pages/noMatch.page';

let PrivateRoute = ({ isLogged, component: Component, ...rest }) => {
  return (
    <Route
      {...rest}
      render={(props) =>
        isLogged ? (
          <Component {...props} />
        ) : (
          <Redirect
            to={{
              pathname: '/login',
              state: { from: props.location },
            }}
          />
        )
      }
    />
  );
};

PrivateRoute = connect(({ Auth }) => ({ isLogged: Auth.user.isLogged }))(
  PrivateRoute,
);

const Router = () => (
  <Layout>
    <BrowserRouter>
      <Switch>
        <Redirect exact from="/" to="/login" />
        <Route exact path="/login" component={LoginPage} />
        <Route path="/sign-up" component={() => <div>Signup Page</div>} />
        <PrivateRoute
          path="/private"
          component={() => <div>HELLO PRIVATE</div>}
        />
        <PrivateRoute component={NoMatchPage} />
      </Switch>
    </BrowserRouter>
  </Layout>
);

export default Router;
