// Normal way to display a prop:
var MyComponentClass = React.createClass({
  render: function () {
    return <h1>{this.props.title}</h1>;
  }
});

// Stateless functional component way to display a prop:
function MyComponentClass (props) {
  return <h1>{props.title}</h1>;
}

// Normal way to display a prop using a variable:
var MyComponentClass = React.createClass({
  render: function () {
  	var title = this.props.title;
    return <h1>{title}</h1>;
  }
});

// Stateless functional component way to display a prop using a variable:
function MyComponentClass (props) {
	var title = props.title;
  return <h1>{title}</h1>;
}

// Works the same either way:
ReactDOM.render(
	<MyComponentClass />,
	document.getElementById('app')
);