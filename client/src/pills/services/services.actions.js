import { createAction } from 'redux-actions';

import { addPrefixToActionTypes } from '../../redux-utils/utils';
import { userSelector } from '../auth/auth.selectors';
import { currentMobilitySelector } from '../mobilities/mobilities.selectors';
import { addEntities } from '../schema/schema.actions';

import { STATE_KEY } from './services.selectors';

export const ACTION_TYPES = addPrefixToActionTypes(
  {
    GET_ALL_SUCCESS: 'GET_ALL_SUCCESS',
    GET_ALL_FAILURE: 'GET_ALL_FAILURE',
    GET_ALL_PENDING: 'GET_ALL_PENDING',
  },
  'services',
);

export const getAllSuccess = createAction(ACTION_TYPES.GET_ALL_SUCCESS);
export const getAllFailure = createAction(ACTION_TYPES.GET_ALL_FAILURE);
export const getAllPending = createAction(ACTION_TYPES.GET_ALL_PENDING);

export function getServices() {
  return async (dispatch, getState, { api }) => {
    dispatch(getAllPending());
    const state = getState();
    let user = userSelector(state);
    let currentMobility = currentMobilitySelector(state);
    try {
      const services = await api.services.getServices(user, currentMobility);
      dispatch(getAllSuccess());
      dispatch(addEntities({ [STATE_KEY]: services }));
    } catch (e) {
      dispatch(getAllFailure(e));
    }
  };
}
