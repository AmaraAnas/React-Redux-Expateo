import axios from 'axios';

const api = axios.create({
  baseURL: 'https://www.expateo.com/dev_v2/ws/ajax/',
  headers: { 'Content-Type': 'application/json' },
  method: 'POST',
});

/**
 * Serves as a bottleneck of all requests.
 * Implenting cach service or request middleware will be more easier
 * Do not forget to return API(...args) to execute the request if no cach provided
 * Inspired by :
 * @see https://github.com/agraboso/redux-api-middleware#rsaafetch
 */
const apiCreator = (ajaxAction) => async (endpoint, options) =>
  api(endpoint, { ...options, ajaxAction });

export default apiCreator;
