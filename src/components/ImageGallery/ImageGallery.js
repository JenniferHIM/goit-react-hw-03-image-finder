import React from 'react';
import ImageGalleryItem from '../ImageGalleryItem';
import styles from './ImageGallery.module.css';

const ImageGallery = ({ images, toggleModal }) => {
  return (
    <ul className={styles.ImageGallery}>
      {images.map(image => (
        <ImageGalleryItem
          image={image}
          key={image.id}
          toggleModal={toggleModal}
        />
      ))}
    </ul>
  );
};

export default ImageGallery;