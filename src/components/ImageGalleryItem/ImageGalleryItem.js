import React from 'react';
import styles from './ImageGalleryItem.module.css';

const ImageGalleryItem = ({ image, toggleModal }) => {
  const onClick = () => {
    toggleModal({
      status: true,
      src: image.largeImageURL,
      alt: image.tags,
    });
  };

  return (
    <li className={styles.ImageGalleryItem}>
      <img
        className={styles.image}
        src={image.webformatURL}
        alt={image.tags}
        onClick={onClick}
      />
    </li>
  );
};

export default ImageGalleryItem;