import React, { PureComponent } from 'react';

export default class Demo extends PureComponent {

  state = {
    header: '',
    footer: ''
  };

 handleChange = ({ target }) => {
   this.setState({ [target.name]: target.value });
 };


 




 

 render() {
   const { header, footer } = this.state;
   return (
      <>
        <input type="text" name="header" value={header} onChange={this.handleChange}></input>
        <header>{header}</header>
        <input type="text" name="footer" value={footer} onChange={this.handleChange} ></input>
        <footer>{footer}</footer>
      </>
   );
 }

}
