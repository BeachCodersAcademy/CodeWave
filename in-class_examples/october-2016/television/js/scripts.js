let $query = $('#query');

$('#search-btn').click(displayMovie);
$query.keypress(e => {
  if (e.key === 'Enter') displayMovie();
});

function displayMovie() {
  
  let query = $query.val();
  $query.val('');
  
  let url = 'http://api.tvmaze.com/search/shows?q=' + query;
  
  $.getJSON(url, function(data) {
    
    data.forEach(show => {
      
      console.log(show);
      
      show = show.show
      let showName = show.name;
      let imgURL = show.image.medium;
      let summary = show.summary ? show.summary : '<p>Summary not available.</p>';
      
      let showTag = `<h2>${showName}</h2>`;
      
      // get episode info
      let episodeURL = 'http://api.tvmaze.com/singlesearch/shows?embed=episodes&q=' + showName;
      $.getJSON(episodeURL, episodeData => {
        let episodes = episodeData._embedded.episodes;
        console.log(episodes);
        
        // name, season, episode, img, summary
        episodes.forEach(episode => {
          
          let episodeName = `<h3>${episode.name}</h3>`;
          let episodeNumber = `<p>Season ${episode.season}, Episode ${episode.number}</p>`;
          let episodeImgURL = `<img src="${episode.image}" alt="${episode.name}" />`;
          let summary = episode.summary;
          
          
          
        });
        
      });
      
      let imgTag = `<img src="${imgURL}" alt="${showName}" />`;
      let summaryTag = summary;
      
      $('#show-container').append(showTag + imgTag + summaryTag);
    });
    
  });
  
}