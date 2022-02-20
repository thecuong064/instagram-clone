import {API_END_POINTS} from './apiUrls';
import axiosClient from './axiosClient';

const userApis = {
  getAllUsers: () => {
    const url = API_END_POINTS.getUsers();
    console.log(url);
    return axiosClient.get(url);
  },
  getUser: id => {
    const url = API_END_POINTS.getUser(id);
    console.log(url);
    return axiosClient.get(url);
  },
};

export default userApis;
