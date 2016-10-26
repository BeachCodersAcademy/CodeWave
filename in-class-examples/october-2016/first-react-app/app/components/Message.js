let React = require('react');

let Message = React.createClass({
  render: function() {
    return (
      <li>
        {this.props.username}: {this.props.message}
      </li>
    );
  }
});

module.exports = Message;