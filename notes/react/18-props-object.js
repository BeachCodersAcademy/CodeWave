let React = require('react');
let ReactDOM = require('react-dom');

let Greeting = React.createClass({
  render: function () {
    return <h1>Hi there, {this.props.firstName}!</h1>;
  }
});

ReactDOM.render(
  <Greeting firstName='Groberta' />, 
  document.getElementById('app')
);