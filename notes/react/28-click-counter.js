// ParentClass.js
let React = require('react');
let ReactDOM = require('react-dom');
let ChildClass = require('./ChildClass');

let ParentClass = React.createClass({
  getInitialState: function () {
    return { totalClicks: 0 };
  },

  handleClick: function () {
    let total = this.state.totalClicks;
    this.setState(
      { totalClicks: total + 1 }
    );
  },

  // The stateful component class passes down
  // handleClick to a stateless component class:
  render: function () {
    return (
      <ChildClass onClick={this.handleClick} />
    );
  }
});

// ChildClass.js
let React = require('react');
let ReactDOM = require('react-dom');

let ChildClass = React.createClass({
  render: function () {
    return (

      // The stateless component class uses the passed-down handleClick function, 
      // accessed here as this.props.onClick, as an event handler:
      <button onClick={this.props.onClick}>
        Click Me!
      </button>
    );
  }
});

module.exports = ChildClass;