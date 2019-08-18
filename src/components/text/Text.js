import React from 'react';
import PropTypes from 'prop-types';
import styles from '../../shared/layout.css';

const Text = ({ text, onChange, img, download }) => {
  return (
    <article className={styles.Layout}>
      <h1>Enter text to go along with image</h1>
      <section className={styles.meme}>
        <img src={img}/>
        <p>{text}</p>
        <button onClick={download}>download</button>
      </section>
      <section className={styles.imgInput}>
        <input type="text" name="header" value={text} onChange={onChange} placeholder="input text" />
      </section>
    </article>
  );
};

Text.propTypes = {
  text: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  img: PropTypes.string.isRequired,
  download: PropTypes.func.isRequired
};

export default Text;
