/* eslint-disable no-unused-vars */
import React, { PureComponent } from 'react';
// import Controls from './Controller';
// import DisplayMeme from './DisplayMeme';
import Picture from './picture/Picture';
import Text from './text/Text';
import domToImage from 'dom-to-image';
import fileSaver from 'file-saver';
import Pagination from './pagination/Pagination';

export default class Demo extends PureComponent {
  constructor(props) {
    super(props);
    //creates reference to Dom node
    this.memeRef = React.createRef();
  }

  state = {
    currentFormPage: 0,
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

  handleNextClick = () => {
    this.setState({ currentFormPage: this.state.currentFormPage + 1 });
  };

 handleChange = ({ target }) => {
   this.setState({ [target.name]: target.value });
 };


 render() {
   const { header, footer, img, color, headerColor, footerColor, font, currentFormPage } = this.state;
   const formComponents = {
     picture: (
       <Picture img={img} onChange={this.handleChange}/>
     ),
     textPage: (
       <Text />
     )
   };
   const displayedFormPage =
      formComponents[pages[currentFormPage]];
   return (
      <>
        {displayedFormPage},
        <Pagination handleNextClick={this.handleNextClick}/>
      </>
   );
 }

}

export const pages = [
  'picture',
  'textPage'
];
