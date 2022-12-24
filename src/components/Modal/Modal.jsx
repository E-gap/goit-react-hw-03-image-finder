import React from 'react';
import css from './Modal.module.css';
import PropTypes from 'prop-types';

const Modal = ({ currentImage, offModal }) => {
  return (
    <div className={css.overlay} onClick={offModal}>
      <div className={css.modal}>
        <img src={currentImage.src} alt={currentImage.alt} />
      </div>
    </div>
  );
};

export default Modal;
