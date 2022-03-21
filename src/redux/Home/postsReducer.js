import ApiActionTypes from './constants';

const initPosts = {
  initData: [],
  data: [],
  error: undefined,
};

const postsReducer = (state = initPosts, action) => {
  const {payload, type} = action;

  console.log(type);

  switch (type) {
    case ApiActionTypes.RELOAD_POSTS_SUCCESS: {
      return {
        initData: payload,
        data: payload,
        error: null,
      };
    }
    case ApiActionTypes.RELOAD_POSTS_FAILED: {
      return {
        ...state,
        data: state.initData,
        error: payload,
      };
    }
    case ApiActionTypes.GET_MORE_POSTS_SUCCESS: {
      return {
        ...state,
        data: [...state.data, ...payload],
        error: null,
      };
    }
    case ApiActionTypes.GET_MORE_POSTS_FAILED: {
      return {
        ...state,
        error: payload,
      };
    }
    default:
      return state;
  }
};

export default postsReducer;
