let React = require('react');
let ReactDOM = require('react-dom');

let styles = {
  background: 'lightblue',
  color: 'darkred'
};

let styleMe = <h1 style={styles}>Please style me!  I am so bland!</h1>;

ReactDOM.render(
	styleMe, 
	document.getElementById('app')
);