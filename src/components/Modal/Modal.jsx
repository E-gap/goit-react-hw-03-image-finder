import React from 'react';
import PropTypes from 'prop-types';
import css from './Modal.module.css';

const Modal = ({ currentImage, offModal }) => {
  return (
    <div className={css.overlay} onClick={offModal}>
      <div className={css.modal}>
        <img src={currentImage.src} alt={currentImage.alt} />
      </div>
    </div>
  );
};

Modal.propTypes = {
  currentImage: PropTypes.shape({
    src: PropTypes.string.isRequired,
    alt: PropTypes.string.isRequired,
  }).isRequired,
  offModal: PropTypes.func.isRequired,
};

export default Modal;
