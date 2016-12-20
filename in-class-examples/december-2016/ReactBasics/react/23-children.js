/*
Use this.props.children to get whatever is inside of tags.
this.props.children will return an array if there are multiple tags but a single element if there is only one
*/

// List.js
let React = require('react');

let List = React.createClass({
  render: function () {
    let titleText = 'Favorite ' + this.props.type;
    if (this.props.children instanceof Array) {
    	titleText += 's';
    }
    return (
      <div>
        <h1>{titleText}</h1>
        <ul>{this.props.children}</ul>
      </div>
    );
  }
});

module.exports = List;

// App.js
let React = require('react');
let ReactDOM = require('react-dom');
let List = require('./List');

let App = React.createClass({
  render: function () {
    return (
      <div>
        <List type='Living Musician'>
          <li>Sachiko M</li>
          <li>Harvey Sid Fisher</li>
        </List>
        <List type='Living Cat Musician'>
          <li>Nora the Piano Cat</li>
        </List>
      </div>
    );
  }
});

ReactDOM.render(
  <App />, 
  document.getElementById('app')
);