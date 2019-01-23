import { createAction } from 'redux-actions';

import { addPrefixToActionTypes } from './redux-utils/utils';
import * as AuthApi from './pills/auth/auth.api';
import { loginSuccess } from './pills/auth/auth.actions';
import { getMobilities } from './pills/mobilities/mobilities.actions';

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
    try {
      const user = await AuthApi.getUser(AuthApi.rememberMeLogin);
      if (user && user.isLogged) {
        dispatch(loginSuccess(user));
        await dispatch(getMobilities()); // when the user login, we should fetch the mobilities as it is a part of the login process
      }
    } catch (e) {}
    dispatch(initDone());
  };
}
