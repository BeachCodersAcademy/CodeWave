$(document).ready(function() {

  //when the page has loaded grab a random show on today's schedule
  let url = 'http://api.tvmaze.com/schedule'
  $.getJSON(url, function(data) {
    let min = 0;
    let max = data.length - 1;
    let randIndex = getRandomIntInclusive(min, max);
    let show = data[randIndex];
    $('.random-title').empty();
    $('.random-title').append(show.show.name)
    $('.random-img').attr('src', show.image)
  })

  //check if the search button has been pressed
  $('button').click(sendInput)


  function sendInput() {
    //grab value from input box
    let inputValue = $('.search-input').val()

    //api endpoint
    let url = 'http://api.tvmaze.com/singlesearch/shows?q=' + inputValue

    //grabs data from endpoint
    $.getJSON(url, function(data) {
      //the function below adds data to the html
      putDataInHTML(data);
    })
  }

  //generalize this function
  function putDataInHTML(showData) {
    console.log(showData.name);
    $('.movie-title').empty();
    $('.movie-title').append(showData.name);
    $('.date-release').empty();
    $('.date-release').append(showData.premiered);
  }


  // Returns a random integer between min (included) and max (included)
  // Using Math.round() will give you a non-uniform distribution!
  function getRandomIntInclusive(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }



})
