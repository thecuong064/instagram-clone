import ApiActionTypes from './constants';

export const reloadExplorePhotos = (params, onSuccess, onFailed) => ({
  type: ApiActionTypes.RELOAD_EXPLORE_PHOTOS,
  payload: null,
  params: params,
  onSuccess: onSuccess,
  onFailed: onFailed,
});

export const reloadExplorePhotosSuccess = payload => ({
  type: ApiActionTypes.RELOAD_EXPLORE_PHOTOS_SUCCESS,
  payload: payload,
});

export const reloadExplorePhotosFailed = payload => ({
  type: ApiActionTypes.RELOAD_EXPLORE_PHOTOS_FAILED,
  payload: payload,
});

export const getMoreExplorePhotos = (params, onSuccess, onFailed) => ({
  type: ApiActionTypes.GET_MORE_EXPLORE_PHOTOS,
  payload: null,
  params: params,
  onSuccess: onSuccess,
  onFailed: onFailed,
});

export const getMoreExplorePhotosSuccess = payload => ({
  type: ApiActionTypes.GET_MORE_EXPLORE_PHOTOS_SUCCESS,
  payload: payload,
});

export const getMoreExplorePhotosFailed = payload => ({
  type: ApiActionTypes.GET_MORE_EXPLORE_PHOTOS_FAILED,
  payload: payload,
});
