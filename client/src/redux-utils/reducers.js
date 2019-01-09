import { combineReducers } from 'redux';
import { reducer as form } from 'redux-form';
import { connectRouter } from 'connected-react-router';
import { createBrowserHistory } from 'history';

import App from './../App.reducer';
import Auth from './../pills/auth/auth.reducer';
import Modal from './../pills/modal/modal.reducer';
import UserData from './../pills/user-details/user-details.reducer';

export const history = createBrowserHistory();
export default combineReducers({
  App,
  Auth,
  Modal,
  UserData,
  form,
  router: connectRouter(history),
});
