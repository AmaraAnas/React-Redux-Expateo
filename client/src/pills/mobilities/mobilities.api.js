import { mobilitiesApi } from '../api/base.api';
import Mobility from '../../models/mobility.model';

const QUESTION_GUIDS = new Set([
  'QUE_20', // startDate
  'QUE_88', // destination
]);

/**
 * Example of working request
 * @example
 * getMobilities({
 *  gUsrId: '9058',
 *  gSesGuid: '8B1A7A0DE8549EE8A28E195573A2FD91',
 * });
 */

/**
 * get list of mobilities for the given user
 * @param {User} - the user where to retrieve sessionId and id field
 * @returns {Array<Mobility>} - return list of mobility
 */

export async function getMobilities({ sessionId: gSesGuid, id: gUsrId }) {
  const rawQuestions = await mobilitiesApi({
    gSesGuid,
    gUsrId,
    gAdmUsrId: null,
    gAdmSesGuid: null,
  });

  return rawQuestions
    .filter((question) => QUESTION_GUIDS.has(question.QUE_GUID))
    .reduce((acc, question) => [{ ...acc[0], [question.QUE_GUID]: question }], [
      {},
    ]) // transform to array to emulates multiples mobilities
    .map((rawMobility) => new Mobility(rawMobility));
}