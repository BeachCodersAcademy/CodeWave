/* 
1. Set initial state of input element with getInitialState
2. Give a value attribute to the element and set it equal to this.state.{statename}
3. Add an onChange attribute to the element and set it equal to the proper function
4. Create a function to handle the onChange event

An uncontrolled component is a component that maintains its own internal state. A controlled component is a component that does not maintain any internal state. Since a controlled component has no state, it must be controlled by someone else.

Think of a typical <input type='text' /> element. It appears onscreen as a text box. If you need to know what text is currently in the box, then you can ask the <input />, possibly with some code like this:

var input = document.querySelector('input[type="text"]');

var typedText = input.value; // input.value will be equal to whatever text is currently in the text box.
The important thing here is that the <input /> keeps track of its own text. You can ask it what its text is at any time, and it will be able to tell you.

The fact that <input /> keeps track of information makes it an uncontrolled component. It maintains its own internal state, by remembering data about itself.

A controlled component, on the other hand, has no memory. If you ask it for information about itself, then it will have to get that information through props. Most React components are controlled.

In React, when you give an <input /> a value attribute, then something strange happens: the <input /> BECOMES controlled. It stops using its internal storage. This is a more 'React' way of doing things.
*/

var React = require('react');
var ReactDOM = require('react-dom');

var Input = React.createClass({
  getInitialState: function() {
    return {
      userInput: ''
    }
  },
  
  handleUserInput: function(e) {
    this.setState({
      userInput: e.target.value
    });
  },
  
  render: function () {
    return (
      <div>
        <input type="text" onChange={this.handleUserInput} value={this.state.userInput} />
        <h1>{this.state.userInput}</h1>
      </div>
    );
  }
});

ReactDOM.render(
	<Input />,
	document.getElementById('app')
);