/*
A key is a JSX attribute. The attribute's name is key. The attribute's value should be something unique, similar to an id attribute.

Keys don't do anything that you can see! React uses them internally to keep track of lists. If you don't use keys when you're supposed to, React might accidentally scramble your list-items into the wrong order.

Not all lists need to have keys. A list needs keys if either of the following are true:

* The list-items have memory from one render to the next. For instance, when a to-do list renders, each item must "remember" whether it was checked off. The items shouldn't get amnesia when they render.
* A list's order might be shuffled. For instance, a list of search results might be shuffled from one render to the next.
If neither of these conditions are true, then you don't have to worry about keys. If you aren't sure then it never hurts to use them!
*/

let React = require('react');
let ReactDOM = require('react-dom');

let people = ['Rowe', 'Prevost', 'Gare'];

let peopleLIs = people.map(function(person, i){
  return <li key={'person_' + i}>{person}</li>
});

ReactDOM.render(<ul>{peopleLIs}</ul>, document.getElementById('app'));