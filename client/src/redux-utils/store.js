import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import logger from 'redux-logger';
import { isFSA } from 'flux-standard-action';
import LogRocket from 'logrocket';
import setupLogRocketReact from 'logrocket-react';
import throttle from 'lodash.throttle';
import { routerMiddleware } from 'connected-react-router';

import reducers, { history } from './reducers';
import { loadState, saveState } from './localStorage';

const middlewares = [thunk, routerMiddleware(history)];

// ---------------------------------------------------------------------
let composeEnhancers = compose;
if (process.env.NODE_ENV === 'development') {
  const fsaChecker = (store) => (next) => (action) => {
    if (isFSA(action)) {
      return next(action);
    } else {
      console.error('Dispatching a non FSA action => ', action);
      throw new Error(
        `Dispatching a non FSA action => ${JSON.stringify(action)}`,
      );
    }
  };
  middlewares.push(fsaChecker);
  middlewares.push(logger);
  composeEnhancers =
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || composeEnhancers;
}
// ---------------------------------------------------------------------
if (process.env.NODE_ENV === 'production') {
  LogRocket.init('1snrjg/develop-expateo-pa');
  //   LogRocket.identify('0123456789', {
  //     name: 'James Morrison',
  //     email: 'jamesmorrison@example.com',

  //     // Add your own custom user variables here, ie:
  //     subscriptionType: 'pro',
  //   });
  setupLogRocketReact(LogRocket);
  middlewares.push(LogRocket.reduxMiddleware());
}
// ---------------------------------------------------------------------
const persistedState = loadState();
const store = createStore(
  reducers,
  persistedState,
  composeEnhancers(applyMiddleware(...middlewares)),
);
// store.getState() is a save all. Maybe too much ?
store.subscribe(
  throttle(() => {
    const { Auth, router } = store.getState();
    saveState({ Auth, router });
  }, 1000),
);

export default store;
