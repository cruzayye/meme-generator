import React from 'react';
import PropTypes from 'prop-types';
import styles from './Picture.css';

const Picture = ({ img, onChange }) => {
  return (
    <article className={styles.Picture}>
      <section>
        <h1>Copy image url or upload your own image</h1>
        <input type="img" name="img" value={img} onChange={onChange} placeholder="image goes here" />
      </section>
      <section className="img-preview">
        <img src={img} />
      </section>
    </article>
  );
};

Picture.propTypes = {
  img: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired
};

export default Picture;
