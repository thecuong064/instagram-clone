import {Modals} from '../../../constants';

export const ModalActionTypes = {
  SHOW_MODAL: 'modal/show',
  DISMISS_MODAL: 'modal/dismiss',
};

const initialState = {
  visibleModal: Modals.None,
};

export const modalReducer = (state = initialState, action) => {
  const {payload, type} = action;

  switch (type) {
    case ModalActionTypes.SHOW_MODAL: {
      return {
        ...state,
        visibleModal: payload,
      };
    }
    case ModalActionTypes.DISMISS_MODAL: {
      return initialState;
    }
    default:
      return state;
  }
};
