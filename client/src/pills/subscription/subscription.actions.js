import { loginSuccess, loginFailure } from '../auth/auth.actions';
import User from '../../models/user.model';

import { userSelector } from '../auth/auth.selectors';
import { addEntities } from '../schema/schema.actions';
import {
  STATE_KEY,
  mobilitiesSelector,
} from '../mobilities/mobilities.selectors';

// TODO: test it
export function mobilityActivation({
  onSuccess,
  onPending,
  onFailure,
  userGuid,
  familyGuid,
  clGuid,
  ...fields
}) {
  onPending();
  return async (dispatch, getState, { api }) => {
    try {
      const rawSubscribtion = await api.subscription.subscribe({
        familyGuid,
        userGuid,
        clGuid,
        ...fields,
      });
      if (rawSubscribtion.CHECK_ERROR) {
        throw Error(rawSubscribtion.CHECK_ERROR);
      }
      const store = getState();
      const user = userSelector(store);
      const currentMobilities = mobilitiesSelector(store);
      const currentMoblity = currentMobilities.find((m) => m.guid === clGuid);
      const mobilities = await api.mobilities.setCurrentMobility(
        user,
        currentMoblity,
      );
      dispatch(addEntities({ [STATE_KEY]: mobilities }));
      onSuccess();
    } catch (e) {
      onFailure(e);
    }
  };
}
// TODO: test it
export function setPassword({
  onSuccess,
  onPending,
  onFailure,
  userGuid,
  familyGuid,
  clGuid,
  ...fields
}) {
  onPending();
  return async (dispatch, getState, { api }) => {
    try {
      const rawSubscribtion = await api.subscription.subscribe({
        familyGuid,
        userGuid,
        clGuid,
        ...fields,
      });
      if (rawSubscribtion.CHECK_ERROR) {
        throw Error(rawSubscribtion.CHECK_ERROR);
      }
      const rawUser = await api.auth.afterInscriptionLogin({
        rememberMeId: fields.userGuid,
        familyId: fields.familyGuid,
      });
      const user = new User(rawUser);
      dispatch(loginSuccess(user));
      onSuccess(user);
    } catch (e) {
      dispatch(loginFailure(e));
      onFailure(e);
    }
  };
}
// TODO: test it
export function getInitialValues({
  onSuccess,
  onPending,
  onFailure,
  userGuid,
  familyGuid,
  clGuid,
}) {
  onPending();
  return async (dispatch, getState, { api }) => {
    try {
      const data = await api.subscription.load({
        userGuid,
        familyGuid,
        clGuid,
      });
      onSuccess(data);
    } catch (e) {
      onFailure();
    }
  };
}
