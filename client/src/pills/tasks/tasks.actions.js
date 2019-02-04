import { createAction } from 'redux-actions';

import { addPrefixToActionTypes } from '../../redux-utils/utils';
import { userSelector } from '../auth/auth.selectors';
import { addEntities } from '../schema/schema.actions';

import { STATE_KEY } from './tasks.selectors';
import { currentMobilitySelector } from '../mobilities/mobilities.selectors';

export const ACTION_TYPES = addPrefixToActionTypes(
  {
    GET_ALL_SUCCESS: 'GET_ALL_SUCCESS',
    GET_ALL_FAILURE: 'GET_ALL_FAILURE',
    GET_ALL_PENDING: 'GET_ALL_PENDING',
  },
  'tasks',
);

export const getAllSuccess = createAction(ACTION_TYPES.GET_ALL_SUCCESS);
export const getAllFailure = createAction(ACTION_TYPES.GET_ALL_FAILURE);
export const getAllPending = createAction(ACTION_TYPES.GET_ALL_PENDING);

export function getTasks() {
  return async (dispatch, getState, { api }) => {
    dispatch(getAllPending());
    const state = getState();
    const user = userSelector(state);
    const currentMobility = currentMobilitySelector(state);
    try {
      const tasks = await api.tasks.getTasks(user, currentMobility);
      dispatch(getAllSuccess());
      dispatch(addEntities({ [STATE_KEY]: tasks }));
    } catch (e) {
      dispatch(getAllFailure(e));
    }
  };
}
