import axios from 'axios';
import queryString from 'query-string';
import {API_BASE_URL} from './apiUrls';

const axiosClient = axios.create({
  baseURL: API_BASE_URL,
  headers: {
    'content-type': 'application/json',
  },
  paramsSerializer: params => queryString.stringify(params),
});

axiosClient.interceptors.request.use(config => {
  // Handle token here.
  return config;
});

axiosClient.interceptors.response.use(
  response => {
    if (response && response.data) {
      return response.data;
    }

    return response;
  },
  error => {
    // handle error
    throw error;
  },
);

export default axiosClient;
