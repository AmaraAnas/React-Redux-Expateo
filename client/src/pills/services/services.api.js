import Service from '../../models/service.model';

import { servicesApi } from '../api/base.api';

/**
 * Example of working request
 * @example
 * servicesApi({
 *  ajaxAction: 'list',
 *  gApp: 'XPTO',
 *  gUsrId: '9058',
 *  gSesGuid: '8B1A7A0DE8549EE8A28E195573A2FD91',
 *  gAdmUsrId: null,
 *  gAdmSesGuid: null,
 *  gDevice: 'D',
 *  gNavigator: 'Chrome',
 *  gResolution: '789x657',
 * });
 */

/**
 * get list of services for the given user
 * @param {User} - the user where to retrieve sessionId and id field
 * @returns {Array<Service>} - return list of Service
 */
export async function getServices({ sessionId: gSesGuid, id: gUsrId }) {
  return servicesApi({
    gSesGuid,
    gUsrId,
    gAdmUsrId: null,
    gAdmSesGuid: null,
  }).then((rawServices) => rawServices.map((service) => new Service(service)));
}
