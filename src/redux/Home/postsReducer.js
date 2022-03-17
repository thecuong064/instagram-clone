import ApiActionTypes from './constants';

const initPosts = {
  data: [],
  error: undefined,
};

const postsReducer = (state = initPosts, action) => {
  const {payload, type} = action;

  console.log(type);

  switch (type) {
    case ApiActionTypes.RELOAD_POSTS_SUCCESS: {
      return {
        data: payload,
        error: null,
      };
    }
    case ApiActionTypes.RELOAD_POSTS_FAILED: {
      return {
        data: [],
        error: payload,
      };
    }
    case ApiActionTypes.GET_MORE_POSTS_SUCCESS: {
      return {
        data: [...state.data, ...payload],
        error: null,
      };
    }
    case ApiActionTypes.GET_MORE_POSTS_FAILED: {
      return {
        data: state.data,
        error: payload,
      };
    }
    default:
      return state;
  }
};

export default postsReducer;
