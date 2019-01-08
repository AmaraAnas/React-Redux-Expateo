import Api from '../api/base.api';
import { getNavigator, getResolution, isMobile } from '../../utils';

export async function getUserDetails(userInfo) {
  let data = {
    ajaxAction: 'list',
    gApp: 'PG',
    gUsrId: userInfo.gUsrId,
    gSesGuid: userInfo.gSesGuid,
    gNavigator: getNavigator(),
    gResolution: getResolution(),
    gDevice: isMobile() ? 'M' : 'D',
    gWithAdditional: '1',
  };

  return new Promise((resolve, reject) => {
    setTimeout(() => {
      Api.post('/ws/ajax/ajax_usr.php', data)
        .then(({ data }) => {
          if (!data.CHECK_ERROR) {
            let userDetails = { ...data };
            resolve(userDetails);
          } else resolve(data.CHECK_ERROR);
        })
        .catch(reject);
    }, 1250);
  });
}
