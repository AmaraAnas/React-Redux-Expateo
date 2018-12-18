import { createAction } from 'redux-actions';

import { addPrefixToActionTypes } from './redux-utils/utils';
import * as AuthApi from './pills/auth/auth.api';
import { loginSuccess } from './pills/auth/auth.actions';

export const ACTION_TYPES = addPrefixToActionTypes(
  {
    INIT_DONE: 'INIT_DONE',
    SET_TITLE: 'SET_TITLE',
  },
  'app',
);

const initDone = createAction(ACTION_TYPES.INIT_DONE);
export const setTitle = createAction(ACTION_TYPES.SET_TITLE);
export function init() {
  return async (dispatch) => {
    let user;
    try {
      // user = await AuthApi.checkAuth();
      user = await AuthApi.genericLogin({}, true, false);
      if (user) {
        dispatch(loginSuccess(user));
      }
    } catch (e) {
    } finally {
      dispatch(initDone(user));
    }
  };
}
