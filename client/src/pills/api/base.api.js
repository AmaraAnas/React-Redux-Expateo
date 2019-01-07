import axios from 'axios';

const api = axios.create({
  baseURL: 'https://www.expateo.com/dev_v2/ws/ajax/', // TODO: envify this url
  headers: { 'Content-Type': 'application/json' },
  method: 'POST',
});

export const AJAX_ACTIONS = {
  CONNECT: 'connect',
};

export const ENDPOINTS = {
  AUTH: '/ajax_usr.php',
};

/**
 * Serves as a bottleneck of all requests.
 * Implenting cach service or request middleware will be more easier
 * Do not forget to return API(...args) to execute the request if no cach provided
 * Inspired by :
 * @see https://github.com/agraboso/redux-api-middleware#rsaafetch
 */
const apiCreator = (ajaxAction) => (url) => async (data) =>
  api({ url, data: { ajaxAction, ...data } });

export const authApi = apiCreator(AJAX_ACTIONS.CONNECT)(ENDPOINTS.AUTH);

export default apiCreator;
