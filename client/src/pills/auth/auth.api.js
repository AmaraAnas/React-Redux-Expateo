import Api from '../api/base.api';

import {
  getNavigator,
  getResolution,
  isMobile,
  setSession,
  getSession,
} from '../../utils';

/*
export async function login(username, password) {
  let data = {
    ajaxAction: 'connect',
    gNavigator: getNavigator(),
    gResolution: getResolution(),
    gDevice: isMobile() ? 'M' : 'D',
    gApp: 'PG',
    USR_LANGUAGE: navigator.language.split('-')[0],
    USR_APP: 'XPTO',
    USR_REMEMBERME: true,
    USR_EMAIL: username,
    USR_PASSWORD: password,
  };

  return new Promise((resolve, reject) => {
    setTimeout(() => {
      Api.post('/ws/ajax/ajax_usr.php', data)
        .then(({ data }) => {
          let user = { ...data, isLogged: true };
          setSession(user);
          resolve(user);
        })
        .catch(reject);
    }, 1250);
  });
}

export async function loginAfterInscription(guid, familyid) {
  let data = {
    ajaxAction: 'connect',
    gNavigator: getNavigator(),
    gResolution: getResolution(),
    gDevice: isMobile() ? 'M' : 'D',
    gApp: 'XPTO',
    USR_LANGUAGE: navigator.language.split('-')[0],
    USR_APP: 'PG',
    USR_REMEMBERME_ID: guid,
    USR_REMEMBERME_FAMILY: familyid,
  };

  return new Promise((resolve, reject) => {
    setTimeout(() => {
      Api.post('/ws/ajax/ajax_usr.php', data)
        .then(({ data }) => {
          let user = { ...data, isLogged: true };
          setSession(user);
          resolve(user);
        })
        .catch(reject);
    }, 1250);
  });
}

export async function checkAuth(token) {
  let user = getSession();
  if (!user) {
    return Promise.resolve();
  }
  let data = {
    ajaxAction: 'connect',
    gNavigator: getNavigator(),
    gResolution: getResolution(),
    gDevice: isMobile() ? 'M' : 'D',
    gApp: 'PG',
    USR_LANGUAGE: navigator.language.split('-')[0],
    USR_APP: 'XPTO',
    USR_REMEMBERME: true,
    USR_REMEMBERME_EMAIL: user.gUsrEmail,
    USR_REMEMBERME_ID: user.gUsrGuid,
  };
  return Api.post('/ws/ajax/ajax_usr.php', data).then(({ data }) => {
    let user = { ...data, isLogged: true };
    setSession(user);
    return user;
  });
}
*/
export async function genericLogin(credentials, RememberMe, afterInscription) {
  let data = {
    ajaxAction: 'connect',
    gNavigator: getNavigator(),
    gResolution: getResolution(),
    gDevice: isMobile() ? 'M' : 'D',
    gApp: 'PG',
    USR_LANGUAGE: navigator.language.split('-')[0],
    USR_APP: 'XPTO',
    USR_REMEMBERME: true,
  };

  if (RememberMe) {
    let user = getSession();
    if (!user) {
      return Promise.resolve();
    } else {
      data['USR_REMEMBERME_EMAIL'] = user.gUsrEmail || '';
      data['USR_REMEMBERME_ID'] = user.gUsrGuid || '';
    }
  } else if (afterInscription) {
    data['USR_REMEMBERME_ID'] = credentials.guid || '';
    data['USR_REMEMBERME_FAMILY'] = credentials.family || '';
  } else {
    data['USR_EMAIL'] = credentials.username || '';
    data['USR_PASSWORD'] = credentials.password || '';
  }

  return new Promise((resolve, reject) => {
    setTimeout(() => {
      Api.post('/ws/ajax/ajax_usr.php', data)
        .then(({ data }) => {
          let user = { ...data, isLogged: true };
          setSession(user);
          resolve(user);
        })
        .catch(reject);
    }, 1250);
  });
}
