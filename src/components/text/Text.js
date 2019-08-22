import React from 'react';
import PropTypes from 'prop-types';
import styles from '../../shared/layout.css';

const Text = ({ text, onChange, img, download, memeRef }) => {
  return (
    <form onSubmit={download}>
      <article className={styles.Layout}>
        <h1>2: Enter text to go along with image</h1>
        <section className={styles.meme} ref={memeRef}>
          <img src={img}/>
          <p>{text}</p>
          <button>download</button>
        </section>
        <section className={styles.imgInput}>
          <input type="text" name="header" value={text} onChange={onChange} placeholder="input text" />
        </section>
      </article>
    </form>
  );
};

Text.propTypes = {
  text: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  img: PropTypes.string.isRequired,
  download: PropTypes.func.isRequired,
  memeRef: PropTypes.object.isRequired
};

export default Text;
