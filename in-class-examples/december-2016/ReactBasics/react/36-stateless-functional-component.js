// If you have a component class with nothing but a render function, then you can rewrite that component class in a very different way. Instead of using React.createClass, you can write it as JavaScript function!

// A component class written in the usual way:
var MyComponentClass = React.createClass({
  render: function(){
    return <h1>Hello world</h1>;
  }
});

// The same component class, written as a stateless functional component:
function MyComponentClass () {
  return <h1>Hello world</h1>;
}

// Works the same either way:
ReactDOM.render(
	<MyComponentClass />,
	document.getElementById('app')
);