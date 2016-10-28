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

let $prevBtn = $('#prev-btn');
let $nextBtn = $('#next-btn');

const MAX_RESULTS = 5;
let matches;
let currentIndex;

let imgWait =`<img src="assets/img/bb8.gif" class="wait"><h5 class=text-center>Finding your love!</h5>`;

$('#find-love-btn').click(() => {getMatches()});

function getMatches() {
  
  resetPage();
  
  $('#waiting').append(imgWait);
    
  populateMatches();
    
  setTimeout(() => {
    
    $('#waiting').empty();
        
    if(matches.length === 0){
      
      responsiveVoice.speak('Not even in a galaxy far far away there\'s a match for you!');
      $matchesContainer.append(`
        <h3 class="no-match-title">Not even in a galaxy far far away there's a match for you!</h3>
        <p class="no-match-text">Try changing some of your preferences</p>
      `);
      
    } else {
      
      responsiveVoice.speak(`We found ${matches.length} matches for you!`);      
      displayMatches();
          
    }
        
  }, 4000);
  
}

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
        
    matches = data.results;
    
    $('#waiting').empty();
    
    displayMatches();
      
    currentIndex += MAX_RESULTS;
    
  });
};

$nextBtn.click(() => {
  
  // check if user goes too far to the right
  if (matches.length % MAX_RESULTS !== 0 
  && currentIndex + MAX_RESULTS > matches.length - MAX_RESULTS) {
      currentIndex += matches.length % MAX_RESULTS;
      
  } else {
    currentIndex += MAX_RESULTS;
  }
  
  displayMatches();
  
});

$prevBtn.click(() => {
  
  if (currentIndex === matches.length - MAX_RESULTS) {
    currentIndex -= matches.length % MAX_RESULTS;
  } else {
    currentIndex -= MAX_RESULTS;
  }
  
  displayMatches();
    
});

function displayMatches() {
  
  $matchesContainer.empty();
  
  let max = (currentIndex + MAX_RESULTS) > matches.length ? (currentIndex + MAX_RESULTS) : matches.length % 5;
  
  for (let i = currentIndex; i < (currentIndex + MAX_RESULTS); i++) {
    
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
  
  displayPaginationButtons();  
  
}

function displayPaginationButtons() {
  console.log('displayPaginationButtons');
  console.log('currentIndex: ', currentIndex);
  console.log('matches.length: ', matches.length);
  console.log('MAX_RESULTS: ', MAX_RESULTS);
  console.log('matches.length - MAX_RESULTS: ' + (matches.length - MAX_RESULTS));
  
  // $nextBtn
  if (matches.length > MAX_RESULTS) {
    $nextBtn.removeClass('invisible');
  }
  // makes nextBtn invisible if user goes too far to the right
  if (currentIndex >= (matches.length - MAX_RESULTS)) {
    $nextBtn.addClass('invisible');
  }
  
  // $prevBtn
  if (currentIndex <= MAX_RESULTS) {
    $prevBtn.removeClass('invisible');
  }
  if (currentIndex === 0) {
    $prevBtn.addClass('invisible');
  }
  
  
}

function populateMatches() {
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
  $prevBtn.addClass('invisible');
  $nextBtn.addClass('invisible');
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