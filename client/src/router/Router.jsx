import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Switch, Route, Redirect } from 'react-router-dom';

import Animate from '../elements/animate/animate';
import MainLayout from '../pages/main.layout';

import DumbPage0 from '../pages/dumb.page.0';
import DumbPage1 from '../pages/dumb.page.1';
import DumbPage2 from '../pages/dumb.page.2';
import DumbPage3 from '../pages/dumb.page.3';

import ErrorBound from './ErrorBound';

const ErrorPage = () => <h1>:( Something went wrong. </h1>; // TODO: A better error page maybe ?
const LoadingLazyPage = <div> Loading ... </div>; // TODO: A better loadign lazy page maybe ?

const LoginPage = React.lazy(() =>
  import(/* webpackChunkName: "login.page" */
  '../pages/login.page'),
);
const InscriptionPage = React.lazy(() =>
  import(/* webpackChunkName: "inscription.page" */
  '../pages/inscription.page'),
);
const HomePage = React.lazy(() =>
  import(/* webpackChunkName: "home.page" */

  '../pages/home.page'),
);
const NoMatchPage = React.lazy(() =>
  import(/* webpackChunkName: "noMatch.page" */
  '../pages/noMatch.page'),
);

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

// TODO : use useslector
PrivateRoute = connect(({ Auth }) => ({
  isLogged: Auth.user && Auth.user.isLogged,
}))(PrivateRoute);

// TODO : finish this - find out why if this height : 100% is mandatory
const AnimatedRoute = ({ children }) => {
  return (
    <Animate animation="fadeInRight faster">
      <div style={{ height: '100%' }}>{children}</div>
    </Animate>
  );
};

const Router = ({ indexRedirect, location }) => (
  <ErrorBound renderError={() => <ErrorPage />}>
    <React.Suspense fallback={LoadingLazyPage}>
      <MainLayout isNavVisible={location.pathname !== '/login'}>
        <Switch location={location}>
          <Redirect exact from="/" to={indexRedirect} />
          <Route exact path="/login" component={LoginPage} />
          <PrivateRoute
            path="/private"
            component={() => <div>HELLO PRIVATE</div>}
          />
          <AnimatedRoute key={location.pathname}>
            <Switch>
              <Route
                exact
                path="/sign-up"
                component={() => <div>Signup Page</div>}
              />
              <Route exact path="/inscription" component={InscriptionPage} />
              <PrivateRoute exact path="/dashboard" component={HomePage} />
              <PrivateRoute exact path="/dumb/0" component={DumbPage0} />
              <PrivateRoute exact path="/dumb/1" component={DumbPage1} />
              <PrivateRoute exact path="/dumb/2" component={DumbPage2} />
              <PrivateRoute exact path="/dumb/3" component={DumbPage3} />
            </Switch>
          </AnimatedRoute>
          <PrivateRoute component={NoMatchPage} />
        </Switch>
      </MainLayout>
    </React.Suspense>
  </ErrorBound>
);

Router.propTypes = {
  indexRedirect: PropTypes.string,
};

Router.defaultProps = {
  indexRedirect: '/login',
};

export default connect(({ router }) => ({ location: router.location }))(Router);
