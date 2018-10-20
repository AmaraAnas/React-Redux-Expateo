import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import logger from 'redux-logger';
import { isFSA } from 'flux-standard-action';

import reducers from './reducers';

const middlewares = [thunk];

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

const store = createStore(
  reducers,
  composeEnhancers(applyMiddleware(...middlewares)),
);

export default store;
