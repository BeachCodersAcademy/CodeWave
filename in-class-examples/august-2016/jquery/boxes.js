$(function() {
  
  
  $('.box').mouseenter(function() {        
    
    let randomColor = '#'+Math.floor(Math.random()*16777215).toString(16);
    
    $(this).css('background-color', randomColor);
    $(this).css('box-shadow', '0 0 30px 30px white');
    $(this).css('z-index', "1");
    
  });
  
  $(".box").mouseleave(function () {
    $(this).css('box-shadow', "none");
    $(this).css('z-index', "0");
  });
  
  
});