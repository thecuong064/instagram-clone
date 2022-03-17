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

export const reloadPosts = (params, onSuccess, onFailed) => ({
  type: ApiActionTypes.RELOAD_POSTS,
  payload: null,
  params: params,
  onSuccess: onSuccess,
  onFailed: onFailed,
});

export const reloadPostsSuccess = payload => ({
  type: ApiActionTypes.RELOAD_POSTS_SUCCESS,
  payload: payload,
});

export const reloadPostsFailed = payload => ({
  type: ApiActionTypes.RELOAD_POSTS_FAILED,
  payload: payload,
});

export const getMorePosts = (params, onSuccess, onFailed) => ({
  type: ApiActionTypes.GET_MORE_POSTS,
  payload: null,
  params: params,
  onSuccess: onSuccess,
  onFailed: onFailed,
});

export const getMorePostsSuccess = payload => ({
  type: ApiActionTypes.GET_MORE_POSTS_SUCCESS,
  payload: payload,
});

export const getMorePostsFailed = payload => ({
  type: ApiActionTypes.GET_MORE_POSTS_FAILED,
  payload: payload,
});
