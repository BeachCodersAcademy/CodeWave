let React = require('react');
let Form = require('./Form');
let Messages = require('./Messages');

let App = React.createClass({
  
  render: function() {
    return (
      <div className="container">
        <div className="row">
          <div className="col-md-6 col-md-offset-3">
          hi
          you are so cool!
            <Form />
            <Messages />
            <div>Want to be friends</div>
          </div>
        </div>
      </div>
    );
  }
  
});

module.exports = App;