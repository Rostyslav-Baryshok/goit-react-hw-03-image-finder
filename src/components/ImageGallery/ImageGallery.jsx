import React, { Component } from 'react';
import { ImageGalleryItem } from 'components/ImageGallery/ImageGalleryItem/ImageGalleryItem';
import PropTypes from 'prop-types';
import { List } from './ImageGallery.styled';

export class ImageGallery extends Component {
  handleItemClick = event => {
    event.preventDefault();

    const { handleImageClick } = this.props;

    if (event.currentTarget === event.target) {
      return;
    }

    const imageURL = event.target.attributes.largeimg.value;
    handleImageClick(imageURL);
  };

  render() {
    const { images } = this.props;
    return (
      <>
        <List onClick={this.handleItemClick}>
          {images.map(image => (
            <ImageGalleryItem image={image} key={image.id} />
          ))}
        </List>
      </>
    );
  }
}

ImageGallery.propTypes = {
  images: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
    })
  ),
  handleImageClick: PropTypes.func.isRequired,
};
