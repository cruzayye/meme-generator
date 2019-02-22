import React from 'react';
import PropTypes from 'prop-types';

function DisplayMeme({ memeRef, header, color, img, footer }) {
  const headerStyle = {
    color: color,
  };

  const footerStyle = {
    color: color,
  };

  return (
    <section ref={memeRef}>
      <h2 style={headerStyle}>{header}</h2>
      <img src={img} />
      <h2 style={footerStyle}>{footer}</h2>

    </section>
  );
}

DisplayMeme.propTypes = {
  memeRef: PropTypes.object.isRequired,
  header: PropTypes.string.isRequired,
  color: PropTypes.string.isRequired,
  footer: PropTypes.string.isRequired,
  // footerColor: PropTypes.string.isRequired,
  img: PropTypes.string.isRequired,
};



export default DisplayMeme;
