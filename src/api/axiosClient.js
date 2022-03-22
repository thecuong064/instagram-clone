import axios from 'axios';
import queryString from 'query-string';
import {handleErrorMessage} from '../utils/ErrorHandler';
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
    throw handleErrorMessage(error);
  },
);

export default axiosClient;
