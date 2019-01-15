import Theme from '../../models/theme.model';

import { themesApi } from '../api/base.api';

// themesApi({
//   ajaxAction: 'list',
//   gApp: 'XPTO',
//   gUsrEmail: 'miyuki.etan20180928@expateotest.com',
//   gUsrGuid: '9570E5E3C4A0859CF18220E7E21CC4A4',
//   gUsrId: '9058',
//   gSesGuid: '70787DCE2C4D8F8737B9C3DFC22D05E3',
//   gAdmUsrId: null,
//   gAdmSesGuid: null,
//   gDevice: 'D',
//   gNavigator: 'Chrome',
//   gResolution: '789x657',
// }).then((res) => {
//   debugger;
// });

/**
 * get list of themes for the given user
 * @param {User} - the user where to retrieve sessionId and id field
 * @returns {Array<Theme>} - return list of Theme
 */
export async function getThemes({ sessionId: gSesGuid, id: gUsrId }) {
  return themesApi({
    gSesGuid,
    gUsrId,
    gAdmUsrId: null,
    gAdmSesGuid: null,
  }).then((rawThemes) => rawThemes.map((theme) => new Theme(theme)));
}

// /**
//   // TODO : do we need it ?
//  * get list of sub-themes for the given user and the given theme
//  * @param {User} - the user where to retrieve sessionId and id field
//  * @param {Theme} - the theme where to retrieve id field
//  * @returns {Array<Subtheme>} - return list of Theme
//  */
// export async function getSubThemes(
//   { sessionId: gSesGuid, id: gUsrId },
//   { id: STH_THEME_GUID },
// ) {
//   return themesApi({
//     gSesGuid,
//     gUsrId,
//     gAdmUsrId: null,
//     gAdmSesGuid: null,
//     STH_THEME_GUID,
//   }).then((rawSubThemes) => rawSubThemes.map((theme) => new Subtheme(theme))); // TODO: Do the Subtheme model
// }

// /**
//  * get list of themes populated with sub themes for the given user
//  * @param {User} - the user where to retrieve sessionId and id field
//  * @returns {Array<Theme>} - return list of Theme
//  */
// export async function getThemesWithSubThemes(user) {
// }
