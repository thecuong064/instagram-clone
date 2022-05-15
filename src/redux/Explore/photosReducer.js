import ApiActionTypes from './constants';

const initPhotos = {
  initData: [],
  data: [],
  error: undefined,
};

const photosReducer = (state = initPhotos, action) => {
  const {payload, type} = action;

  switch (type) {
    case ApiActionTypes.RELOAD_EXPLORE_PHOTOS_SUCCESS: {
      return {
        ...state,
        initData: payload,
        data: payload,
      };
    }
    case ApiActionTypes.RELOAD_EXPLORE_PHOTOS_FAILED: {
      return {
        ...state,
        data: state.initData,
        error: payload,
      };
    }
    case ApiActionTypes.GET_MORE_EXPLORE_PHOTOS_SUCCESS: {
      return {
        ...state,
        data: [...state.data, ...payload],
      };
    }
    case ApiActionTypes.GET_MORE_EXPLORE_PHOTOS_FAILED: {
      return {
        ...state,
        error: payload,
      };
    }
    default:
      return state;
  }
};

export default photosReducer;
