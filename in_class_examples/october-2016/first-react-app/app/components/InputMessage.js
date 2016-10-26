let React = require('react');

let InputMessage = React.createClass({
  render: function() {
    return (
      <textarea id="message" name="name" className="form-control" placeholder="Message"></textarea>
    );
  }
});

module.exports = InputMessage;