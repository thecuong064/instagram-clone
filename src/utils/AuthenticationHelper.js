import SInfo from 'react-native-sensitive-info';
import ErrorMessages from '../constants/ErrorMessages';

const USERS_KEY = 'sensitiveInfo_Users';

export const AuthenticationHelper = {
  signup: (username, password) => {
    return SInfo.setItem(username, password, {
      sharedPreferencesName: USERS_KEY,
      keychainService: USERS_KEY,
    });
  },
  login: async (username, password) => {
    let storedPassword = await SInfo.getItem(username, {
      sharedPreferencesName: USERS_KEY,
      keychainService: USERS_KEY,
    });

    if (password === storedPassword) {
      return true;
    }

    throw Error(ErrorMessages.INVALID_LOGIN_INFO);
  },
};
