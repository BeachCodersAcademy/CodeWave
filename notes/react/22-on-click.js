/*
onClick means something special in Button.js but not in Talker.js
onClick is special when it's attached to html-like elements
*/

// Button.js
let React = require('react');

let Button = React.createClass({
  render: function () {
    return (
      <button onClick={this.props.onClick}>
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
  handleClick: function () {
    let speech = '';
    for (let i = 0; i < 1000; i++) {
      speech += 'blah ';
    }
    alert(speech);
  },
  
  render: function () {
    return <Button onClick={this.handleClick}/>;
  }
});

ReactDOM.render(
  <Talker />,
  document.getElementById('app')
);