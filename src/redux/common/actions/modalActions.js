import {ModalActionTypes} from '../reducers/modalReducer';

export const showModal = payload => ({
  type: ModalActionTypes.SHOW_MODAL,
  payload: payload,
});

export const dismissModal = payload => ({
  type: ModalActionTypes.DISMISS_MODAL,
  payload: payload,
});
