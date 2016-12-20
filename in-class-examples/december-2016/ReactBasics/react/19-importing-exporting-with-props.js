// Greeting.js
let React = require('react');

let Greeting = React.createClass({
  render: function () {
    return <h1>Hi there, {this.props.name}!</h1>;
  }
});

module.exports = Greeting;

// App.js
let React = require('react');
let ReactDOM = require('react-dom');
let Greeting = require('./Greeting');

let App = React.createClass({
  render: function () {
    return (
      <div>
        <h1>
          Hullo and, "Welcome to The Newzz," "On Line!"
        </h1>
        <Greeting name="Shady" />
        <article>
          Latest newzz:  where is my phone?
        </article>
      </div>
    );
  }
});

ReactDOM.render(
  <App />, 
  document.getElementById('app')
);