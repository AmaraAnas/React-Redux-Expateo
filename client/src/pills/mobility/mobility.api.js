import { mobilityApi } from '../api/base.api';

import { getMobilityFromQuestionArray } from './mobility.questionMapping';

export async function getMobility({ sessionId: gSesGuid, id: gUsrId }) {
  return await mobilityApi({
    gSesGuid,
    gUsrId,
    gAdmUsrId: null,
    gAdmSesGuid: null,
  }).then((rawQuestion) => getMobilityFromQuestionArray(rawQuestion));
}
