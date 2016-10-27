/*
** 'set up' means target the buttons
1. set up "Find Love" button
- get input data
- use input data to find match(es)
- display matches on screen
2. set up "Search" button
- get search name
- use search name to get data
- display data
3. set up "Random" buttons
- get gender
- use gender to get data until correct gender is found
- display random match
4. make it pretty
- add favicon
- display in lbs & feet
- display message if no matches found
- loading image
- add theme

Make number min to 0
*/
let $fromHeight = $('#from-height');
let $toHeight = $('#to-height');
let $fromWeight = $('#from-weight');
let $toWeight = $('#to-weight');
// let $fromAge = $('#from-age');
// let $toAge = $('#to-age');
let $gender = $('#gender');
let $hairColor = $('#hair-color');
let $skinColor = $('#skin-color');

let $matchesContainer = $('#matches-container');
let $paginationContainer = $('#pagination-container');

const MAX_RESULTS = 5;
let matches;
let currentIndex;

let imgWait =`<img src="assets/img/bb8.gif" class="wait"><h5 class=text-center>Finding your love!</h5>`;

$('#find-love-btn').click(() => {getMatches()});

function getMatches() {
  
  resetPage();
  
  $('#waiting').append(imgWait);
    
  let fromHeight = $fromHeight.val() ? Number($fromHeight.val()) : 0;
  let toHeight = $toHeight.val() ?  Number($toHeight.val()) : Number.POSITIVE_INFINITY;
  let fromWeight =  Number($fromWeight.val()) ? $fromWeight.val() : 0;
  let toWeight = $toWeight.val() ?  Number($toWeight.val()) : Number.POSITIVE_INFINITY;
  // let fromAge = $fromAge.val() ? $fromAge.val() : 0;
  // let toAge = $toAge.val() ? $toAge.val() : Number.POSITIVE_INFINITY;
  let gender = $gender.val();
  let hairColor = $hairColor.val() ? $hairColor.val() : 'any';
  let skinColor = $skinColor.val() ? $skinColor.val() : 'any';
  
  for (let i = 1; i <= 9; i++) {
    
    $.getJSON('http://swapi.co/api/people/?format=json&page=' + i, data => {
      
      let people = data.results;
      
      // console.log(people);
      // check for matching inputs
      
      people.forEach(person => {
        if (person.height >= fromHeight && person.height <= toHeight
          && person.mass >= fromWeight && person.mass <= toWeight) {
            
          // check gender (male, female, or n/a)            
          if (gender === 'any'
          || gender === person.gender) {
            
            // check hair color
            if (hairColor === 'any'
            || person.hair_color.includes(hairColor)) {
              
              // check skin color
              if (skinColor === 'any'
              || person.skin_color.includes(skinColor)) {
                
                matches.push(person);
                
              } // / skin color
              
            } // / hair color
              
          } // / gender
            
        } // / height & weight
          
      }); // / forEach
        
    }); // / getJSON
      
  }; // / for
    
  setTimeout(() => {
    
    $('#waiting').empty();
    
    // console.log(matches);
    
    if(matches.length === 0){
      responsiveVoice.speak('Not even in a galaxy far far away there\'s a match for you!');
      $matchesContainer.append(`
        <h3 class="no-match-title">Not even in a galaxy far far away there's a match for you!</h3>
        <p class="no-match-text">Try changing some of your preferences</p>
      `);
    }else { //if not empty, we display the results
      responsiveVoice.speak(`We found ${matches.length} matches for you!`);
      
      displayMatches();

      $('#next-btn').removeClass('invisible');
          
    }
        
  }, 4000); //Change it to 4s cause it wasn't finding everyone sometimes
  
}

// Search-Btn-Feature Start //
$('#search-by-name-btn').on('click', () => {
  singleSearch();
});

$('#query').keypress(e => {
  if (e.key === 'Enter') singleSearch();
});

function singleSearch() {
  
  resetPage();
  
  $('#waiting').append(imgWait);
  
  let query = $('#query').val();
  $('#query').val('');
  
  let url = 'https://swapi.co/api/people/?search=' + query;
  
  $.getJSON(url, function(data) {
    
    console.log(data);
    
    // get the array of people
    matches = data.results;
    
    $('#waiting').empty();
    
    displayMatches();
      
    currentIndex += MAX_RESULTS;
    
  });
};

$('#prev-btn').click(() => {
  
  if (currentIndex - MAX_RESULTS >= 0) {
    
    currentIndex -= MAX_RESULTS;
    
    $matchesContainer.empty('');
    
    displayMatches();
      
    $('#next-btn').removeClass('invisible');
    
  } else if (currentIndex === matches.length -1) {

    currentIndex -= currentIndex % MAX_RESULTS;
    
  } else {
    $('#prev-btn').addClass('invisible');
  }
    
});

$('#next-btn').click(() => {
  
  currentIndex += MAX_RESULTS;

  if (currentIndex + MAX_RESULTS <= matches.length) {
    
    $matchesContainer.empty('');
    displayMatches();    

    currentIndex += MAX_RESULTS;
      
    $('#prev-btn').removeClass('invisible');
    
  } else if (currentIndex + MAX_RESULTS > matches.length 
    && currentIndex + MAX_RESULTS < matches.length + MAX_RESULTS) {
    
    // display if matches.length is not divisible by MAX_RESULTS
    /*
    currentIndex: 50
    MAX_RESULTS: 5
    matches.length: 51
    matches.length + MAX_RESULTS: 56
    */
    
    $matchesContainer.empty('');

    displayMatches();
      
    currentIndex = matches.length-1;
              
    $('#next-btn').addClass('invisible');
    
  }

});

function displayMatches() {
  
  for (let i = currentIndex; i < MAX_RESULTS; i++) {
    
    let person = matches[i];
    
    let name = person.name;
    // TODO: get image url
    // let imgURL =
    let gender = person.gender;
    let height = person.height;
    let weight = person.mass;
    let hairColor = person.hair_color;
    let skinColor = person.skin_color;
    
    let weightLb = kilogramsToPounds(weight);
    let heightFeet = cmToFeet(height);
    
    $matchesContainer.append(`
      <h2>${i + 1}: ${name}</h2>
      <p><small>${gender}</small></p>
      <img src="" alt="${name}" />
      <p>Height: ${heightFeet} | Weight: ${weightLb} lb</p>
      <p>Hair Color: ${hairColor} | Skin Color: ${skinColor}</p>
    `);
      
  }
  
}

// Speech to text
if (annyang) {
  // Let's define our first command. First the text we expect, and then the function it should call
  var commands = {
    '(look) (search) (find) (for) love': function() {
      responsiveVoice.speak(`Looking for love!`);
      getMatches();
    },
    'search for :name': function(name) {
      responsiveVoice.speak(`Searching for ${name}`);
      $('#query').val(name);
      displayResult();
    },
    'height :start to :end (centimeters)': function(start, end) {
      $fromHeight.val(start);
      $toHeight.val(end);
    }
  };
  
  // Add our commands to annyang
  annyang.addCommands(commands);
  
  // Start listening. You can call this here, or attach this call to an event, button, etc.
  annyang.start();
}

function resetPage() {
  matches = [];
  currentIndex = 0;
  $matchesContainer.empty();
}

function kilogramsToPounds(n) {
  return (n/0.4536).toFixed(1);
}

function cmToFeet(n) {
  var realFeet = ((n*0.393700) / 12);
  var feet = Math.floor(realFeet);
  var inches = Math.round((realFeet - feet) * 12);
  return feet + "&prime;" + inches + '&Prime;';
}