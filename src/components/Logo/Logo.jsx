import React from 'react';
import PropTypes from 'prop-types';
import style from './Logo.module.scss';

const Logo = ({ logoTitle }) => {
  return <h1 className={style.LogoTitle}>{logoTitle}</h1>;
};

Logo.propTypes = {
  logoTitle: PropTypes.string.isRequired,
};

export default Logo;
