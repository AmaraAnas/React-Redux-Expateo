import Mobility from '../../models/mobility.model';

import { mobilityApi } from '../api/base.api';

const mobQuestionsIDs = {
  mob_destination_QUE_GUID: 'QUE_88',
  mob_date_QUE_GUID: 'QUE_20',
};

export async function getMobility({ sessionId: gSesGuid, id: gUsrId }) {
  return await mobilityApi({
    gSesGuid,
    gUsrId,
    gAdmUsrId: null,
    gAdmSesGuid: null,
  }).then((rawQuestion) => {
    let mobility = {
      id: 1,
      startDate: null,
      destination: null,
    };
    rawQuestion.map((question) => {
      if (question.QUE_GUID == mobQuestionsIDs.mob_date_QUE_GUID) {
        if (
          question.hasOwnProperty('user_answer_done') &&
          question.user_answer_done[0] != null
        ) {
          mobility.startDate = question.user_answer_done[0].USA_DATE;
        }
      } else if (
        question.QUE_GUID == mobQuestionsIDs.mob_destination_QUE_GUID
      ) {
        if (
          question.hasOwnProperty('user_answer_done') &&
          question.user_answer_done[0] != null
        ) {
          mobility.destination = question.user_answer_done[0].USA_TEXT;
        }
      }
    });
    return new Mobility(mobility);
  });
}
