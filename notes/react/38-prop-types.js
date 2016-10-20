// The name of each property in propTypes should be the name of an expected prop. In our case, MessageDisplayer expects a prop named message, so our property's name is message.
// The value of each property in propTypes should fit this pattern:
// React.PropTypes.expected-data-type-goes-here
// Since message is presumably going to be a string, we chose React.PropTypes.string. You can see this on line 7. Notice the difference in capitalization between the propTypes object and React.PropTypes!
// Each property on the propTypes object is called a propType.

var React = require('react');

var MessageDisplayer = React.createClass({
  // This propTypes object should have
  // one property for each expected prop:
  propTypes: {
    message: React.PropTypes.string
  },

  render: function () {
    return <h1>{this.props.message}</h1>;
  }
});