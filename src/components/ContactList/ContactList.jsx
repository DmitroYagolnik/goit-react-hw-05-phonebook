/* eslint-disable radix */
import React from 'react';
import PropTypes from 'prop-types';
import { TransitionGroup, CSSTransition } from 'react-transition-group';
import ContactItem from '../ContactItem/ContactItem';
import transition from '../../transition/SladeLeftTransition/SladeLeftTransition.module.scss';

const ContactList = ({ contacts, handleDelete }) => {
  const delay = parseInt(transition.delay);
  return (
    <TransitionGroup component="ul">
      {contacts.map(elem => (
        <CSSTransition
          key={elem.id}
          timeout={delay}
          classNames={transition}
          unmountOnExit
        >
          <ContactItem elem={elem} handleDelete={handleDelete} />
        </CSSTransition>
      ))}
    </TransitionGroup>
  );
};

ContactList.propTypes = {
  contacts: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
      id: PropTypes.string.isRequired,
    }),
  ).isRequired,
  handleDelete: PropTypes.func.isRequired,
};

export default ContactList;
