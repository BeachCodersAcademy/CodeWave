// ProfilePage.js
let React = require('react');
let ReactDOM = require('react-dom');
let NavBar = require('./NavBar.js');

let ProfilePage = React.createClass({
  render: function () {
    return (
      <div>
				<NavBar />
        <h1>All About Me!</h1>
        <p>I like movies and blah blah blah blah blah</p>
        <img src="https://s3.amazonaws.com/codecademy-content/courses/React/react_photo-monkeyselfie.jpg" />
      </div>
    );
  }
});

ReactDOM.render(<ProfilePage />, document.getElementById('app'));

// NavBar.js
let React = require('react');

let NavBar = React.createClass({
  render: function () {
    let pages = ['home', 'blog', 'pics', 'bio', 'art', 'shop', 'about', 'contact'];
    let navLinks = pages.map(function(page){
      return (
        <a href={'/' + page}>
          {page}
        </a>
      );
    });

    return <nav>{navLinks}</nav>;
  }
});

module.exports = NavBar;