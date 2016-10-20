/*
A component's unmounting period occurs when the component is removed from the DOM. This could happen if the DOM is rerendered without the component, or if the user navigates to a different website or closes their web browser.

componentWillUnmount is the only unmounting lifecycle method!

componentWillUnmount gets called right before a component is removed from the DOM. If a component initiates any methods that require cleanup, then componentWillUnmount is where you should put that cleanup.
*/
var React = require('react');

var Example = React.createClass({
  componentWillUnmount: function () {
    alert('Goodbye world');
  },
  
  render: function () {
    return <h1>Hello world</h1>;
    }
});