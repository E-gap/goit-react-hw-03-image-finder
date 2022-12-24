import React from 'react';
import css from './ImageGalleryItem.module.css';
import PropTypes from 'prop-types';

const ImageGalleryItem = ({ image }) => {
  return (
    <img
      className={css.galleryItem}
      src={image.webformatURL}
      large={image.largeImageURL}
      alt={image.tags}
    />
  );
};

ImageGalleryItem.propTypes = {
  image: PropTypes.object,
};

export default ImageGalleryItem;
