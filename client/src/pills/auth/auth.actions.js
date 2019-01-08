import { createAction } from 'redux-actions';

import { addPrefixToActionTypes } from '../../redux-utils/utils';
import User from '../../models/user.model';

import * as AuthApi from './auth.api';

export const ACTION_TYPES = addPrefixToActionTypes(
  {
    LOGIN_SUCCESS: 'LOGIN_SUCCESS',
    LOGIN_FAILURE: 'LOGIN_FAILURE',
  },
  'auth',
);

export const loginSuccess = createAction(ACTION_TYPES.LOGIN_SUCCESS);
export const loginFailure = createAction(ACTION_TYPES.LOGIN_FAILURE);

export function login({
  email,
  password,
  onPending,
  onSuccess,
  onFailure,
  authApi = AuthApi,
}) {
  onPending();
  return async (dispatch) => {
    try {
      const rawUser = await authApi.classicLogin({ email, password });
      const user = new User(rawUser);
      dispatch(loginSuccess(user));
      onSuccess(user);
    } catch (e) {
      dispatch(loginFailure(e));
      onFailure(e);
    }
  };
}
