import { createAction } from 'redux-actions';
import * as UserApi from './user-details.api';
import { addPrefixToActionTypes } from '../../redux-utils/utils';

export const ACTION_TYPES = addPrefixToActionTypes(
  {
    GET_USERINFO_SUCCESS: 'GET_USERINFO_SUCCESS',
    GET_USERINFO_FAILURE: 'GET_USERINFO_FAILURE',
  },
  'userInfo',
);

export const getUserInfoSuccess = createAction(
  ACTION_TYPES.GET_USERINFO_SUCCESS,
);
export const getUserInfoFailure = createAction(
  ACTION_TYPES.GET_USERINFO_FAILURE,
);

export function getUserInfo({ user, onSuccess, onFailure }) {
  return async (dispatch) => {
    try {
      const userInfo = await UserApi.getUserDetails(user);
      dispatch(getUserInfoSuccess(userInfo));
      onSuccess(userInfo);
    } catch (e) {
      dispatch(getUserInfoFailure(e));
      onFailure(e);
    }
  };
}
