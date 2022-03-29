import {API_END_POINTS} from './apiUrls';
import axiosClient from './axiosClient';

const exploreApi = {
  getExplorePhotos: params => {
    const url = API_END_POINTS.getExplorePhotos();
    return axiosClient.get(url, {
      params: params,
      baseURL: 'https://jsonplaceholder.typicode.com/',
    });
  },
};

export default exploreApi;
