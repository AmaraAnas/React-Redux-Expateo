import { mobilitiesApi } from '../api/base.api';
import Mobility from '../../models/mobility.model';

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
  const rawMobilities = await mobilitiesApi.list({
    gSesGuid,
    gUsrId,
    gAdmUsrId: null,
    gAdmSesGuid: null,
  });
  return rawMobilities.map((rawMobility) => new Mobility(rawMobility));
}

/**
 * update the given mobility
 * @param {User} user - the user where to retrieve sessionId and id field
 * @param {Mobility} mobility  - the mobiliy where to retrieve guid to fetch it
 * @param {Object} fieldsForm - fields used to updated the mobility
 * @param {String} fieldsForm.startDate - "2019-02-21"
 * @param {String} fieldsForm.family  - "FAMILLE_PACS"
 * @param {String} fieldsForm.conjoint  - "Dominique"
 * @param {String} fieldsForm.children  - "CHILD_COUNT_<0|1|2|X>"
 * @returns {Mobility} - return updated mobility
 */
// TODO: test it
export async function updateMobility(
  { sessionId: gSesGuid, id: gUsrId },
  { guid: UCK_GUID },
  {
    startDate: UCK_DEPARTURE_DATETIME,
    family: UCK_FAMILY_STATUS,
    conjoint: UCK_SPOUSE_FIRSTNAME,
    children: UCK_CHILD_COUNT,
  },
) {
  const rawUpdatedMobility = await mobilitiesApi.update({
    gSesGuid,
    gUsrId,
    UCK_GUID,
    UCK_DEPARTURE_DATETIME,
    UCK_FAMILY_STATUS,
    UCK_SPOUSE_FIRSTNAME,
    UCK_CHILD_COUNT,
  });
  return new Mobility(rawUpdatedMobility);
}

/**
 * set the current mobility at the given mobility list of mobilities for the given user
 * @param {User} - the user where to retrieve sessionId and id field
 * @param {Mobility} - the mobiliy where to retrieve guid to set it as current
 * @returns {Array<Mobility>} - return list of mobility
 */
// TODO: test it
export async function setCurrentMobility(
  { sessionId: gSesGuid, id: gUsrId },
  { guid: UCK_GUID },
) {
  const rawMobilities = await mobilitiesApi.defineCurrent({
    gSesGuid,
    gUsrId,
    UCK_GUID,
  });
  return rawMobilities.map((rawMobility) => new Mobility(rawMobility));
}
