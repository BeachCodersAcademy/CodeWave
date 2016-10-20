/*
componentWillUpdate gets called in between shouldComponentUpdate and render.

componentWillUpdate receives two arguments: nextProps and nextState.

You cannot call this.setState from the body of componentWillUpdate! Which begs the question, why would you use it?

The main purpose of componentWillUpdate is to interact with things outside of the React architecture. If you need to do non-React setup before a component renders, such as checking the window size or interacting with an API, then componentWillUpdate is a good place to do that.
*/
var React = require('react');

var Example = React.createClass({
  componentWillUpdate: function (nextProps, nextState) {
    alert('Component is about to update!  Any second now!');
  },

  render: function () {
    return <h1>Hello world</h1>;
  }
});