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

  makeImg = () => {
    domToImage.toPng(this.memeRef.current)
      .then(img => {
        fileSaver.saveAs(img);
      });
  };

  handleNextClick = () => {
    event.preventDefault();
    this.setState({ currentFormPage: this.state.currentFormPage + 1 });
  };

  handleBackClick = () => {
    this.setState({ currentFormPage: this.state.currentFormPage - 1 });
  };

  enterEvent = (e) => {
    e.key === 'Enter' && this.handleNextClick();
  };

 handleChange = ({ target }) => {
   this.setState({ [target.name]: target.value });
 };


 render() {
   const { header, img, currentFormPage } = this.state;
   const formComponents = {
     picture: (
       <Picture img={img} onChange={this.handleChange} keyDown={this.enterEvent} />
     ),
     textPage: (
       <Text text={header} onChange={this.handleChange} img={img} download={this.makeImg}/>
     )
   };
   const isBackButtonDisabled = currentFormPage <= 0;
   const isNextButtonDisabled = currentFormPage >= 1;
   const displayedFormPage = formComponents[pages[currentFormPage]];
   return (
      <>
          {displayedFormPage}
        <Pagination 
          handleNextClick={this.handleNextClick}
          handleBackClick={this.handleBackClick}
          isBackButtonDisabled={isBackButtonDisabled}
          isNextButtonDisabled={isNextButtonDisabled}/>
      </>
   );
 }

}

export const pages = [
  'picture',
  'textPage'
];
