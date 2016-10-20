// In this programming pattern, the container component does the work of figuring out what to display. The presentational component does the work of actually displaying it. If a component does a significant amount of work in both areas, then that's a sign that you should use this pattern!

// GuineaPigs.js
let React = require('react');

let GuineaPigs = React.createClass({

  render: function () {
    let src = this.props.src;
    return (
      <div>
        <h1>Cute Guinea Pigs</h1>
        <img src={src} />
      </div>
    );
  }
  
});

module.exports = GuineaPigs;


// GuineaPigsContainer.js
let React = require('react');
let ReactDOM = require('react-dom');
let GuineaPigs = require('../components/GuineaPigs');

let GUINEAPATHS = [
  'https://s3.amazonaws.com/codecademy-content/courses/React/react_photo-guineapig-1.jpg',
  'https://s3.amazonaws.com/codecademy-content/courses/React/react_photo-guineapig-2.jpg',
  'https://s3.amazonaws.com/codecademy-content/courses/React/react_photo-guineapig-3.jpg',
  'https://s3.amazonaws.com/codecademy-content/courses/React/react_photo-guineapig-4.jpg'
];

let GuineaPigsContainer = React.createClass({
  getInitialState: function () {
    return { currentGP: 0 };
  },

  nextGP: function () {
    let current = this.state.currentGP;
    let next = ++current % GUINEAPATHS.length;
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
    let src = GUINEAPATHS[this.state.currentGP];
    return <GuineaPigs src={src} />;
  }
});

ReactDOM.render(
  <GuineaPigsContainer />, 
  document.getElementById('app')
);