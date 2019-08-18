import React from 'react';
import PropTypes from 'prop-types';
import styles from '../../shared/layout.css';

const Picture = ({ img, onChange, keyDown }) => {
  return (
    <article className={styles.Layout}>
      <h1>Copy image address link or upload your own image</h1>
      <section className={styles.meme}>
        <img src={img}/>
      </section>
      <section className={styles.imgInput}>
        <input type="img" name="img" value={img} onChange={onChange} placeholder="image goes here" onKeyDown={keyDown}/>
      </section>
    </article>
  );
};

Picture.propTypes = {
  img: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  keyDown: PropTypes.func.isRequired
};

export default Picture;
