$(function() {
  
  $('#target').text('What\'s up doc????');
  // document.getElementById('target').textContent = 'Hello';
  
  $('#target').html('What\'s up doc????');
  
  // $('#change-img-btn').on('click', function() {
  // });  
  
  let linksToBabyAnimals = [
    'http://videos.revision3.com/revision3/images/shows/animalisttoo/0005/animalisttoo--0005--sloth-talk--large.thumb.jpg',
    'http://static.boredpanda.com/blog/wp-content/uploads/2016/05/cute-baby-sloth-institute-costa-rica-sam-trull-22.jpg',
    'http://www.liberallifestyles.com/wp-content/uploads/2016/05/sloth-12.jpg',
    'http://pz-discourse.s3.amazonaws.com/77738d011e6f8ed3b35f6236b049bb270f5201603e7.jpg',
    'http://i.upworthy.com/nugget/572a123ac71da8002c0000b7/attachments/leaves-6c86c4bf1de24fb4822f97a7b86a8830.jpg'
  ];
  
  const min = 0;
  const max = linksToBabyAnimals.length-1;
  
  $('#change-img-btn').click(function() {    
    
    let randomNum = Math.floor(Math.random() * (max - min + 1)) + min;
    
    let randomImg = linksToBabyAnimals[randomNum];
  
    // $('#sloth-img').fadeOut(1000);
    // $('#sloth-img').attr('src', randomImg)
    // $('#sloth-img').fadeIn(2000);
    
    // using method chaining
    
    // $('#sloth-img').fadeOut(1000).attr('src', randomImg).fadeIn(2000);
    
    $('#sloth-img').slideUp(1000).attr('src', randomImg).slideDown(2000);
    
    // $('body').css('background-color', 'red');
    // $('body').css('font-size', '100px');
    // $('body').css('font-weight', '100');
    
    // let props = {
    //   'background-color': 'green',
    //   'font-size': '100px',
    //   'font-weight': 100
    // };
    
    // $('body').css(props);
        
    $('body').css({
      'background-color': 'green',
      'font-size': '100px',
      'font-weight': 100
    });        
    
    $('#lorem').toggleClass('red-text');
    
    
  });
  
});