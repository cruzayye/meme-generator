import React, { PureComponent } from 'react';
import styles from './App.css';
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
          header={header}
          footer={footer}
          img={img}
          font={font}
        />



      </>
   );
 }

}
// export default class Demo extends PureComponent {
//   constructor(props) {
//     super(props);
//     //creates reference to Dom node
//     this.imageRef = React.createRef();
//   }

//   state = {
//     header: '',
//     footer: '',
//     img: '',
//     color: '#000000'
//   };

//   makeImg = event => {
//     event.preventDefault();
//     domToImage.toPng(this.imageRef.current)
//       .then(img => {
//         fileSaver.saveAs(img);
//         // this.setState({ img });
//       });
//   };

//  handleChange = ({ target }) => {
//    this.setState({ [target.name]: target.value });
//  };

//  handleSubmit = (event) => {
//    event.preventDefault();
//    console.log('submit hit');
//  };


//  render() {
//    const { header, footer, img, color } = this.state;
//    return (
//       <>
//         <form onSubmit={this.handleSubmit}>
//           <div>
//             <input type="text" name="header" value={header}  placeholder="header" onChange={this.handleChange} />
//           </div>

//           <div>
//             <input type="text" name="footer" value={footer}  placeholder="Footer" onChange={this.handleChange} /> 
//           </div>
//           <div>
//             <input type="text" name="img" value={img}  placeholder="Img Url" onChange={this.handleChange}/>
//           </div>
//           <div>
//             <input type ="color" name="color" value={color} onChange={this.handleChange}/>
//           </div>
//           <input type="submit" value="Submit" onClick={this.makeImg}/>
//         </form>

//         <section>
//           <div ref={this.imageRef}>
//             <header style={{ color }} >{header}</header>
//             <img src={img}/>
//             <footer style={{ color }}>{footer}</footer>
//           </div>
//         </section>

//       </>
//    );
//  }

// }
