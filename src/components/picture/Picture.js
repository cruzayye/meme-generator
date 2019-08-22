import React from 'react';
import PropTypes from 'prop-types';
import styles from '../../shared/layout.css';

const Picture = ({ img, onChange, keyDown }) => {
  return (
    <article className={styles.Layout}>
      <h1>1: Copy image address from another source, such as Google</h1>
      <section className={styles.meme}>
        <img src={img}/>
      </section>
      <section className={styles.imgInput}>
        <input type="img" name="img" value={img} onChange={onChange} placeholder="image goes here" onKeyDown={keyDown}/>
        {/* <input name="img" type="file" value="" onChange={uploadFile} accept="image/png, image/jpeg"/> */}
      </section>
    </article>
  );
};

Picture.propTypes = {
  img: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  uploadFile: PropTypes.func.isRequired,
  keyDown: PropTypes.func.isRequired
};

export default Picture;
