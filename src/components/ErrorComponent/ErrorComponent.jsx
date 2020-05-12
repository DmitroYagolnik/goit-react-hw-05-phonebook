import React from 'react';
import PropTypes from 'prop-types';
import style from './ErrorComponent.module.scss';

const ErrorComponent = ({ errorMessage }) => {
  return (
    <div className={style.ErrorTextWrapper}>
      <p>{errorMessage}</p>
    </div>
  );
};

ErrorComponent.propTypes = {
  errorMessage: PropTypes.string.isRequired,
};

export default ErrorComponent;
