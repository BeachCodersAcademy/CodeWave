$(function() {
  
  // Initialize Firebase
  var config = {
    apiKey: "AIzaSyBaVHQRyEEeot5gJlGaGmCyDgy2_-RePjQ",
    authDomain: "chatty-cathy-6136e.firebaseapp.com",
    databaseURL: "https://chatty-cathy-6136e.firebaseio.com",
    storageBucket: "",
  };
  firebase.initializeApp(config);
  
  // initialize database
  let database = firebase.database();
  
  $('#chat-btn').click(function() {
    
    let $chat = $('textarea');        
    let chat = $chat.val();        
    $chat.val('');
    
    // put cursor back in textarea
    $chat.focus();
    
    // add chat to Firebase
    database.ref().push(chat);
    
  });
  
  
  
});