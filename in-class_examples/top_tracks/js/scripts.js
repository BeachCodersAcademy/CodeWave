$(function() {
  
  $('#compare-btn').click(function() {
    
    // get artists from input
    let artist1 = $('#artist1').val();
    let artist2 = $('#artist2').val();
    
    // make AJAX request to get artist id
    let artist1Id = getArtistId(artist1);
    let artist2Id = getArtistId(artist2);
    
    console.log(artist1Id);
    console.log(artist2Id);
    
    let $artist1Tracks = $('#artist1-tracks');        
    // console.log($artist1Tracks);
    
    let $artist2Tracks = $('#artist2-tracks');    
    // let artist1Tracks = document.getElementById('#artist1-tracks');   
    
    setTimeout(function() {
      displayTracks(artist1Id, $artist1Tracks);
      displayTracks(artist2Id, $artist2Tracks);
    }, 3000);
    
  });
  
  function displayTracks(id, $el) { 
    
    // use ids to get top tracks
    $.ajax({
      url: `https://api.spotify.com/v1/artists/${id}/top-tracks?country=us`,
      success: function(topTracks) {
        let tracks = topTracks.tracks;
        let name, imgUrl;
        tracks.forEach(function(track) {
          
          name = track.name;
          imgUrl = track.album.images[1].url;
          
          let nameTag = `<h3>${name}</h3>`
          let imgTag = `<img src=${imgUrl} alt=${artist1}>`;
          // add name & img to artist-tracks          
          $el.append(nameTag + imgTag);
          
        });
        
      }
    });
    // }, 3000);
    
  }
  
  function getArtistId(name) {
    let id;
    
    // $.when( 
      $.ajax({      
        url: `https://api.spotify.com/v1/search?q=${name}&type=artist`,
        async: false,
        success: function(artistData) {
          console.log(artistData.artists.items[0].id);
          id = artistData.artists.items[0].id;        
        }
      })
    // ).done(function() {
      return id;      
    // });
    
  }
  
});