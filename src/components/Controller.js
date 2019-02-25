import React from 'react';
import PropTypes from 'prop-types';

function Fonts({ onChange }) {
  const fontValue = ['helvetica', 'baskerville', 'arial'];
  const fontChoice = fontValue.map(font => {
    return (
      <option key={font}>{font}</option>
    );
  });

  return (
    <select onChange={onChange}>{fontChoice}</select>
  );
}

Fonts.propTypes = {
  fontValue: PropTypes.string.isRequired,
  onChange: PropTypes.string.isRequired,

};



function Controls({ header, footer, headerColor, footerColor, img, onChange, onSubmit, font }) {
  return (
    <form onSubmit={onSubmit}>
      <TextControl name="header" font={font} text={header} color={headerColor} onChange={onChange} />
      <TextControl name="footer"  text={footer} color={footerColor} onChange={onChange} />
      <input type='img'  name='img' value={img} onChange={onChange} />
      <Fonts />
      <button name="fonts" type='submit' >Memify</button>
    </form>
  );
}

Controls.propTypes = {
  headerColor: PropTypes.string.isRequired,
  footerColor: PropTypes.string.isRequired,
  header: PropTypes.string.isRequired,
  footer: PropTypes.string.isRequired,
  font: PropTypes.string.isRequired,
  // color: PropTypes.string.isRequired,
  img: PropTypes.string.isRequired,
  //why do we need these two? i thought that form was just about html tags. 
  onChange: PropTypes.func.isRequired,
  onSubmit: PropTypes.func.isRequired

};

function TextControl({ name, text, color, onChange, font }) {
  return (
    <>
        <input type="text" name={name} value={text}  placeholder={name} font={font} onChange={onChange}  />
      
        <input type ="color" name={`${name}Color`} value={color} onChange={onChange} />
        
      
    </>
  );
}

TextControl.propTypes = {
  name: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
  font: PropTypes.string.isRequired,
  color: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};

export default Controls;

