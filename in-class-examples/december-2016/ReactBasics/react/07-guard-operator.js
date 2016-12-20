let React = require('react');
let ReactDOM = require('react-dom');

let judgmental = Math.random() < 0.5;

let favoriteFoods = (
  <div>
  <h1>My Favorite Foods</h1>
  <ul>
  <li>Sushi Burrito</li>
  <li>Rhubarb Pie</li>
  { !judgmental && <li>Nacho Cheez Straight Out The Jar</li> }
  <li>Broiled Grapefruit</li>
  </ul>
  </div>
);

ReactDOM.render(
  favoriteFoods, 
  document.getElementById('app')
);