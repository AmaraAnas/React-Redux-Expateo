import { createAction } from 'redux-actions';

import { addPrefixToActionTypes } from '../../redux-utils/utils';
import { userSelector } from '../auth/auth.selectors';
import {
  currentMobilitySelector,
  mobilitiesSelector,
} from './mobilities.selectors';

import { addEntities } from '../schema/schema.actions';

import { STATE_KEY } from './mobilities.selectors';

export const ACTION_TYPES = addPrefixToActionTypes(
  {
    GET_ALL_SUCCESS: 'GET_ALL_SUCCESS',
    GET_ALL_FAILURE: 'GET_ALL_FAILURE',
    GET_ALL_PENDING: 'GET_ALL_PENDING',

    SET_CURRENT_PENDING: 'SET_CURRENT_PENDING',
    SET_CURRENT_SUCCESS: 'SET_CURRENT_SUCCESS',
    SET_CURRENT_FAILURE: 'SET_CURRENT_FAILURE',

    UPDATE_PENDING: 'UPDATE_PENDING',
    UPDATE_SUCCESS: 'UPDATE_SUCCESS',
    UPDATE_FAILURE: 'UPDATE_FAILURE',
  },
  'moblities',
);

export const getAllSuccess = createAction(ACTION_TYPES.GET_ALL_SUCCESS);
export const getAllFailure = createAction(ACTION_TYPES.GET_ALL_FAILURE);
export const getAllPending = createAction(ACTION_TYPES.GET_ALL_PENDING);

export const setCurrentPending = createAction(ACTION_TYPES.SET_CURRENT_PENDING);
export const setCurrentSuccess = createAction(ACTION_TYPES.SET_CURRENT_SUCCESS);
export const setCurrentFailure = createAction(ACTION_TYPES.SET_CURRENT_FAILURE);

export const updateMobilityPending = createAction(ACTION_TYPES.UPDATE_PENDING);
export const updateMobilitySuccess = createAction(ACTION_TYPES.UPDATE_SUCCESS);
export const updateMobilityFailure = createAction(ACTION_TYPES.UPDATE_FAILURE);

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

// TODO: test it
export function setCurrentMobility({ mobility, onSuccess, onFailure }) {
  return async (dispatch, getState, { api }) => {
    dispatch(setCurrentPending());
    let user = userSelector(getState());
    try {
      const mobilities = await api.mobilities.setCurrentMobility(
        user,
        mobility,
      );
      dispatch(setCurrentSuccess());
      dispatch(addEntities({ [STATE_KEY]: mobilities }));
      onSuccess();
    } catch (e) {
      dispatch(setCurrentFailure());
      onFailure(e);
    }
  };
}

export function updateMobility({ onPending, onSuccess, onFailure, ...fields }) {
  onPending();
  return async (dispatch, getState, { api }) => {
    dispatch(updateMobilityPending());
    const store = getState();
    let user = userSelector(store);
    let mobilities = mobilitiesSelector(store);
    let mobility = currentMobilitySelector(store);

    try {
      const updatedmobility = await api.mobilities.updateMobility(
        user,
        mobility,
        fields,
      );
      let mobilityIndex = mobilities.findIndex((mob) => mob.id == mobility.id);
      mobilities[mobilityIndex] = updatedmobility;
      dispatch(updateMobilitySuccess());
      dispatch(addEntities({ [STATE_KEY]: mobilities }));
      onSuccess();
    } catch (e) {
      dispatch(updateMobilityFailure(e));
      onFailure(e);
    }
  };
}
