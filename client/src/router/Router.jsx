import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Switch, Route, Redirect } from 'react-router-dom';

import Animate from '../elements/animate/animate';
import MainLayout from '../pages/main.layout';
import { Loader } from '../ui-kit';

import ErrorBound from './ErrorBound';

const ErrorPage = () => <h1>:( Something went wrong. </h1>; // TODO: A better error page maybe ?
const LoadingLazyPage = (
  <div>
    <Loader active={true} />
  </div>
);

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
const MobilitiesPage = React.lazy(() =>
  import(/* webpackChunkName: "mobilities.page" */

  '../pages/mobilities.page'),
);
const NoMatchPage = React.lazy(() =>
  import(/* webpackChunkName: "noMatch.page" */
  '../pages/noMatch.page'),
);

const DumbPage = React.lazy(() =>
  import(/* webpackChunkName: "dumb.page" */
  '../pages/dumb.page'),
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
      <MainLayout
        isNavVisible={
          location.pathname !== '/login' &&
          location.pathname !== '/inscription' &&
          location.pathname !== '/mobilities'
        }
      >
        <Switch location={location}>
          <Redirect exact from="/" to={indexRedirect} />
          <Route exact path="/login" component={LoginPage} />
          <Route exact path="/inscription" component={InscriptionPage} />
          <AnimatedRoute key={location.pathname}>
            <Switch>
              <Route
                exact
                path="/sign-up"
                component={() => <div>Signup Page</div>}
              />
              <PrivateRoute exact path="/dashboard" component={HomePage} />
              <PrivateRoute exact path="/themes/:id" component={DumbPage} />
              <PrivateRoute exact path="/services/:id" component={DumbPage} />
              <PrivateRoute
                exact
                path="/mobilities"
                component={MobilitiesPage}
              />
              <PrivateRoute exact path="/bills" component={DumbPage} />
              <PrivateRoute exact path="/notifications" component={DumbPage} />
              <PrivateRoute exact path="/messages" component={DumbPage} />
              <PrivateRoute exact path="/documents" component={DumbPage} />
              <PrivateRoute exact path="/me" component={DumbPage} />
              <PrivateRoute component={NoMatchPage} />
            </Switch>
          </AnimatedRoute>
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
