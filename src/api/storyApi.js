import {API_END_POINTS} from './apiUrls';
import axiosClient from './axiosClient';

const storyApi = {
  getAll: params => {
    const url = API_END_POINTS.getStories();
    return axiosClient.get(url, {params});
  },
};

export default storyApi;
