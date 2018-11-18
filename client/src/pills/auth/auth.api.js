import axios from 'axios';
const API = axios.create({
  baseURL: 'https://www.expateo.com/dev_v2/',
});
/**
 * @returns {string}
 */
export function getResolution() {
  return window.screen.width + 'x' + window.screen.height;
}

/**
 * @returns {boolean}
 */
export function isMobile() {
  return /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);
}

/**
 * @returns {boolean}
 */
export function isIOS() {
  return /iPhone|iPad|iPod/i.test(navigator.userAgent);
}

/**
 * @returns {string}
 */
export function getNavigator() {
  let ua = navigator.userAgent,
    tem,
    M =
      ua.match(
        /(opera|chrome|safari|firefox|msie|trident(?=\/))\/?\s*(\d+)/i,
      ) || [];
  if (/trident/i.test(M[1])) {
    tem = /\brv[ :]+(\d+)/g.exec(ua) || [];
    return 'IE ' + (tem[1] || '');
  }
  if (M[1] === 'Chrome') {
    tem = ua.match(/\b(OPR|Edge)\/(\d+)/);
    if (tem != null)
      return tem
        .slice(1)
        .join(' ')
        .replace('OPR', 'Opera');
  }
  M = M[2] ? [M[1], M[2]] : [navigator.appName, navigator.appVersion, '-?'];
  if ((tem = ua.match(/version\/(\d+)/i)) != null) M.splice(1, 1, tem[1]);
  return M[0];
}

export function getSession() {
  try {
    return JSON.parse(localStorage.getItem('session'));
  } catch (e) {
    return {};
  }
}

export function setSession(user) {
  localStorage.setItem('session', JSON.stringify(user));
}

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
      API.post('/ws/ajax/ajax_usr.php', data)
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
  return API.post('/ws/ajax/ajax_usr.php', data).then(({ data }) => {
    let user = { ...data, isLogged: true };
    setSession(user);
    return user;
  });
}
