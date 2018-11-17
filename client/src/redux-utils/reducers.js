import { combineReducers } from 'redux';
import { reducer as form } from 'redux-form';

import App from './../App.reducer';
import Modal from './../pills/modal/modal.reducer';

export default combineReducers({ App, Modal, form });
