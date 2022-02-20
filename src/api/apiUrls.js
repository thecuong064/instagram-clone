export const STAGING_API_BASE_URL = 'https://jsonplaceholder.typicode.com';
export const PRODUCTION_API_BASE_URL = 'https://jsonplaceholder.typicode.com/=';

export const API_BASE_URL = STAGING_API_BASE_URL;

export const API_END_POINTS = {
  getUsers: () => {
    return '/users';
  },
  getUser: id => {
    return `/users/${id}`;
  },
  getPhotos: () => {
    return `/photos`;
  },
  getPosts: params => {
    return `/posts`;
  },
};
