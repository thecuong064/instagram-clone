import {API_END_POINTS} from './apiUrls';
import axiosClient from './axiosClient';

const postApi = {
  getAllPosts: params => {
    const url = API_END_POINTS.getPosts();
    return axiosClient.get(url, {params});
  },
};

export default postApi;
