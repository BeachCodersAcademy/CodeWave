let React = require('react');

let Username = React.createClass({
  render: function() {
    return (
      <input id="user-name" type="text" className="form-control" placeholder="Username" autofocus="true" />
    );
  }
});

module.exports = Username;