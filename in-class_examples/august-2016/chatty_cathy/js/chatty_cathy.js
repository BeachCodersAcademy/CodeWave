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
    
    // get name
    let $name = $('#name');    
    let name = $name.val();
    
    // get chat
    let $chat = $('textarea');        
    let chat = $chat.val();        
    $chat.val('');
    
    // put cursor back in textarea
    $chat.focus();
    
    // add chat to Firebase
    database.ref('chats').push({
      chat,
      name,
      timestamp: new Date().toString()
    });
    
    // database.ref('users').push(name);
    
  });
  
  let $chats = $('#chats');
  
  // get data from database & put it on the screen
  database.ref('chats').on('child_added', function(snapshot) {
    
    // console.log(snapshot);
    // console.log(snapshot.val());
    
    $chats.prepend(`
      <p>
      <strong>${snapshot.val().name}:</strong> ${snapshot.val().chat}
      </p>
      `);
      
    });
    
  });