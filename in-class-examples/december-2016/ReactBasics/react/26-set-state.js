/*
Any time that you call this.setState, this.setState AUTOMATICALLY calls render as soon as the state has changed.

That is why you can't call this.setState from inside of the render function! this.setState automatically calls render. If render calls this.setState, you will create an infinite loop.
*/

let React = require('react');
let ReactDOM = require('react-dom');

let green = '#39D1B4';
let yellow = '#FFD712';

let Toggle = React.createClass({
  getInitialState: function() {
    return {
      color: green
    }  
  },
  
  changeColor: function() {
    let newColor = this.state.color === green ? yellow : green;
    this.setState({ color: newColor });
  },
  
  render: function () {
    return (
      <div style={{background: this.state.color}}>
        <h1>
          Change my color
        </h1>
        <button onClick={this.changeColor}>
          Change color
        </button>
      </div>
    );
  }
});

ReactDOM.render(<Toggle />, document.getElementById('app'));