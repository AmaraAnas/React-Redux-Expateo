import Mobility from '../../models/mobility.model';

import { mobilityApi } from '../api/base.api';

//TODO : Refacto to remove magic strings
export async function getMobility({ sessionId: gSesGuid, id: gUsrId }) {
  return await mobilityApi({
    gSesGuid,
    gUsrId,
    gAdmUsrId: null,
    gAdmSesGuid: null,
  }).then((rawQuestion) => {
    let mobility = {
      id: 1,
      startDate: '',
      destination: '',
    };
    rawQuestion.map((question) => {
      if (question.QUE_GUID == 'QUE_20') {
        mobility.startDate = question.user_answer_done[0].USA_DATE;
      } else if (question.QUE_GUID == 'QUE_88') {
        mobility.destination = question.user_answer_done[0].USA_TEXT;
      }
    });
    return new Mobility(mobility);
  });
}
