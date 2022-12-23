import React from 'react';
import css from './ImageGalleryItem.module.css';
import PropTypes from 'prop-types';
//import { v4 as uuidv4 } from 'uuid';

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
  image: PropTypes.object.isRequired,
};

export default ImageGalleryItem;
