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

$('#find-love-btn').click(() => {
  
  $matchesContainer.empty();
  
  let fromHeight = $fromHeight.val() ? Number($fromHeight.val()) : 0;
  let toHeight = $toHeight.val() ?  Number($toHeight.val()) : Number.POSITIVE_INFINITY;
  let fromWeight =  Number($fromWeight.val()) ? $fromWeight.val() : 0;
  let toWeight = $toWeight.val() ?  Number($toWeight.val()) : Number.POSITIVE_INFINITY;
  // let fromAge = $fromAge.val() ? $fromAge.val() : 0;
  // let toAge = $toAge.val() ? $toAge.val() : Number.POSITIVE_INFINITY;
  let gender = $gender.val();
  let hairColor = $hairColor.val() ? $hairColor.val() : 'any';
  let skinColor = $skinColor.val() ? $skinColor.val() : 'any';
  
  let matches = [];
  
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
      
      console.log(matches);
      
      // put matches on screen
      matches.forEach(person => {
        
        let name = person.name;
        // TODO: get image url
        // let imgURL = 
        let gender = person.gender;
        let height = person.height;
        let weight = person.mass;
        let hairColor = person.hair_color;
        let skinColor = person.skin_color;
        
        $matchesContainer.append(`
          <h2>${name}</h2>
          <p><small>${gender}</small></p>
          <img src="" alt="${name}" />
          <p>Height: ${height} | Weight: ${weight}</p>
          <p>Hair Color: ${hairColor} | Skin Color: ${skinColor}</p>
        `);
        
      });
      
    }, 3000);
    
    
    
  });
  
  /*
  CRUD Operations
  
  Create -> POST
  Read -> GET
  Update -> PUT
  Delete -> REMOVE
  
  Strongly Typed Languages
  Javascript -> Weakly Typed  
  */
