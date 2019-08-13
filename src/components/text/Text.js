import React from 'react';
import PropTypes from 'prop-types';
import styles from './Text.css';

const Text = ({ text, onChange, img }) => {
  return (
    <article className={styles.Text}>
      <section className={styles.first}>
        <h1>Enter text to go along with image</h1>
        <input type="text" name="text" value={text} onChange={onChange} placeholder="input text" />
      </section>
      <section className={styles.second}>
        <img src={img}/>
        <p>sample text</p>
      </section>
    </article>
  );
};

Text.propTypes = {
  text: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  img: PropTypes.string.isRequired
};

export default Text;
