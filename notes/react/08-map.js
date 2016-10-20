let React = require('react');
let ReactDOM = require('react-dom');

let people = ['Rowe', 'Prevost', 'Gare'];

let peopleLIs = people.map(function(person){
  return <li>{person}</li>
});

ReactDOM.render(<ul>{peopleLIs}</ul>, document.getElementById('app'));