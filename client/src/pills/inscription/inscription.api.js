import Api from '../api/base.api';

export async function inscription(userInfo) {
  let data = {
    ajaxAction: 'subscribe_end_b2b',
    gApp: 'PG',
    gUsrGuid: userInfo.gUsrGuid,
    gFamilyGuid: userInfo.gFamilyGuid,
    gPassword: userInfo.gPassword,
    gAllowEmail: userInfo.gAllowEmail,
    gDepartureDate: userInfo.gDepartureDate,
    gFamille: userInfo.gFamille,
    gPrenomConjoint: userInfo.gPrenomConjoint,
    gPasswordConfirm: userInfo.gPasswordConfirm,
  };

  return new Promise((resolve, reject) => {
    setTimeout(() => {
      Api.post('/ws/ajax/ajax_usr.php', data)
        .then(({ data }) => {
          if (!data.CHECK_ERROR) {
            let user = { ...data, isLogged: true };
            resolve(user);
          } else resolve(data.CHECK_ERROR);
        })
        .catch(reject);
    }, 1250);
  });
}
