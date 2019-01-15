import axios from 'axios';

import { getNavigator, getResolution, isMobile } from '../../utils';

const api = axios.create({
  baseURL: 'https://www.expateo.com/dev_v2/ws/ajax/', // TODO: envify this url
  headers: { 'Content-Type': 'application/json' },
  method: 'POST',
});

const baseData = {
  gNavigator: getNavigator(),
  gResolution: getResolution(),
  gDevice: isMobile() ? 'M' : 'D',
  gApp: 'PG',
  USR_LANGUAGE: navigator.language.split('-')[0],
  USR_APP: 'XPTO',
  USR_REMEMBERME: true, //TODO: working as remberme is always checked - we should implment this
};

export const AJAX_ACTIONS = {
  CONNECT: 'connect',
  INSCRIPTION_B2B: 'subscribe_end_b2b',
  LIST: 'list',
};

export const ENDPOINTS = {
  USR: '/ajax_usr.php',
  TASK: '/ajax_uta.php',
  SERVICE: '/ajax_usc.php',
  THEME: '/ajax_the.php',
};

/**
 * Serves as a bottleneck of all requests.
 * Implenting cach service or request middleware will be more easier
 * Do not forget to return API(...args) to execute the request if no cach provided
 * Inspired by :
 * @see https://github.com/agraboso/redux-api-middleware#rsaafetch
 */
const apiCreator = (ajaxAction) => (url) => async (data) => {
  const res = await api({ url, data: { ajaxAction, ...baseData, ...data } });
  // As marked into the doc, if gSesGuid is === 0 then an error occur (like 403 response !)
  // So we throw an error
  if (res.status === 200 && res.data.gSesGuid !== 0) {
    return res.data;
  } else {
    throw new Error(JSON.stringify(res.data));
  }
};

export const authApi = apiCreator(AJAX_ACTIONS.CONNECT)(ENDPOINTS.USR);
export const subscribeApi = apiCreator(AJAX_ACTIONS.INSCRIPTION_B2B)(
  ENDPOINTS.USR,
);
export const themesApi = apiCreator(AJAX_ACTIONS.LIST)(ENDPOINTS.THEME);
export const servicesApi = apiCreator(AJAX_ACTIONS.LIST)(ENDPOINTS.SERVICE);
export const tasksApi = apiCreator(AJAX_ACTIONS.LIST)(ENDPOINTS.TASK);

export default apiCreator;
