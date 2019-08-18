import React from 'react';
import PropTypes from 'prop-types';
import styles from './Pagination.css';

const Pagination = ({ handleNextClick, handleBackClick, isNextButtonDisabled, isBackButtonDisabled }) => {
  return (
    <article className={styles.Pagination}>
      <section>
        <button onClick={handleBackClick} disabled={isBackButtonDisabled} className={styles.firstButton}>back</button>
        <button onClick={handleNextClick} disabled={isNextButtonDisabled}>next</button>
      </section>
    </article>
  );
};

Pagination.propTypes = {
  handleNextClick: PropTypes.func.isRequired,
  handleBackClick: PropTypes.func.isRequired,
  isNextButtonDisabled: PropTypes.bool.isRequired,
  isBackButtonDisabled: PropTypes.bool.isRequired
};

export default Pagination;
