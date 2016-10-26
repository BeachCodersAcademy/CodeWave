$(function() {
  
  // Initialize Firebase
  var config = {
    apiKey: "AIzaSyA22DjwgwIBwyB3Ts2B11unryeaJo6imYE",
    authDomain: "ringing-bell-3a33f.firebaseapp.com",
    databaseURL: "https://ringing-bell-3a33f.firebaseio.com",
    storageBucket: "",
    messagingSenderId: "529421538794"
  };
  firebase.initializeApp(config);
  
  let database = firebase.database();
  
  $('#post-btn').click(function() {
    
    // grab title & content
    let title = $('#title').val();
    let content = $('#content').val();
    
    $('#title').val('').focus();
    $('#content').val('');
    
    database.ref('posts').push({
      title,
      content
    });
    
  });
  
  database.ref('posts').on('child_added', function(snapshot) {
      
    $('#posts').prepend(`
      <h2>${snapshot.val().title}</h2>
      <p>${snapshot.val().content}</p>
    `);
      
  });
  
});