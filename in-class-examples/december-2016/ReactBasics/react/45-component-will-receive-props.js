/*
The first time that a component instance renders, it does not update. A component updates every time that it renders, starting with the second render.

There are five updating lifecycle methods:

* componentWillReceiveProps
* shouldComponentUpdate
* componentWillUpdate
* render
* componentDidUpdate

Whenever a component instance updates, it automatically calls all five of these methods, in order.
*/
var React = require('react');

var Example = React.createClass({
  componentWillReceiveProps: function (nextProps) {
    alert("Check out the new props.text that "
    	+ "I'm about to get:  " + nextProps.text);
  },

  render: function () {
    return <h1>{this.props.text}</h1>;
  }
});


// The first render won't trigger
// componentWillReceiveProps:
ReactDOM.render(
	<Example text="Hello world" />,
	document.getElementById('app')
);

// After the first render, 
// subsequent renders will trigger
// componentWillReceiveProps:
setTimeout(function () {
	ReactDOM.render(
		<Example text="Hello world" />,
		document.getElementById('app')
	);
}, 1000);