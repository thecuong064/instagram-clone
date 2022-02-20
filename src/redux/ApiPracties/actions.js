import ApiActionTypes from './constants';

export const getImages = () => ({
  type: ApiActionTypes.GET_IMAGES,
  payload: null,
});

export const loadImagesSuccess = payload => ({
  type: ApiActionTypes.LOAD_IMAGES_SUCCESS,
  payload: payload,
});

export const loadImagesFailed = payload => ({
  type: ApiActionTypes.LOAD_IMAGES_FAILED,
  payload: payload,
});
