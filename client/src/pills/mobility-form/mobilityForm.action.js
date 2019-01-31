import User from '../../models/user.model';

import * as MobilityFormApi from './mobilityForm.api';
import { userSelector } from '../auth/auth.selectors';

export function getInitialValues({
  onSuccess,
  onPending,
  onFailure,
  mobilityFormApi = MobilityFormApi,
}) {
  onPending();
  return async (dispatch, getState) => {
    try {
      let user = userSelector(getState());
      const data = await mobilityFormApi.load(user._gUsrLanguage);
      onSuccess(data);
    } catch (e) {
      onFailure();
    }
  };
}
