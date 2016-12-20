/*
A render function must have a return statement. However, that isn't all that it can have.

A render function can also be a fine place to put simple calculations that need to happen right before a component renders. 
*/

let React = require('react');
let ReactDOM = require('react-dom');

let friends = [
  {
    title: "Yummmmmmm",
    src: "https://s3.amazonaws.com/codecademy-content/courses/React/react_photo-monkeyweirdo.jpg"
  },
  {
    title: "Hey Guys!  Wait Up!",
    src: "https://s3.amazonaws.com/codecademy-content/courses/React/react_photo-earnestfrog.jpg"
  },
  {
    title: "Yikes",
    src: "https://s3.amazonaws.com/codecademy-content/courses/React/react_photo-alpaca.jpg"
  }
];

let Friend = React.createClass({
  render: function() {
    let friend = friends[Math.floor(Math.random()*friends.length)];
    return (
      <div>
      <h1>{friend.title}</h1>
      <img
      src={friend.src}/>
      </div>
    );
  } 
});

ReactDOM.render(<Friend />, document.getElementById('app'));