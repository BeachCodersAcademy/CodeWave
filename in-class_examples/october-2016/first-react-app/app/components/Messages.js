let React = require('react');
let firebase = require('firebase');

let config = {
  apiKey: "AIzaSyBXcFuG9sfEZbb9lFzJC9zwaWFVW5yLenk",
  authDomain: "chats-ce9ab.firebaseapp.com",
  databaseURL: "https://chats-ce9ab.firebaseio.com",
  storageBucket: "chats-ce9ab.appspot.com",
  messagingSenderId: "334921481375"
};
firebase.initializeApp(config);

let Messages = React.createClass({
  
  componentWillMount: function() {
    firebase.ref('messages').on('child_added', snapshot => {
      console.log(snapshot);
      console.log(snapshot.val());
      // get username & message
      let userName = snapshot.val().userName;
      let message = snapshot.val().message;
      
      console.log(message);
      console.log(typeof message);
      

      // add it to the screen
      $('#messages-list').append(`
        <li>
          ${userName}: <span>${message}</span>
        </li>
      `);
      
    });
  }
  
  render: function() {
    return (
      <p>Messages</p>
    );
  }
});

module.exports = Messages;