import React, { PureComponent } from 'react';

const divStyle = {
  color: 'blue'
 
};

export default class Demo extends PureComponent {
  state = {
    header: '',
    footer: '',
    img: ''

  };

  handleChange = ({ target }) => {
    this.setState({ [target.name]: target.value });
  };

  render() {
    const { header, footer, img } = this.state;
    return (
    <>
    <input type='text' name='header' value={header} placeholder='header' onChange={this.handleChange}/>
    <input type='text' name='footer' value ={footer} placeholder='footer' onChange={this.handleChange} />
    <input type='text' name='img' value={img} placeholder='img' onChange={this.handleChange}/>
    <div>
      <header style={divStyle}>{header}</header>
      <header>{footer}</header>
      <header>{img}</header>
    </div>
   
    </>
    );
  }

}
