import { afterInscriptionLogin } from '../auth/auth.api';
import { loginSuccess, loginFailure } from '../auth/auth.actions';
import User from '../../models/user.model';

import * as InscriptionApi from './inscription.api';

export function inscription({
  onPending,
  onSuccess,
  onFailure,
  inscriptionApi = InscriptionApi,
  ...fields
}) {
  onPending();
  return async (dispatch) => {
    try {
      const rawSubscribtion = await inscriptionApi.subscribe(fields);
      if (rawSubscribtion.CHECK_ERROR) {
        throw Error(rawSubscribtion.CHECK_ERROR);
      }
      const rawUser = await afterInscriptionLogin({
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
