import CommonActionTypes from './constants';

const initalUser = {
  name: '',
  pass: '',
};

const userReducer = (state = initalUser, action) => {
  const {payload, type} = action;

  switch (type) {
    case CommonActionTypes.USER_CHANGE: {
      return payload;
    }
    default:
      return state;
  }
};

export default userReducer;
