export const STAGING_API_BASE_URL =
  'https://my-json-server.typicode.com/thecuong064/json-server';
export const PRODUCTION_API_BASE_URL =
  'https://my-json-server.typicode.com/thecuong064/json-server';

export const API_BASE_URL = STAGING_API_BASE_URL;

export const API_END_POINTS = {
  getStories: () => {
    return `/stories`;
  },
  getPosts: params => {
    return `/posts`;
  },
  getExplorePhotos: params => {
    return `/photos`;
  },
};
