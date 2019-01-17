import { createAction } from 'redux-actions';

import { addPrefixToActionTypes } from '../../redux-utils/utils';
import { userSelector } from '../auth/auth.selectors';
import { addEntities } from '../schema/schema.actions';

import { STATE_KEY } from './mobilities.selectors';

export const ACTION_TYPES = addPrefixToActionTypes(
  {
    GET_ALL_SUCCESS: 'GET_ALL_SUCCESS',
    GET_ALL_FAILURE: 'GET_ALL_FAILURE',
    GET_ALL_PENDING: 'GET_ALL_PENDING',
  },
  'moblities',
);

export const getAllSuccess = createAction(ACTION_TYPES.GET_ALL_SUCCESS);
export const getAllFailure = createAction(ACTION_TYPES.GET_ALL_FAILURE);
export const getAllPending = createAction(ACTION_TYPES.GET_ALL_PENDING);

export function getMobilities() {
  return async (dispatch, getState, { api }) => {
    dispatch(getAllPending());
    let user = userSelector(getState());
    try {
      const mobilities = await api.mobilities.getMobilities(user);
      dispatch(getAllSuccess());
      dispatch(addEntities({ [STATE_KEY]: mobilities }));
    } catch (e) {
      dispatch(getAllFailure(e));
    }
  };
}
