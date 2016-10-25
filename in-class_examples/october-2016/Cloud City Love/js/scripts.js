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

$('#find-love-btn').click(() => {
  let fromHeight = $fromHeight.val() ? $fromHeight.val() : 0;
  let toHeight = $toHeight.val() ? $toHeight.val() : Number.POSITIVE_INFINITY;
  let fromWeight = $fromWeight.val() ? $fromWeight.val() : 0;
  let toWeight = $toWeight.val() ? $toWeight.val() : Number.POSITIVE_INFINITY;
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
    }, 3000);
    
  });