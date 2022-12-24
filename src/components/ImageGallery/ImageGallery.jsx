import React from 'react';
//import { v4 as uuidv4 } from 'uuid';
import css from './ImageGallery.module.css';
import PropTypes from 'prop-types';
import ImageGalleryItem from '../ImageGalleryItem/ImageGalleryItem.jsx';
import * as basicLightbox from 'basiclightbox';

const ImageGallery = ({ images, onModal }) => {
  return (
    <ul
      className={css.gallery}
      onClick={e => {
        onModal({
          src: e.target.getAttribute('large'),
          alt: e.target.getAttribute('alt'),
        });
      }}
    >
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
