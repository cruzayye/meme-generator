import React from 'react';
import PropTypes from 'prop-types';
import styles from './Pagination.css';

const Pagination = ({ handleNextClick, handleBackClick }) => {
  return (
    <article className={styles.Pagination}>
      <button onClick={handleBackClick}>back</button>
      <button onClick={handleNextClick}>next</button>
    </article>
  );
};

Pagination.propTypes = {
  handleNextClick: PropTypes.func.isRequired,
  handleBackClick: PropTypes.func.isRequired,
};

export default Pagination;
