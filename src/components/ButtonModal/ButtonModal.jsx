import React from 'react';
import { useDispatch } from 'react-redux';
import css from './buttonModal.module.css';

import { setModalStatus } from '../../redux/camperSlice';

const ButtonComponent = () => {
  const dispatch = useDispatch();

  const handleButtonClick = () => {
    dispatch(setModalStatus(true));
  };
  return (
    <button className={css.btn} onClick={handleButtonClick}>
      Show more
    </button>
  );
};

export default ButtonComponent;
