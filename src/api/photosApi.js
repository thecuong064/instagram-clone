import {API_END_POINTS} from './apiUrls';
import axiosClient from './axiosClient';

const photosApi = {
  getAll: params => {
    const url = API_END_POINTS.getPhotos();
    return axiosClient.get(url, {params});
  },
};

export default photosApi;
