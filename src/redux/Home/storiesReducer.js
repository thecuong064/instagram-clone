import ApiActionTypes from './constants';

const initStories = {
  data: [],
  error: undefined,
};

const storiesReducer = (state = initStories, action) => {
  const {payload, type} = action;

  console.log(type);

  switch (type) {
    case ApiActionTypes.LOAD_STORIES_SUCCESS: {
      return {
        data: payload,
        error: null,
      };
    }
    case ApiActionTypes.LOAD_STORIES_FAILED: {
      return {
        data: [],
        error: payload,
      };
    }
    default:
      return state;
  }
};

export default storiesReducer;
