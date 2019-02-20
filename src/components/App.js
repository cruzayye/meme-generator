import React, { PureComponent } from 'react';

export default class Demo extends PureComponent {

  state = {
    text: ''
  };

 handleChange = ({ target }) => {
   this.setState({ [target.name]: target.value }, () => {
     console.log(target.value);
   });
 };


 

 render() {
   const { text } = this.state;
   return (
      <>
        <input type="text" name="text" value={text} onChange={this.handleChange}></input>
        <header>{text}</header>
      </>
   );
 }

}
