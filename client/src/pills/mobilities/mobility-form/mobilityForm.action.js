import User from '../../../models/user.model';
import { userSelector } from '../../auth/auth.selectors';
import * as traductionApi from '../../api/traduction.api';

async function load(language) {
  const childrawData = await traductionApi.loadField({
    language,
    table: 'childcount',
  });
  const familyrawData = await traductionApi.loadField({
    language,
    table: 'familystatus',
  });

  return {
    childFieldOptions: Object.entries(childrawData.translations).map(
      ([value, text]) => ({ value, text }),
    ),
    familyFieldOptions: Object.entries(familyrawData.translations).map(
      ([value, text]) => ({ value, text }),
    ),
  };
}

export function getInitialValues({ onSuccess, onPending, onFailure }) {
  onPending();
  return async (dispatch, getState) => {
    try {
      let user = userSelector(getState());
      const data = await load(user._gUsrLanguage);
      onSuccess(data);
    } catch (e) {
      onFailure();
    }
  };
}
