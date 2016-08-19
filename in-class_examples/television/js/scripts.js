$(function() {
  
  function displayShows() {
    
    // retrieve query
    let query = $('#tv-show').val();
    
    let url = 'http://api.tvmaze.com/search/shows?q=' + query;   
    
    $.getJSON(url, function(showList) {
      
      let $showContainer = $('#show-container');
      
      showList.forEach(function(show) {
        
        show = show.show;

        let imageUrl = show.image.medium;
        let showName = show.name;
        let rating = show.rating.average;
        let summary = show.summary;
        let type = show.type;
        
        
        
        
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