/*
1. get data of Jon Snow from api
2. target div#jon-snow
3. put data from api into that div
*/

let jonSnowUrl = 'http://cors.io/?http://anapioficeandfire.com/api/characters/583';

// $.getJSON(jonSnowUrl).then(function(character) {
$.getJSON(jonSnowUrl).then(character => {

  /*
  let name = character.name;
  let aliases = character.aliases;
  let born = character.born;
  let culture = character.culture;
  */
  
  // es6 destructuring
  let { name, aliases, born, culture } = character;
  
  console.log(character);
  
  $('#jon-snow').html(`
    <h2>${name}</h2>
    <h3>Born ${born}</h3>
    <h3>Culture: ${culture}</h3>
    <p>Aliases: ${aliases.join(', ')}</p>
  `);
  
});

let daenerysUrl = 'http://cors.io/?http://www.anapioficeandfire.com/api/characters/1303';

// $.getJSON(jonSnowUrl).then(function(character) {
$.getJSON(daenerysUrl).then(character => {

  /*
  let name = character.name;
  let aliases = character.aliases;
  let born = character.born;
  let culture = character.culture;
  */
  
  // es6 destructuring
  let { name, aliases, born, culture } = character;
  
  console.log(character);
  
  document.getElementById('daenerys-targaryen').innerHTML = 
    '<h2>' + name + '</h2>' +
    '<h3>Born ' + born + '</h3>' +
    '<h3>Culture: ' + culture + '</h3>' +
    '<p>Aliases: ' + aliases.join(', ') + '</p>';
  
});
