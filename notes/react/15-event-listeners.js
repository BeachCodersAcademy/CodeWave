let React = require('react');
let ReactDOM = require('react-dom');

let Button = React.createClass({
  scream: function () {
    alert('AAAAAAAAHHH!!!!!');
  },

  render: function () {
    return <button onClick={this.scream}>AAAAAH!</button>;
  }
});

ReactDOM.render(
	<Button />,
  document.getElementById('app')
);