import React, { PureComponent } from 'react';
import styles from './App.css';

// import domToImage from 'dom-to-image';

export default class Demo extends PureComponent {
  // constructor(props) {
  //   super(props);
  //   this.formattedTextRef = React.createRef();
  // }

  state = {
    header: '',
    footer: '',
    img: ''
  };

  //  textToImage = event => {
  //    event.preventDefault();
  //    domToImage.toPng(this.formattedTextRef.current)
  //      .then(img => {
  //        this.setState({ img });
  //      });
  //  };

 handleChange = ({ target }) => {
   this.setState({ [target.name]: target.value });
 };


 render() {
   const { header, footer, img } = this.state;
   return (
      <>
        <form>
          <div>
            <input type="text" name="header" value={header}  placeholder="header" onChange={this.handleChange} />
          </div>

          <div>
            <input type="text" name="footer" value={footer}  placeholder="Footer" onChange={this.handleChange} /> 
          </div>
          <div>
            <input type="text" name="img" value={img}  placeholder="Img Url" onChange={this.handleChange}/>
          </div>
          

     
          

  
          
          <input type="submit" value="Submit" onSubmit={this.handleChange} />

        </form>
        <section>
          <div>
            <header className={styles.header} >{header}</header>
            <img src={img}/>
            <footer>{footer}</footer>
          </div>
        </section>

      </>
   );
 }

}
