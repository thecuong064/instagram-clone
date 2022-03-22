import ErrorMessages from '../constants/ErrorMessages';

export const handleErrorMessage = error => {
  if (!error.status) {
    return {
      message: ErrorMessages.NETWORK_OFFLINE,
    };
  }

  return error;
};
