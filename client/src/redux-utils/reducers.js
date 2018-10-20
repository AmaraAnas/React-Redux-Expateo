import { combineReducers } from 'redux';
import { reducer as form } from 'redux-form';

import App from './../App.reducer';

export default combineReducers({ App, form });
