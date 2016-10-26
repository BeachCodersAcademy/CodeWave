$(function() {
  
  let $artists = $('#artists');
  let $country = $('#country');
  
  $('#search').click(displayTopArtists);
  $country.keypress(event => {
    if (event.key === 'Enter') displayTopArtists();
  });
  
  function displayTopArtists() {
    
    $artists.empty();    
    
    let country = $country.val();
    
    let topArtistsUrl = `http://ws.audioscrobbler.com/2.0/?method=geo.gettopartists&country=${country}&api_key=52043b0329520e42cc17a46e430ddb21&format=json`;
    
    // $.ajax({
    //   url: topArtistsUrl,
    //   success: function(data) {
    //     console.log(data);
    //   }
    // });
    
    // $.getJSON(topArtistsUrl, function(data) {
    //   console.log(data);
    // });
    
    
    $.getJSON(topArtistsUrl, data => {
      
      let country = data.topartists['@attr'].country;
      
      let artists = data.topartists.artist;
      
      artists.forEach((artist, i) => {
        let artistName = artist.name;
        let imgUrl = artist.image[3]['#text'];
        
        $artists.append(`
          <div class="col-md-6 text-center">
          <h2>${i + 1}. ${artistName}</h2>
        <p>
        <a onclick="getTopTracks('${artistName}')">
        Get Top Tracks
        </a>
        </p>
        <img src=${imgUrl} alt=${artistName} class="img-responsive center-block"/>
      </div>
      `);
      
    });
    
  });
  
}

});

function getTopTracks(artist) {
  
  let url = `https://api.spotify.com/v1/search?q=${artist}&type=artist&limit=1`;
  
  $.getJSON(url, data => {
    
    let artistId = data.artists.items[0].id;
    let artistImgUrl = data.artists.items[0].images[0].url;
    
    $.getJSON(`https://api.spotify.com/v1/artists/${artistId}/top-tracks?country=US`, data => {
      
      let tracks = data.tracks;
      
      let tracksDiv = '';
      
      tracks.forEach((track, i) => {
        
        let trackName = track.name;
        let albumName = track.album.name;
        let audioUrl = track.preview_url;
        let albumImgUrl = track.album.images[0].url;
        let popularity = track.popularity;
        
        tracksDiv += `
          <div class="col-md-6 text-center">
          <h3>${i+1}. ${trackName}</h3>
          <h4>${albumName}</h4>
          <h6>Popularity: ${popularity}</h6>
          <img src="${albumImgUrl}" alt="${albumName}" class="img-responsive" />
          <audio controls>
            <source src="${audioUrl}" type="audio/mpeg">
            Your browser does not support the audio element.
          </audio>
          </div>
        `;
    
      });
      
      // console.log(tracksDiv);
  
      let modal = `
      <div id="tracksModal" class="modal fade" tabindex="-1" role="dialog" aria-labelledby="gridSystemModalLabel">
      <div class="modal-dialog modal-lg" role="document">
      <div class="modal-content">
      <div class="modal-header">
      <button type="button" class="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button>
      <h4 class="modal-title" id="gridSystemModalLabel">${artist}</h4>
      </div>
      <div class="modal-body">
      <div class="row">
      ${tracksDiv}
      </div>
      </div>
      <div class="modal-footer">
      <button type="button" class="btn btn-default" data-dismiss="modal">Close</button>
      </div>
      </div><!-- /.modal-content -->
      </div><!-- /.modal-dialog -->
      </div><!-- /.modal -->
      `;

      // put our JS modal on the HTML page
      $('#modal').html(modal);

      // display our modal
      $('#tracksModal').modal();

    });

});

}