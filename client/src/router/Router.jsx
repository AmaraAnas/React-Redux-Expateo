import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';

import Layout from '../pages/main.layout';

import ErrorBound from './ErrorBound';

const LoginPage = React.lazy(() =>
  import(/* webpackChunkName: "login.page" */
  '../pages/login.page'),
);
const InscriptionPage = React.lazy(() =>
  import(/* webpackChunkName: "inscription.page" */
  '../pages/inscription.page'),
);
const NoMatchPage = React.lazy(() =>
  import(/* webpackChunkName: "noMatch.page" */
  '../pages/noMatch.page'),
);

const ErrorPage = () => <h1>:( Something went wrong. </h1>; // TODO: A better error page maybe ?
const LoadingLazyPage = <div> Loading ... </div>; // TODO: A better loadign lazy page maybe ?

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
  <ErrorBound renderError={() => <ErrorPage />}>
    <React.Suspense fallback={LoadingLazyPage}>
      <Layout>
        <BrowserRouter>
          <Switch>
            <Redirect exact from="/" to={indexRedirect} />
            <Route exact path="/login" component={LoginPage} />
            <Route path="/inscription" component={InscriptionPage} />
            <Route path="/sign-up" component={() => <div>Signup Page</div>} />
            <PrivateRoute
              path="/private"
              component={() => <div>HELLO PRIVATE</div>}
            />
            <PrivateRoute component={NoMatchPage} />
          </Switch>
        </BrowserRouter>
      </Layout>
    </React.Suspense>
  </ErrorBound>
);

Router.propTypes = {
  indexRedirect: PropTypes.string,
};

Router.defaultProps = {
  indexRedirect: '/login',
};

export default Router;
