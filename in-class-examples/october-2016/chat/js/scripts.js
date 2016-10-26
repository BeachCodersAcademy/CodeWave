// Initialize Firebase
let config = {
  apiKey: "AIzaSyBXcFuG9sfEZbb9lFzJC9zwaWFVW5yLenk",
  authDomain: "chats-ce9ab.firebaseapp.com",
  databaseURL: "https://chats-ce9ab.firebaseio.com",
  storageBucket: "chats-ce9ab.appspot.com",
  messagingSenderId: "334921481375"
};
firebase.initializeApp(config);

// Get a reference to the database service
let database = firebase.database();

// press ctrl + enter to send message
// $('#message').keypress(function (e) {
$('#message').keypress(e => {
  // console.log(e);
  // check for ctrl + enter
  if (e.ctrlKey && e.key === 'Enter') {
    addMessage();
  }
});

let messagesRef = database.ref('messages');

function addMessage() {
  // get username
  let userName = $('#user-name').val();
  
  // get & clear message
  let message = $('#message').val();
  $('#message').val('');
  
  // put username & message in database
  messagesRef.push({
    userName,
    message
  });

}

messagesRef.on('child_added', snapshot => {
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