import React from 'react';
import PropTypes from 'prop-types';
import styles from '../../shared/layout.css';

const Picture = ({ img, onChange, keyDown, uploadFile }) => {
  return (
    <article className={styles.Layout}>
      <h1>1: Copy image address from another source or upload an image</h1>
      <section className={styles.meme}>
        <img src={img}/>
      </section>
      <section className={styles.imgInput}>
        <input className={styles.styledInput} type="img" name="img" value={img} onChange={onChange} placeholder="image goes here" onKeyDown={keyDown}/> <br/>
        <input name="img" type="file" value="" onChange={uploadFile} accept="image/png, image/jpeg"/>
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
