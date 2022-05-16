import ApiActionTypes from './constants';

const initStories = {
  data: [],
  error: null,
};

const storiesReducer = (state = initStories, action) => {
  const {payload, type} = action;

  switch (type) {
    case ApiActionTypes.LOAD_STORIES_SUCCESS: {
      return {
        ...state,
        data: payload,
      };
    }
    case ApiActionTypes.LOAD_STORIES_FAILED: {
      return {
        ...state,
        error: payload,
      };
    }
    default:
      return state;
  }
};

export default storiesReducer;
