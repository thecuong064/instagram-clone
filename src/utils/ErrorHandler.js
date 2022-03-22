import ErrorMessages from '../constants/ErrorMessages';

export const handleErrorMessage = error => {
  if (!error.status) {
    return new Error(ErrorMessages.NETWORK_OFFLINE);
  }
  return error;
};
