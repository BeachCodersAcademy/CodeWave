let $tvShow = $('#tv-show');
let $showContainer = $('#show-container');


function displayShowData(shows) {
  
  let search = $("select option:selected").val();
  
  if (search === 'people') {
    
    for (let show of shows) {
      
      let name = show.person.name;
      let imageURL = show.person.image;
      
      $showContainer.append(`
          <h1>${name}</h1>
          <img src=${imageURL} alt=${name} />
      `);
      
    }
    
  } else {
    
    for (let show of shows) {
      show = show.show;
      let showName = show.name;
      let genres = show.genres.join(', ');
      let schedule = show.schedule.days.join(', ');
      // let rating = show.rating.average;
      // if (rating === null) rating = 'Not yet rated.';
      // ternary operator
      let rating = show.rating.average ? show.rating.average : 'Not yet rated.';
      let poster = show.image.original;
      let summary = show.summary;
      
      $showContainer.append(`
          <div class="row">
            <div class="col-md-4 col-md-offset-2">
              <h2>${showName}</h2>
              <h4>${genres}</h4>
              <h4>${schedule}</h4>
              <h4>${rating}</h4>
              ${summary}
            </div>
            <div class="col-md-4">
              <img src=${poster} alt=${showName} class="img-responsive"/>
            </div>
          </div>
      `);
    
    }
  }
  
}

function getShowData() {
  
  $showContainer.empty();
  // the exact same thing as:
  // $showContainer.html('');
  
  // save the input
  let query = $tvShow.val();
  
  // clear the input box
  $tvShow.val('');
  
  let search = $("select option:selected").val();
  
  let url = `http://api.tvmaze.com/search/${search}?q=${query}`;
  
  $.getJSON(url).then(function(data) {
    displayShowData(data);
  });
  
}

$('#search-btn').click(function(e) {
  // prevents the page from reloading (because it's in a form tag)
  e.preventDefault();
  
  getShowData();
});

$('select').change(function() {
  
  let newPlaceholder = $("select option:selected").text();
  
  $tvShow.attr('placeholder', newPlaceholder);
  
  $tvShow.focus();
  
});