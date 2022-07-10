import React, { Component } from 'react';
import { createPortal } from 'react-dom';
import PropTypes from 'prop-types';
import { Overlay, ModalWindow } from './Modal.styled';

const modalRoot = document.querySelector('#modal-root');

export class Modal extends Component {
  componentDidMount() {
    window.addEventListener('click', this.handleOverlayClick);
    window.addEventListener('keydown', this.handleEscClick);
  }

  componentWillUnmount() {
    window.removeEventListener('click', this.handleOverlayClick);
    window.removeEventListener('keydown', this.handleEscClick);
  }

  handleOverlayClick = event => {
    const { onClose } = this.props;
    if (event.currentTarget === event.target) {
      onClose();
    }
  };

  handleEscClick = event => {
    const { onClose } = this.props;

    if (event.code === 'Escape') {
      onClose();
    }
  };

  render() {
    const { modalImageURL } = this.props;
    return createPortal(
      <Overlay onClick={this.handleOverlayClick}>
        <ModalWindow>
          <img src={modalImageURL} alt="" />
        </ModalWindow>
      </Overlay>,
      modalRoot
    );
  }
}

Modal.propTypes = {
  modalImageURL: PropTypes.string.isRequired,
  onClose: PropTypes.func.isRequired,
};
