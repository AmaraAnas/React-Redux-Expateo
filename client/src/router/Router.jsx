import React from 'react';
import PropTypes from 'prop-types';
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

PrivateRoute = connect(({ Auth }) => ({
  isLogged: Auth.user && Auth.user.isLogged,
}))(PrivateRoute);

const Router = ({ indexRedirect }) => (
  <Layout>
    <BrowserRouter>
      <Switch>
        <Redirect exact from="/" to={indexRedirect} />
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

Router.propTypes = {
  indexRedirect: PropTypes.string,
};

Router.defaultProps = {
  indexRedirect: '/login',
};

export default Router;
