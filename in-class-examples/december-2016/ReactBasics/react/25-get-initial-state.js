/*
Lifecycle Method: getInitialState()

Invoked once before the component is mounted. The return value will be used as the initial value of this.state.
*/

let React = require('react');
let ReactDOM = require('react-dom');

let App = React.createClass({
  getInitialState: function() {
    return {
      title: 'Best App'
    }
  },
  
  render: function () {
    return (
      <h1>
        {this.state.title}
      </h1>
    );
  }
});

ReactDOM.render(<App />, document.getElementById('app'));