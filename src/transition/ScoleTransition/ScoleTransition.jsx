/* eslint-disable radix */
import React from 'react';
import PropTypes from 'prop-types';
import { CSSTransition } from 'react-transition-group';
import transition from './ScoleTransition.module.scss';

const ScoleTransition = ({ isShow, children }) => {
  const delay = parseInt(transition.delay);

  return (
    <CSSTransition
      in={isShow}
      classNames={transition}
      timeout={delay}
      unmountOnExit
    >
      {children}
    </CSSTransition>
  );
};

ScoleTransition.propTypes = {
  isShow: PropTypes.bool.isRequired,
  children: PropTypes.node.isRequired,
};

export default ScoleTransition;
