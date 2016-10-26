'use strict';

let $query = $('#query');

$('#search-btn').click(displayMovie);
$query.keypress(e => {
  if (e.key === 'Enter') displayMovie();
});

function displayMovie() {
  
  // clear containers
  $('#show-container').empty();
  $('#modal-container').empty();
  
  let query = $query.val();
  $query.val('');
  
  let url = 'http://api.tvmaze.com/search/shows?q=' + query;
  
  $.getJSON(url, function(data) {
    
    data.forEach(show => {
      
      console.log(show);
      
      show = show.show
      let showName = show.name;
      let showId = show.id;
      let imgURL = show.image.medium;
      let summary = show.summary ? show.summary : '<p>Summary not available.</p>';
      
      let showTag = `<h2>${showName}</h2>`;
      let modalBtn = `<div class="btn btn-sm btn-success" data-toggle="modal" data-target="#${showId}">Episodes</div><br>`;
      
      // get episode info
      let episodeURL = 'http://api.tvmaze.com/singlesearch/shows?embed=episodes&q=' + showName;            
      
      let imgTag = `<img src="${imgURL}" alt="${showName}" />`;
      let summaryTag = summary;
      
      $('#show-container').append(showTag + modalBtn + imgTag + summaryTag);
            
      let episodeTags = '';
      
      $.getJSON(episodeURL, episodeData => {
        let episodes = episodeData._embedded.episodes;
        
        // console.log(episodes);

        // name, season, episode, img, summary
        episodes.forEach(episode => {
          
          console.log('--------------------');
          console.log(episode.image.medium);
          console.log('--------------------');
          
          let episodeName = `<h3>${episode.name}</h3>`;
          let episodeNumber = `<p>Season ${episode.season}, Episode ${episode.number}</p>`;
          let episodeImg = `<img src="${episode.image.medium}" alt="${episode.name}" />`;
          let summary = episode.summary;
          episodeTags += episodeName + episodeNumber + episodeImg + summary;
          
        });
        
        // console.log(episodeTags);        
        
      }).then(function() {
              
        addModal(showId, showName, episodeTags);        
      
      });
    
    });
    
  });
  
}

function addModal(id, showName, data) {
  
  let modal = `<div class="modal fade" id="${id}" tabindex="-1" role="dialog" aria-labelledby="myModalLabel">
  <div class="modal-dialog" role="document">
    <div class="modal-content">
      <div class="modal-header">
        <button type="button" class="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button>
        <h4 class="modal-title" id="myModalLabel">${showName}</h4>
      </div>
      <div class="modal-body">
        ${data}
      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-default" data-dismiss="modal">Close</button>
      </div>
    </div>
  </div>
</div>`;

$('#modal-container').append(modal);
  
}