// Parent.js
let React = require('react');
let ReactDOM = require('react-dom');
let Child = require('./Child.js');

let Parent = React.createClass({
  getInitialState: function() {
    return {
      name: 'Frarthur'
    }  
  },
  
  render: function() {
    return <Child name={this.state.name}/>;
  }
});

ReactDOM.render(<Parent />, document.getElementById('app'));

// Child.js
let React = require('react');
let ReactDOM = require('react-dom');


let Child = React.createClass({
  
  render: function() {
    return <h1>Hey, my name is {this.props.name}</h1>;
    }
  });
  
module.exports = Child;