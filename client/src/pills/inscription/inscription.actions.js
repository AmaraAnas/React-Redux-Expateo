import { createAction } from 'redux-actions';
import * as InscriptionApi from './inscription.api';
import { addPrefixToActionTypes } from '../../redux-utils/utils';
import * as AuthApi from '../auth/auth.api';

export const ACTION_TYPES = addPrefixToActionTypes(
  {
    INSCRIPTION_SUCCESS: 'INSCRIPTION_SUCCESS',
    INSCRIPTION_FAILURE: 'INSCRIPTION_FAILURE',
  },
  'inscription',
);

export const inscriptionSuccess = createAction(
  ACTION_TYPES.INSCRIPTION_SUCCESS,
);
const inscriptionFailure = createAction(ACTION_TYPES.INSCRIPTION_FAILURE);

export function inscription({
  userIDs,
  startDate,
  family,
  conjoint,
  password,
  confirmpassword,
  ads,
  onPending,
  onSuccess,
  onFailure,
  inscriptionApi = InscriptionApi,
}) {
  onPending();
  return async (dispatch) => {
    try {
      const userID = await inscriptionApi.inscription({
        gUsrGuid: userIDs.guid,
        gFamilyGuid: userIDs.family,
        gPassword: password,
        gAllowEmail: ads !== undefined ? 1 : 0,
        gDepartureDate: startDate,
        gFamille: family,
        gPrenomConjoint: conjoint,
        gPasswordConfirm: confirmpassword,
      });
      const user = await AuthApi.loginAfterInscription(
        userID.gUsrGuid,
        userIDs.family,
      );
      dispatch(inscriptionSuccess(user));
      onSuccess(user);
    } catch (e) {
      dispatch(inscriptionFailure(e));
      onFailure(e);
    }
  };
}
