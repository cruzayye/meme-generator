import React, { PureComponent } from 'react';
import domToImage from 'dom-to-image';

export default class Demo extends PureComponent {
  constructor(props) {
    super(props);
    this.formattedTextRef = React.createRef();
  }

  state = {
    header: '',
    footer: '',
    img: ''
  };

 textToImage = event => {
   event.preventDefault();
   domToImage.toPng(this.formattedTextRef.current)
     .then(img => {
       this.setState({ img });
     });
 };

 handleChange = ({ target }) => {
   this.setState({ [target.name]: target.value });
 };


 render() {
   const { header, footer, img } = this.state;
   return (
      <>
        <input type="text" name="header" value={header} onChange={this.handleChange} />
        <header>{header}</header>

        <input type="text" name="footer" value={footer} onChange={this.handleChange} />
        <footer>{footer}</footer>

        <input type="text" name="img" value={img} onChange={this.handleChange} />
        <img src={img}/>

      </>
   );
 }

}
