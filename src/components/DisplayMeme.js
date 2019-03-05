import React from 'react';
import PropTypes from 'prop-types';

function DisplayMeme({ memeRef, font,  header, headerColor, footerColor, img, footer }) {
  const headerStyle = {
    color: headerColor,
    fontFamily: font, 
  };

  const footerStyle = {
    color: footerColor,
    fontFamily: font


  };

  return (
    <div ref={memeRef}>
      <h2 style={headerStyle} className='header'>{header}</h2>
      <img src={img} />
      <h2 style={footerStyle} className='footer'>{footer}</h2>

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
  font: PropTypes.string.isRequired
};



export default DisplayMeme;
