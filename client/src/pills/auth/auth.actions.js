import { createAction } from 'redux-actions';

import { addPrefixToActionTypes } from '../../redux-utils/utils';
import User from '../../models/user.model';

import * as AuthApi from './auth.api';

export const ACTION_TYPES = addPrefixToActionTypes(
  {
    LOGIN_SUCCESS: 'LOGIN_SUCCESS',
    LOGIN_FAILURE: 'LOGIN_FAILURE',
    LOGOUT: 'LOGOUT',
  },
  'auth',
);

export const loginSuccess = createAction(ACTION_TYPES.LOGIN_SUCCESS);
export const loginFailure = createAction(ACTION_TYPES.LOGIN_FAILURE);
export const logout = createAction(ACTION_TYPES.LOGOUT);

export function login({
  email,
  password,
  onPending,
  onSuccess,
  onFailure,
  authApi = AuthApi, // TODO: remove that to use the thunk.withExtraArgument({api: auth})
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
