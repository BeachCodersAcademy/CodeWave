let React = require('react');
let ReactDOM = require('react-dom');

let fiftyFifty = Math.random() < 0.5;

// React.createClass call begins here:
let TonightsPlan = React.createClass({
  render: function () {
    let plan;
    if (fiftyFifty) {
      plan = 'out';
    } else {
      plan = 'to bed';
    }
    return <h1>Tonight I am going {plan} WOOO</h1>;
  }
});

ReactDOM.render(
  <TonightsPlan />,
document.getElementById('app')
);