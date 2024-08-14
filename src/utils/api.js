import axios from 'axios';
import {getToken} from './async';

const baseURL = 'http://10.0.2.2:3000';
const api = axios.create({
  baseURL,
  headers: {
    'Content-Type': 'application/json',
  },
});

api.interceptors.request.use(
  async config => {
    const token = (await getToken()) || '';
    if (token) {
      config.headers.Authorization = token;
    }
    return config;
  },
  error => Promise.reject(error),
);

export default api;
