import { profilesApi } from '../api/base.api';
import Profile from '../../models/profile.model';

/**
 * Example of working request
 * @example
 * getProfiles({
 *  gUsrId: '9058',
 *  gSesGuid: '8B1A7A0DE8549EE8A28E195573A2FD91',
 * });
 */

/**
 * get list of profile for the given user
 * @param {User} - the user where to retrieve sessionId and id field
 * @returns {Array<Profile>} - return list of profile
 */
export async function getProfiles({ sessionId: gSesGuid, id: gUsrId }) {
  const rawProfiles = await profilesApi({
    gSesGuid,
    gUsrId,
    gAdmUsrId: null,
    gAdmSesGuid: null,
  });
  return rawProfiles.map((rawProfil) => new Profile(rawProfil));
}
