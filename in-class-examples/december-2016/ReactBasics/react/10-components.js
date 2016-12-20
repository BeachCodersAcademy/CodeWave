/*
Lifecycle Method: render()

The only required method.

A component is a small, reusable chunk of code that is responsible for one job. That job is often to render some HTML.

When called, it should examine this.props and this.state and return a single child element. This child element can be either a virtual representation of a native DOM component (such as <div /> or React.DOM.div()) or another composite component that you've defined yourself.

You can also return null or false to indicate that you don't want anything rendered. Behind the scenes, React renders a <noscript> tag to work with our current diffing algorithm. When returning null or false, ReactDOM.findDOMNode(this) will return null.

The render() function should be pure, meaning that it does not modify component state, it returns the same result each time it's invoked, and it does not read from or write to the DOM or otherwise interact with the browser (e.g., by using setTimeout). If you need to interact with the browser, perform your work in componentDidMount() or the other lifecycle methods instead. Keeping render() pure makes server rendering more practical and makes components easier to think about.
*/

let React = require('react');
let ReactDOM = require('react-dom');

let MyComponentClass = React.createClass({
  render: function () {
    return <h1>Hello world</h1>;
  }
});

ReactDOM.render(
  <MyComponentClass />,
  document.getElementById('app')
);