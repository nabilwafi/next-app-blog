import axios from 'axios';
import { API_BASE_URL, NEXT_PUBLIC_TOKEN } from '@/utils/constant';

axios.defaults.baseURL = API_BASE_URL;

axios.interceptors.request.use(
  (config) => {
    config.headers.Authorization = `Bearer ${NEXT_PUBLIC_TOKEN}`;
    return config;
  },
  (err) => {
    Promise.reject(err);
  },
);

export default axios;
