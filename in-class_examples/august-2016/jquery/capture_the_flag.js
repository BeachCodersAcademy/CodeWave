$(function() {
  
  $('#mystic-btn').click(function() {
    
    let $mysticScore = $('#mystic-score');
    
    // get current score
    let currentScore = parseInt($mysticScore.text());        
    // update score
    $mysticScore.text(currentScore + 1);
    
  });
  
  $('#valor-btn').click(function() {
    
    // get current score
    let currentScore = parseInt($('#valor-score').text());        
    // update score
    $('#valor-score').text(currentScore + 1);
    
  });
  
  $('#instinct-btn').click(function() {
    
    // get current score
    let currentScore = parseInt($('#instinct-score').text());        
    // update score
    $('#instinct-score').text(currentScore + 1);
    
  });
  
  $('body').mousemove(function(event) {
    console.log(event.pageX + ' ' + event.pageY);
  });
  
});