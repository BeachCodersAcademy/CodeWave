let React = require('react');
let ReactDOM = require('react-dom');

let MyName = React.createClass({
	name: 'Slim Shady',

  render: function () {
    return <h1>My name is {this.name}.</h1>;
  }
});

ReactDOM.render(<MyName />, document.getElementById('app'));