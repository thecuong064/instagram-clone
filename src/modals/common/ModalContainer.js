import React from 'react';
import {useSelector} from 'react-redux';
import {Modals} from '../../constants';

import {ComingSoonModal} from '../ComingSoonModal';

export const ModalContainer = () => {
  const visibleModal = useSelector(state => state.modal.visibleModal);

  return (
    <>
      <ComingSoonModal isVisible={visibleModal === Modals.ComingSoon} />
    </>
  );
};
