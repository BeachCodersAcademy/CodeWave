let React = require('react');
let Username = require('./Username');
let InputMessage = require('./Message');
let SubmitButton = require('./SubmitButton');

let Form = React.createClass({
  render: function() {
    return (
      <div>
        <Username />
        <InputMessage />
        <SubmitButton />
      </div>      
    );
  }
});

module.exports = Form;