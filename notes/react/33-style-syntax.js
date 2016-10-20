// Normally margin-top is hypenated but in react hyphenated properties are camel-cased
let React = require('react');
let ReactDOM = require('react-dom');

let styles = {
  background: 'lightblue',
  color: 'darkred',
  // px is assumed if no unit is given
  marginTop: 100,
  fontSize: 50
  // marginTop: '100px',
  // fontSize: '50px'
};

let styleMe = <h1 style={styles}>Please style me!  I am so bland!</h1>;

ReactDOM.render(
	styleMe, 
	document.getElementById('app')
);