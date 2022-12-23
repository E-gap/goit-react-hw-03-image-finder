import React from 'react';
//import { v4 as uuidv4 } from 'uuid';
import css from './ImageGallery.module.css';
import PropTypes from 'prop-types';
import ImageGalleryItem from '../ImageGalleryItem/ImageGalleryItem.jsx';

const ImageGallery = ({ images }) => {
  return (
    <ul className={css.gallery}>
      {images.map(image => (
        <li key={image.id}>
          <ImageGalleryItem image={image} />
        </li>
      ))}
    </ul>
  );
};

ImageGallery.propTypes = {
  images: PropTypes.array,
};

export default ImageGallery;
