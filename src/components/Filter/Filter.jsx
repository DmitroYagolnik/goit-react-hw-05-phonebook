import React from 'react';
import PropTypes from 'prop-types';
import style from './Filter.module.scss';

const Filter = ({ handleFilter }) => {
  return (
    <div className={style.filterContainer}>
      <label className={style.filterLabel}>
        Find contact by name
        <input
          type="search"
          className={style.filterInput}
          onChange={handleFilter}
        />
      </label>
    </div>
  );
};

Filter.propTypes = {
  handleFilter: PropTypes.func.isRequired,
};

export default Filter;
