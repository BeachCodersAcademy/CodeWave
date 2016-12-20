/*
There are three categories of lifecycle methods: mounting, updating, and unmounting. This lesson is about the first category: mounting lifecycle methods.

A component "mounts" when it renders for the first time. This is when mounting lifecycle methods get called.

There are three mounting lifecycle methods:

* componentWillMount
* render
* componentDidMount

When a component mounts, it automatically calls these three methods, in order.
*/
var React = require('react');
var ReactDOM = require('react-dom');

var Example2 = React.createClass({
  getInitialState: function () {
    return { text: '' };
  },

  componentWillMount: function () {
    this.setState({ text: 'Hello world' });
  },

  render: function () {
    return <h1>{this.state.text}</h1>;
  }
});

ReactDOM.render(
  <Example2 />,
  document.getElementById('app')
);