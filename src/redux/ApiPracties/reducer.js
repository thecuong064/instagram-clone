import ApiActionTypes from './constants';

const initalImages = {
  data: [],
  error: undefined,
};

const imagesReducer = (state = initalImages, action) => {
  const {payload, type} = action;

  console.log(type);

  switch (type) {
    case ApiActionTypes.LOAD_IMAGES_SUCCESS: {
      return {
        data: payload,
        error: null,
      };
    }
    case ApiActionTypes.LOAD_IMAGES_FAILED: {
      return {
        data: [],
        error: payload,
      };
    }
    default:
      return state;
  }
};

export default imagesReducer;
