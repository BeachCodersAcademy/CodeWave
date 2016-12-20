/*
When a component instance updates, componentDidUpdate gets called after any rendered HTML has finished loading.

componentDidUpdate automatically gets passed two arguments: prevProps and prevState. prevProps and prevState are references to the component's props and state before the current updating period began. You can compare them to the current props and state.

componentDidUpdate is usually used for interacting with things outside of the React environment, like the browser or APIs. It's similar to componentWillUpdate in that way, except that it gets called after render instead of before.
*/
var React = require('react');

var Example = React.createClass({
  componentDidUpdate: function (prevProps, prevState) {
    alert('Component is done rendering!');
  },

  render: function () {
    return <h1>Hello world</h1>;
  }
});