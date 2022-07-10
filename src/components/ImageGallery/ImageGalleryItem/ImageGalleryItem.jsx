import React from 'react';
import PropTypes from 'prop-types';
import { Item } from './ImageGalleryItem.styled';

export const ImageGalleryItem = ({
  image: { webformatURL, largeImageURL, tags },
}) => {
  return (
    <Item>
      <img
        className={'img'}
        src={webformatURL}
        alt={tags}
        largeimg={largeImageURL}
      />
    </Item>
  );
};

ImageGalleryItem.propTypes = {
  image: PropTypes.shape({
    webformatURL: PropTypes.string.isRequired,
    largeImageURL: PropTypes.string.isRequired,
    tags: PropTypes.string.isRequired,
  }),
};