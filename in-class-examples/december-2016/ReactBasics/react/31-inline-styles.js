// Use double curly braces to create an object literal

let React = require('react');
let ReactDOM = require('react-dom');

let styleMe = <h1 style={{background: 'lightblue', color: 'darkred'}}>Please style me!  I am so bland!</h1>;

ReactDOM.render(
	styleMe, 
	document.getElementById('app')
);