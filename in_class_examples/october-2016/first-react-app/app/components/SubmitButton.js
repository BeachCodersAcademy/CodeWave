let React = require('react');

let SubmitButton = React.createClass({
  render: function() {
    return (
      <div id="add-message-btn" className="btn btn-success form-control" onClick="addMessage()">Add Message</div>
    );
  }
});

module.exports = SubmitButton;