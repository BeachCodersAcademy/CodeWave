//These notes and examples below are taken from Eloquent JavaScript.  An excellent book.
//http://eloquentjavascript.net/

//Programs can get large and hard to manage as the complexity builds.

//Bugs can tend to hide themselves in our code

//Eloquent JS example ch.5

var total = 0,
  count = 1;
while (count <= 10) {
  total += count;
  count += 1;
}
console.log(total);
// The second relies on two external functions and is one line long.
console.log(sum(range(1, 10)));

//The second solution is more expressive so we can more easily understand what our program is doing.

//And you can test each functionality separately to make sure the program is doing what we want it to do

//This is also known as abstraction

//Analogy From Eloquent JavaScript, ch 5.

// As an analogy, compare these two recipes for pea soup:
// Put 1 cup of dried peas per person into a container. Add water until the peas are well covered. Leave the peas in water for at least 12 hours. Take the peas out of the water and put them in a cooking pan. Add 4 cups of water per person. Cover the pan and keep the peas simmering for two hours. Take half an onion per person. Cut it into pieces with a knife. Add it to the peas. Take a stalk of celery per person. Cut it into pieces with a knife. Add it to the peas. Take a carrot per person. Cut it into pieces. With a knife! Add it to the peas. Cook for 10 more minutes.
// And the second recipe:
// Per person: 1 cup dried split peas, half a chopped onion, a stalk of celery, and a carrot.
// Soak peas for 12 hours. Simmer for 2 hours in 4 cups of water (per person). Chop and add vegetables. Cook for 10 more minutes.


//Abstracting out Array Traversal
//We do this all of the time!
var array = [1, 2, 3];
for (var i = 0; i < array.length; i++) {
  var current = array[i];
  console.log(current);
}

//Abstract into a function
function logEach(array) {
  for (var i = 0; i < array.length; i++) {
    console.log(array[i]);
  }
}

//What if we wanted to do something other than log the contents?
function forEach(array, action) {
  for (var i = 0; i < array.length; i++) {
    action(array[i]);
  }
}

//Example
var numbers = [1, 2, 3, 4, 5],
  sum = 0;
forEach(numbers, function(number) {
  sum += number;
});
console.log(sum); // → 15

//Higher order functions
// Functions that operate on other functions, either by taking them as arguments or by returning them, are called higher-order functions.

//Map builds a new array with transformations applied to each element
function map(array, transform) {
  var mapped = [];
  for (var i = 0; i < array.length; i++)
    mapped.push(transform(array[i]));
  return mapped;
}

// Another common pattern of computation on arrays is computing a sin- gle value from them.
// That is where reduce comes into play

function reduce(array, combine, start) {
  var current = start;
  for (var i = 0; i < array.length; i++)
    current = combine(current, array[i]);
  return current;
}
console.log(reduce([1, 2, 3, 4], function(a, b) {
  return a + b;
}, 0)); // → 10

//flattening an array with reduce
var flattened = [
  [0, 1],
  [2, 3],
  [4, 5]
].reduce(function(a, b) {
  return a.concat(b);
}, []);
// flattened is [0, 1, 2, 3, 4, 5]


//Filtering an array
function filter(array, test) {
  var passed = [];
  for (var i = 0; i < array.length; i++) {
    if (test(array[i])) passed.push(array[i]);
  }
  return passed;
}
