import ApiActionTypes from './constants';

export const getStories = (onSuccess, onFailed) => ({
  type: ApiActionTypes.GET_STORIES,
  payload: null,
  onSuccess: onSuccess,
  onFailed: onFailed,
});

export const loadStoriesSuccess = payload => ({
  type: ApiActionTypes.LOAD_STORIES_SUCCESS,
  payload: payload,
});

export const loadStoriesFailed = payload => ({
  type: ApiActionTypes.LOAD_STORIES_FAILED,
  payload: payload,
});

export const getPosts = (onSuccess, onFailed) => ({
  type: ApiActionTypes.GET_POSTS,
  payload: null,
  onSuccess: onSuccess,
  onFailed: onFailed,
});

export const loadPostsSuccess = payload => ({
  type: ApiActionTypes.LOAD_POSTS_SUCCESS,
  payload: payload,
});

export const loadPostsFailed = payload => ({
  type: ApiActionTypes.LOAD_POSTS_FAILED,
  payload: payload,
});
