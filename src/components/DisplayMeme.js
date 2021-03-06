import React from 'react';
import PropTypes from 'prop-types';

function DisplayMeme({ memeRef, header, headerColor, footerColor, img, footer }) {
  const headerStyle = {
    color: headerColor,
  };

  const footerStyle = {
    color: footerColor,
  };

  return (
    <div ref={memeRef}>
      <h2 style={headerStyle}>{header}</h2>
      <img src={img} />
      <h2 style={footerStyle}>{footer}</h2>

    </div>
  );
}

DisplayMeme.propTypes = {
  memeRef: PropTypes.object.isRequired,
  header: PropTypes.string.isRequired,
  headerColor: PropTypes.string.isRequired,
  footerColor: PropTypes.string.isRequired,
  // color: PropTypes.string.isRequired,
  footer: PropTypes.string.isRequired,
  // footerColor: PropTypes.string.isRequired,
  img: PropTypes.string.isRequired,
};



export default DisplayMeme;
