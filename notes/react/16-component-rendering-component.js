let React = require('react');
let ReactDOM = require('react-dom');

let OMG = React.createClass({
  render: function () {
    return <h1>Whooaa!</h1>;
  }
});

let Crazy = React.createClass({
  render: function () {
    return (
      <div>     
        <OMG />
        <h3>How cool!</h3>
      </div>
    );
}
});

ReactDOM.render(
	<Crazy />,
  document.getElementById('app')
);