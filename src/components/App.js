import React, { PureComponent } from 'react';
// import styles from './App.css';
import Controls from './Controller';
import DisplayMeme from './DisplayMeme';
import domToImage from 'dom-to-image';
import fileSaver from 'file-saver';



export default class Demo extends PureComponent {
  constructor(props) {
    super(props);
    //creates reference to Dom node
    this.memeRef = React.createRef();
  }

  state = {
    header: '',
    headerColor: '#000000',
    footerColor: '#000000',
    footer: '',
    img: '',
    color: '#000000',
    font: 'baskerville'
  };

  makeImg = event => {
    event.preventDefault();
    domToImage.toPng(this.memeRef.current)
      .then(img => {
        fileSaver.saveAs(img);
        // this.setState({ img });
      });
  };

 handleChange = ({ target }) => {
   this.setState({ [target.name]: target.value });
 };




 render() {
   const { header, footer, img, color, headerColor, footerColor, font } = this.state;
   return (
      <>
        <Controls
          header={header}
          headerColor={headerColor}
          footerColor={footerColor}
          color={color}
          footer={footer}
          img={img}
          onChange={this.handleChange}
          onSubmit={this.makeImg}
          font={font}
        />

        <DisplayMeme
          memeRef={this.memeRef}
          footerColor={footerColor}
          headerColor={headerColor}
          font={font}
          header={header}
          footer={footer}
          img={img}
        />



      </>
   );
 }

}
