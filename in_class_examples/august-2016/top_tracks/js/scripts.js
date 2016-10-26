$(function() {
  
  let $artist1 = $('#artist1');
  let $artist2 = $('#artist2');
  
  $('#compare-btn').click(start);
  
  $artist1.keypress(function(event) {
    if (event.key === 'Enter') start();
  });
  
  $artist2.keypress(function(event) {
    if (event.key === 'Enter') start();
  });
  
  function start() {
    
    $('#compare-btn').addClass('pulse');
    
    // clear artist tracks
    let $artist1Tracks = $('#artist1-tracks');
    let $artist2Tracks = $('#artist2-tracks');    
    
    $artist1Tracks.empty();
    $artist2Tracks.empty();
    
    // get artists from input
    let artist1 = $artist1.val();
    let artist2 = $artist2.val();
    
    // make AJAX request to get artist id
    // let artist1Id = getArtistId(artist1);
    
    
    init(artist1, $artist1Tracks);
    init(artist2, $artist2Tracks);
    
    function init(artistName, $el) {
      
      $.getJSON(`https://api.spotify.com/v1/search?q=${artistName}&type=artist`).then(function(artistData) {
        // console.log(artistData.artists.items[0].id);
        let id = artistData.artists.items[0].id;
        let name = artistData.artists.items[0].name;
        
        displayTracks(name, id, $el);      
        
      });
    }
    
  }
  
  function displayTracks(name, id, $el) { 
    
    $el.append(`<h1>${name}</h1>`);
    
    // use ids to get top tracks
    $.ajax({
      url: `https://api.spotify.com/v1/artists/${id}/top-tracks?country=us`,
      success: function(topTracks) {
        let tracks = topTracks.tracks;
        let name, imgUrl, audioUrl;
        tracks.forEach(function(track) {
          
          name = track.name;
          imgUrl = track.album.images[1].url;
          audioUrl = track.preview_url;
          
          // add stuff to html
          $el.append(`
            <div class="animated zoomInDown">
            <h3>${name}</h3>
            <img src=${imgUrl} alt=${artist1}>
            <audio controls>
            <source src="${audioUrl}" type="audio/mpeg">
            Your browser does not support the audio element. Get Chrome!
            </audio>
            </div>
          `);
          
        });
        
      }
    });
    
  }
  
});