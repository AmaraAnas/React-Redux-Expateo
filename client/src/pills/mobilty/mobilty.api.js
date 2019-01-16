import Mobilty from '../../models/mobilty.model';

import { mobilityApi } from '../api/base.api';

import { getNavigator, getResolution, isMobile } from '../../utils';

export async function getMobility({ sessionId: gSesGuid, id: gUsrId }) {
  let mobility = {
    id: 1,
    startDate: '',
    destination: '',
  };

  mobilityApi({
    gSesGuid,
    gUsrId,
    gAdmUsrId: null,
    gAdmSesGuid: null,
  }).then((rawQuestion) =>
    rawQuestion.map((question) => {
      if (question.QUE_GUID == 'QUE_20') {
        mobility.startDate = question.user_answer_done.USA_DATE;
      } else if (question.QUE_GUID == 'QUE_88') {
        mobility.destination = question.user_answer_done.USA_TEXT;
      }
    }),
  );

  return new Mobilty(mobility);
}
