import React from 'react';
import PropTypes from 'prop-types';
import { ButtonStyles } from './Button.slyled';

export const Button = ({ onClick }) => {
  return <ButtonStyles onClick={onClick}>Load more</ButtonStyles>;
};

Button.propType = {
  onClick: PropTypes.func.isRequired,
};
