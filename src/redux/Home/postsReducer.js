import ApiActionTypes from './constants';

const initPosts = {
  data: [],
  error: undefined,
};

const postsReducer = (state = initPosts, action) => {
  const {payload, type} = action;

  console.log(type);

  switch (type) {
    case ApiActionTypes.LOAD_POSTS_SUCCESS: {
      return {
        data: payload,
        error: null,
      };
    }
    case ApiActionTypes.LOAD_POSTS_FAILED: {
      return {
        data: [],
        error: payload,
      };
    }
    default:
      return state;
  }
};

export default postsReducer;
