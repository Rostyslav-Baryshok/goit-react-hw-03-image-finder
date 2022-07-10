import React from 'react';
import PropTypes from 'prop-types';
import s from './Button.module.css';

export const Button = ({ onClick }) => {
  return (
    <button className={s.button} onClick={onClick}>
      Load more
    </button>
  );
};

Button.propType = {
  onClick: PropTypes.func.isRequired,
};
