import { loginSuccess, loginFailure } from '../auth/auth.actions';
import User from '../../models/user.model';

// TODO: test it
export function setPassword({
  onSuccess,
  onPending,
  onFailure,
  userGuid,
  familyGuid,
  ...fields
}) {
  onPending();
  return async (dispatch, getState, { api }) => {
    try {
      const rawSubscribtion = await api.subscription.subscribe({
        familyGuid,
        userGuid,
        ...fields,
      });
      if (rawSubscribtion.CHECK_ERROR) {
        throw Error(rawSubscribtion.CHECK_ERROR);
      }
      const rawUser = await api.auth.afterInscriptionLogin({
        rememberMeId: userGuid,
        familyId: familyGuid,
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
export function checkIsPasswordAlreadyInitialized({
  onSuccess,
  onPending,
  onFailure,
  userGuid,
  familyGuid,
}) {
  onPending();
  return async (dispatch, getState, { api }) => {
    try {
      const data = await api.subscription.isPasswordAlreadyInitialized({
        userGuid,
        familyGuid,
      });
      onSuccess(data);
    } catch (e) {
      onFailure();
    }
  };
}
