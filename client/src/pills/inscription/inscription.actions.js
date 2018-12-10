import { createAction } from 'redux-actions';
import * as InscriptionApi from './inscription.api';
import { addPrefixToActionTypes } from '../../redux-utils/utils';

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
  startDate,
  family,
  conjoint,
  password,
  confirmpassword,
  ads,
  onSuccess,
  onFailure,
  inscriptionApi = InscriptionApi,
}) {
  return async (dispatch) => {
    try {
      const user = await inscriptionApi.inscription({
        gUsrGuid: 'E81161C70D3DF2ED35A2756D4368E57B',
        gFamilyGuid: '4E1084EEF26CDE24C8C00166C12DCB61',
        gPassword: password,
        gAllowEmail: ads,
        gDepartureDate: startDate,
        gFamille: family,
        gPrenomConjoint: conjoint,
        gPasswordConfirm: confirmpassword,
      });
      dispatch(inscriptionSuccess(user));
      onSuccess(user);
    } catch (e) {
      dispatch(inscriptionFailure(e));
      onFailure(e);
    }
  };
}
