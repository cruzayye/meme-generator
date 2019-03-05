//React Router
import {
  BrowserRouter as Router
} from 'react-router-dom'; //hashRouter is used for older broswers

//switch renders first route that matches. 
//if we take out switch and dont use exact both components will load. 
<Router>
  <switch>
  <Route exact path="/about/other" component ={anotherComp} />
  <Route path="/about" component ={componentName} />
  <Route path="/blog/:blog" component ={componentName} />
  </switch>
</Router>
//blog becomes a object inside of match. | match.params.name

//HOC
const withTitle = component => title => {
  return functions WithTitle(props){
    
    return (
    <component title={title} {...this.props} />
    )
  }
}

//Functional components vs component vs Pure
//functional components are considered presentational 
//Container comps hold state values.

//LifeCycle events

componentDidMount()
compenentDidUpdate(prevProps, rrevState){
  if(prevState.name !== this.state.name) {
    //do something. 
  }
}
componentWillUnmount()//can be used to unsubscribe
shouldComponentUpdate(nextProps, nextState){
  if(nextProps !== this.props && nextState !== this.state){
    retrun true;
  } else {
    return false;
  }
}//gets called before rendeing if true comp will render false wont render| responsible for rendering or not. | this makes the difference between pure comp and reg
//regular components will always update
//purComponents uses this, we can usually use PureComponents in most cases except when using nested objects/state props if our props looked like the following
const title ={
  myTtitle: {
    title: 'hi there'
  }
}

//old way of implements state
export defualt class app extends component {
  constructor(props) {
    super(props);
    this.state= {
      name: ''
    }
  }
  //if you dont used arrow functions for your methods that affect state you need to use this bind method. 
  this.handleChange = this.handleChange.bind(this);

}

//wrapping react renders in curly braces lets you add some js
{this.state.name !=='ryan' && <About title={this.state.name} />}




//keys are used anytime we deal with a loop function such as map

//State is changable through a function
this.setState() //is used to change a state

//props arent changeable
const About = props => {
  console.log('props', props);
  return <h1>About</h1>
}
const About = ({ props }) => {
  return <h1>About</h1>
}

//assignign an id and a class to h1, cant use regular class bc js already uses the class keyword. 
<h1 id={name} className={name}> </h1




////HOF

//currying is taking each function param that the function takes
//one invokation per arguments 
function add(a, b, c) {
  return a + b + c;
}

function curryAdd(a) {
  return function(b) {
    return function(c) {
      return add(a, b, c);
    };
  };
}


const add5 = curryAdd(2)(3);
console.log(add5(4));

//with partial funcs we dont have to invoke the func for evrery param. 
function partialAddFirst(a, b) {
  return function(c) {
    retrun add(a, b, c);
  };
}

//bind

//closures 
function counter() {
  let count = 0;//this count only exist within this function useful for states that only one function has control of. called closure because were closing in some sort of state. 
  return function() {
    count += 1;
    return count;
  }
}

//Thunk- lets us hold of work until later
function hypo(a, o) {
  return function() {
    return Math.sqrt((a ** 2) + (o ** 2));
  }
}

//storing the info for later usage in case an operation is expensive to execute
const myHypo = hypo(3, 4);


