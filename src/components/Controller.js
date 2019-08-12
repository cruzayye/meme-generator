import React from 'react';
import PropTypes from 'prop-types';

function Controls({ img, onChange }) {
  return (
    <form >
      {/* <TextControl name="header" text={header} color={headerColor} onChange={onChange} font={font} /> */}
      <input type='img'  name='img' value={img} onChange={onChange} placeholder='image' />
      {/* <input type='text' name='font' value={font} onChange={onChange} /> */}
    
      {/* <button name="fonts" type='submit' >Memify</button> */}
    </form>
  );
}

Controls.propTypes = {
  header: PropTypes.string.isRequired,
  footer: PropTypes.string.isRequired,
  img: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  font: PropTypes.string.isRequired,
  onSubmit: PropTypes.func.isRequired,
  headerColor: PropTypes.string.isRequired,
  footerColor: PropTypes.string.isRequired,
};



function TextControl({ name, color, onChange, font }) {
  return (
      <>
          <input type="text" name={name} placeholder={name} font={font} onChange={onChange}  />
        
          <input type ="color" name={`${name}Color`} value={color} onChange={onChange} font={font} />  
      </>
  );
}

TextControl.propTypes = {
  name: PropTypes.string.isRequired,
  font: PropTypes.string.isRequired,
  color: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};

export default Controls;
