import { combineReducers } from 'redux';
import { reducer as form } from 'redux-form';

import App from './../App.reducer';
import Auth from './../pills/auth/auth.reducer';
import Modal from './../pills/modal/modal.reducer';

export default combineReducers({ App, Auth, Modal, form });
