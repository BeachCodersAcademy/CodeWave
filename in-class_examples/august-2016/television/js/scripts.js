$(function() {
  
  // set cursor to input area
  $('#tv-show').focus();
  
  function displayShows() {
    
    let $showContainer = $('#show-container');
    $showContainer.html('');
    
    // retrieve query
    let query = $('#tv-show').val();
    
    $('#tv-show').val('');
    
    let url = 'http://api.tvmaze.com/search/shows?q=' + query;   
    
    $.getJSON(url, function(showList) {      
      
      showList.forEach(function(show) {
        
        show = show.show;
        
        let showId = show.id;
        
        let showName = show.name;
        let imageUrl = show.image.medium;
        let rating = show.rating.average ? show.rating.average : 'Not yet rated.';
        let summary = show.summary;
        let type = show.type;
        
        let nameTag = '<p class="show-name">' + showName + '</p>';
        let castBtn = `<button type="button" class="btn btn-primary" data-toggle="modal" data-target="#show${showId}">
        Cast
        </button>`;
        let imgTag = `<img src=${imageUrl} alt=${showName} class="img-responsive center-block">`;
        let ratingTag = `<p class="rating">Rating: ${rating}</p>`;
        let summaryTag = `<div class="summary">${summary}</div>`;
        let typeTag = `<p class="type">${type}</p>`;
        
        // <!-- Modal -->
        // http://api.tvmaze.com/shows/1/cast
        
        let castTag = '';
        
        $.getJSON(`http://api.tvmaze.com/shows/${showId}/cast`, function(castList) {
          
          // console.log(castList);
          castList.forEach(function(cast) {
            let character = cast.character;
            let person = cast.person;
            let characterName = character.name;
            let characterImg = `<img src=${character.image.medium} alt=${characterName}>`;
            
            let personName = person.name;
            let personImg = `<img src=${person.image.medium} alt=${personName}>`;
            
            castTag += `<p class="text-center">${personName} as ${characterName}</p>
            ${personImg}${characterImg}`;
            
            // console.log(castTag);
            
          });                    
          
        });                
        
        setTimeout(addToScreen, 2000);        
        
        function addToScreen() {
          
          let modal = `<div class="modal fade" id="show${showId}" tabindex="-1" role="dialog" aria-labelledby="myModalLabel">
          <div class="modal-dialog" role="document">
          <div class="modal-content">
          <div class="modal-header">
          <button type="button" class="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button>
          <h4 class="modal-title" id="myModalLabel">${showName}</h4>
          </div>
          <div class="modal-body">
          
          ${castTag}
          
          </div>
          <div class="modal-footer">
          <button type="button" class="btn btn-default" data-dismiss="modal">Close</button>
          </div>
          </div>
          </div>
          </div>`;
          
          $showContainer.append(`<div class="show">${nameTag}${castBtn}${ratingTag}${summaryTag}${imgTag}</div>${modal}`);
          
        }
        
      });
      
    });
    
  }
  
  $('#search-btn').click(displayShows);
  
  $('#tv-show').keypress(function(event) {
    
    // console.log(event);
    
    // if enter key was pressed
    if (event.key === 'Enter') {
      displayShows();
    }
    
  });
  
});