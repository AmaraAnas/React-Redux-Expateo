import axios from 'axios';

const API = axios.create({
  baseURL: 'https://www.expateo.com/dev_v2/',
});

export default API;
