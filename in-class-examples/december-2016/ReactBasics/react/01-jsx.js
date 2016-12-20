//Javascript problem of the day
//Go through an array and keep track of how many times each name in the array is written( hint: use an object to store each value).  The word with the most appearances is the winner, but the others win prizes as well.

//next, write a function that takes in the created object and also takes in a number, which represents the place of the name and return the name of the contestant.  E.g. for finding 5th place. pass in myObj(array,5)

//two solutions below:

//first loop trough the array and count how many of each
var arr = ['james', 'john', 'jim', 'john', 'jim', 'john', 'frank', 'jessie', 'john', 'jessie'];
var counts = {};

for (var i = 0; i < arr.length; i++) {
  var num = arr[i];
  counts[num] = counts[num] ? counts[num] + 1 : 1;
}


var list = {
  //reults.
};
keysSorted = Object.keys(list).sort(function(a, b) {
  return list[a] - list[b]
})

//OR

var obj = {
  //results
}
var sortArr = [];
for (var val in obj) {
  sortArr.push([val, obj[val]])
}


sortArr.sort(function(a, b) {
    return a[1] - b[1]
  })
  //this sorts smallest to largest



// Getting comfortable with object oriented programming.I will start an application with bootstrap and jQuery that you can finish on your own.
//
// Voldemort vs Harry potter game using classes
// Normal attack
// Special attack
// Shield
//
//
// We will see a lot of this stuff in React

//Why should we learn React again?

//https://www.indeed.com/jobtrends/q-react.js-q-angular.js.html


//Every React Component must have a render method
class Header extends React.Component {
  render() {
    return <h1 > Hi < /h1>
  }
}

// Let’ s do a bit of react and see what is going on.(JSbin)

//Hello World in React

class Header extends React.Component {
  render() {
    return <h1 > Hi < /h1>
  }
}


//tells what to put where in React
ReactDOM.render( < Header / > , document.getElementById(‘header’));

//you must always return a single object from the render function
render() {
  return ( <
    h1 > Hi < /h1> <
    hr / >
    <
    p > not ok < /p>
  )
}
render() {
  return ( <
    div >
    <
    h1 > Hi < /h1> <
    hr / >
    <
    p > This Works < /p> < /
    div >
  )
}

//
// Lets do some react in js bin.  Run through them in jsbin.  Go through as 49 examples on githubß

// This stuff will render just fine
let H1 = < h1 > Hello world < /h1>;

let P1 = < p id = "large" > foo < /p>;

//multiline, use parenthesis.
//I can inject p1 into myDiv by just using <p1 />
let myDiv = ( <
  div >
  <
  h1 > Hello world < /h1> < /
  div >
);

//need to render to the page by using this
ReactDOM.render( <
  Heading / > ,
  document.getElementById('app')
)
