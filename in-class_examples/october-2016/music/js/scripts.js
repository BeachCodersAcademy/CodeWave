let $query = $('#query');
let $searchBtn = $('#search-btn');
let $artistContainer = $('#artist-container');
let $headline = $('#headline');

let progress;

$query.keypress(e => {
  if (e.key === 'Enter') displayArtists();
});

$searchBtn.click(() => {
  displayArtists();
});

let accordionArtists;

function displayArtists() {
  $('html').css('cursor' ,'wait');
  progress = 0;  
  updateProgressBar(0);
  
  let artist = $query.val();
  $query.val('');    
  
  
  // get artist id
  let url = 'https://api.spotify.com/v1/search?type=artist&limit=1&q=' + artist;
  let artistId;
  $.getJSON(url, artistData => {
    // console.log(artistData);
    
    let imgURL = artistData.artists.items[0].images[0].url;
    let artistName = artistData.artists.items[0].name;
    artistId = artistData.artists.items[0].id;
    
    let imgTag = `<img class="icon" src="${imgURL}" alt=${artistName} />`;
    
    $headline.html(`
      Similar artists to ${artistName} ${imgTag}
    `);
    
  }).then(() => {
    
    // get similar artists
    let url = 'https://api.spotify.com/v1/artists/' + artistId + '/related-artists'
    $.getJSON(url, function (similarArtists) {
      
      similarArtists = similarArtists.artists;
      
      similarArtists.forEach(artist => {
        
        let artistId = artist.id;
        let artistName = artist.name;
        let popularity = artist.popularity;
        let imgURL = artist.images[0].url;
        let imgTag = `<img src="${imgURL}" alt="${artistName}" class="icon" />`;
        
        let panelHead = `
          <h3>${artistName} <small>popularity: ${popularity}</small>
          ${imgTag}
        `;
        // console.log(panelHead); works!
        
        // get top tracks
        let panelBody = '';
        let url = 'https://api.spotify.com/v1/artists/' + artistId + '/top-tracks?country=US';
        $.getJSON(url, topTracks => {
          // console.log(topTracks);
          
          topTracks = topTracks.tracks;
          
          
          topTracks.forEach(track => {
            updateProgressBar(0.1);
            let trackName = track.name;
            let albumName = track.album.name;
            let popularity = track.popularity;
            let audioUrl = track.preview_url;
            let imageUrl = track.album.images[0].url;
            
            let trackInfo = `
              <h3>${trackName} | ${albumName} <small>populatiry: ${popularity}</small></h3>
              <img src="${imageUrl}" alt="${albumName}" class="album"/>
              <br>
              <audio controls>
                <source src="${audioUrl}" type="audio/mpeg">
                  Your browser does not support the audio element.
              </audio>              
            `;
            
            panelBody += trackInfo;
            
          });
          
        }).then(() => {

          // 2. add data to accordian (create accordian variable)
          accordionArtists += getPanel(artistId, panelHead, panelBody);
          // console.log(accordionArtists);
        });
        
      });
      
    });
    
  }).then(() => {
  
  setTimeout(function() {
    
    // console.log(accordionArtists);
    // 3. put accordion on the page
    $artistContainer.append(`
      <div class="panel-group" id="accordion" role="tablist" aria-multiselectable="true">
        ${accordionArtists}
      </div>
      `);
    $('html').css('cursor' ,'auto');
    
    }, 3000);
  
  });
  
}

function getPanel(id, head, body) {
  return `
  <div class="panel panel-default">
    <div class="panel-heading" role="tab" id="headingThree">
      <h4 class="panel-title">
        <a class="collapsed" role="button" data-toggle="collapse" data-parent="#accordion" href="#${id}" aria-expanded="false" aria-controls="${id}">
          ${head}
        </a>
      </h4>
    </div>
    <div id="${id}" class="panel-collapse collapse" role="tabpanel" aria-labelledby="headingThree">
      <div class="panel-body">
        ${body}
      </div>
    </div>
  </div>
  `;
}


function updateProgressBar(n) {
  // console.log('updateProgressBar() called');
  progress += n;
  
  let progressBar = `
  <div class="progress">
  <div class="progress-bar progress-bar-striped active" role="progressbar" aria-valuenow="${progress}" aria-valuemin="0" aria-valuemax="100" style="width: ${progress}%">
    <span class="sr-only">${progress}% Complete</span>
  </div>
</div>
  `;
  
  $('#progress-bar').html(progressBar);
  
}