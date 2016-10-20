/*
To write propTypes for a stateless functional component, you define a propTypes object, as a property of the stateless functional component itself. Here's what that looks like:

function Example (props) {
  return <h1>{props.message}</h1>;
}

Example.propTypes = {
  message: React.PropTypes.string.isRequired
};
*/

// GuineaPigs.js
var React = require('react');

function GuineaPigs(props) {
  return (
      <div>
        <h1>Cute Guinea Pigs</h1>
        <img src={props.src} />
      </div>
    );
}

GuineaPigs.propTypes = {
  src: React.PropTypes.string.isRequired
};

module.exports = GuineaPigs;

// GuineaPigsContainer.js
var React = require('react');
var ReactDOM = require('react-dom');
var GuineaPigs = require('../components/GuineaPigs');

var GUINEAPATHS = [
  'https://s3.amazonaws.com/codecademy-content/courses/React/react_photo-guineapig-1.jpg',
  'https://s3.amazonaws.com/codecademy-content/courses/React/react_photo-guineapig-2.jpg',
  'https://s3.amazonaws.com/codecademy-content/courses/React/react_photo-guineapig-3.jpg',
  'https://s3.amazonaws.com/codecademy-content/courses/React/react_photo-guineapig-4.jpg'
];

var GuineaPigsContainer = React.createClass({
  getInitialState: function () {
    return { currentGP: 0 };
  },

  nextGP: function () {
    var current = this.state.currentGP;
    var next = ++current % GUINEAPATHS.length;
    this.setState({ currentGP: next });
  },

  interval: null,

  componentDidMount: function () {
    this.interval = setInterval(this.nextGP, 5000);
  },

  componentWillUnmount: function () {
    clearInterval(this.interval);
  },

  render: function () {
    var src = GUINEAPATHS[this.state.currentGP];
    return <GuineaPigs src={src} />;
  }
});

ReactDOM.render(
  <GuineaPigsContainer />, 
  document.getElementById('app')
);