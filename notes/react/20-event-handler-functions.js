// You can pass methods as arguments

// Button.js
let React = require('react');

let Button = React.createClass({
  render: function () {
    return (
      <button>
        Click me!
      </button>
    );
  }
});

module.exports = Button;

// Talker.js
let React = require('react');
let ReactDOM = require('react-dom');
let Button = require('./Button');

let Talker = React.createClass({
  talk: function () {
    for (let speech = '', i = 0; i < 10000; i++) {
      speech += 'blah ';
    }
    alert(speech);
  },
  
  render: function () {
    return <Button onClick={this.talk}/>;
  }
});

ReactDOM.render(
  <Talker />,
  document.getElementById('app')
);