import axios from 'axios';
const API = axios.create({
  baseURL: 'https://www.expateo.com/dev_v2/',
});

export function setSession(user) {
  localStorage.setItem('session', JSON.stringify(user));
}

export async function inscription(userInfo) {
  console.log(userInfo);
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
      API.post('/ws/ajax/ajax_usr.php', data)
        .then(({ data }) => {
          console.log(data);
          if (!data.CHECK_ERROR) {
            let user = { ...data, isLogged: true };
            resolve(user);
          } else resolve(data.CHECK_ERROR);
        })
        .catch(reject);
    }, 1250);
  });
}

export async function checkPassword(password) {
  let data = {
    ajaxAction: 'ctrlpassword',
    USR_PASSWORD: password,
  };
  return API.post('/ws/ajax/ajax_usr.php', data).then(({ data }) => {
    return data;
  });
}
