import CommonActionTypes from './constants';

export const changeUser = payload => ({
  type: CommonActionTypes.USER_CHANGE,
  payload: payload,
});

export const clearUser = () => ({
  type: CommonActionTypes.USER_CHANGE,
  payload: null,
});
