// styles.js
let fontFamily = 'Comic Sans MS, Lucida Handwriting, cursive';
let background = 'pink url("https://media.giphy.com/media/oyr89uTOBNVbG/giphy.gif") fixed';
let fontSize   = '4em';
let padding = '45px 0';
let color  = 'green';

module.exports = {
  fontFamily: fontFamily,
  background: background,
  fontSize:   fontSize,
  padding:    padding,
  color:      color
};

// AttentionGrabber.js
let React = require('react');
let styles = require('./styles');

let h1Style = {
  color:      styles.color,
  fontSize:   styles.fontSize,
  fontFamily: styles.fontFamily,
  padding:    styles.padding,
  margin:     0
};

let AttentionGrabber = React.createClass({
	render: function () {
		return <h1 style={h1Style}>WELCOME TO MY HOMEPAGE!</h1>;
	}
});

module.exports = AttentionGrabber;