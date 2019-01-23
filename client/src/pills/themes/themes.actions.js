import { createAction } from 'redux-actions';

import { addPrefixToActionTypes } from '../../redux-utils/utils';
import { userSelector } from '../auth/auth.selectors';
import { addEntities } from '../schema/schema.actions';
import { currentMobilitySelector } from '../mobilities/mobilities.selectors';

import { STATE_KEY } from './themes.selectors';

export const ACTION_TYPES = addPrefixToActionTypes(
  {
    GET_ALL_SUCCESS: 'GET_ALL_SUCCESS',
    GET_ALL_FAILURE: 'GET_ALL_FAILURE',
    GET_ALL_PENDING: 'GET_ALL_PENDING',
  },
  'themes',
);

export const getAllSuccess = createAction(ACTION_TYPES.GET_ALL_SUCCESS);
export const getAllFailure = createAction(ACTION_TYPES.GET_ALL_FAILURE);
export const getAllPending = createAction(ACTION_TYPES.GET_ALL_PENDING);

export function getThemes() {
  return async (dispatch, getState, { api }) => {
    dispatch(getAllPending());
    const state = getState();
    const user = userSelector(state);
    const currentMobility = currentMobilitySelector(state);
    try {
      const themes = await api.themes.getThemes(user, currentMobility);
      dispatch(getAllSuccess());
      dispatch(addEntities({ [STATE_KEY]: themes }));
    } catch (e) {
      dispatch(getAllFailure(e));
    }
  };
}
