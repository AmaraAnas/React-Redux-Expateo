import { createAction } from 'redux-actions';

import { addPrefixToActionTypes } from '../../redux-utils/utils';

import * as AuthApi from './auth.api';

export const ACTION_TYPES = addPrefixToActionTypes(
  {
    LOGIN_SUCCESS: 'LOGIN_SUCCESS',
    LOGIN_FAILURE: 'LOGIN_FAILURE',
  },
  'auth',
);

export const loginSuccess = createAction(ACTION_TYPES.LOGIN_SUCCESS);
const loginFailure = createAction(ACTION_TYPES.LOGIN_FAILURE);

export function login({
  username,
  password,
  onPending,
  onSuccess,
  onFailure,
  authApi = AuthApi,
}) {
  onPending();
  return async (dispatch) => {
    try {
      //const user = await authApi.login(username, password);
      const user = await authApi.genericLogin(
        { username, password },
        false,
        false,
      );
      dispatch(loginSuccess(user));
      onSuccess(user);
    } catch (e) {
      dispatch(loginFailure(e));
      onFailure(e);
    }
  };
}
