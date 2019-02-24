import React from 'react';
import PropTypes from 'prop-types';
//why textControl and not input?
function Controls({ header, footer, headerColor, footerColor, img, onChange, onSubmit, font }) {
  return (
    <form onSubmit={onSubmit}>
      <TextControl name="header" font={font} text={header} color={headerColor} onChange={onChange} />
      <TextControl name="footer" font={font} text={footer} color={footerColor} onChange={onChange} />
      <input type='img'  name='img' value={img} onChange={onChange} />
      <button type='submit'>Memify</button>
      <option value={font}>Font</option>
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

function TextControl({ name, text, color, onChange, font}) {
  return (
    <>
        <input type="text" name={name} value={text}  placeholder={name} font={font} onChange={onChange}  />
      
        <input type ="color" name={`${name}Color`} value={color} onChange={onChange} />
        <option></option>
      
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

