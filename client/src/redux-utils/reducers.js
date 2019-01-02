import { combineReducers } from 'redux';
import { reducer as form } from 'redux-form';

import App from './../App.reducer';
import Auth from './../pills/auth/auth.reducer';
import Inscription from './../pills/inscription/inscription.reducer';
import Modal from './../pills/modal/modal.reducer';
import UserData from './../pills/user-details/user-details.reducer';

export default combineReducers({ App, Auth, Modal, form, UserData });
