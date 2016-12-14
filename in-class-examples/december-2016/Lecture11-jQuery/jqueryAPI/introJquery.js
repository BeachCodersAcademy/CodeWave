//What is an api and how do we get data from other sources and include it on our site or application?

//Example:  ombdapi.com
// go down to example and search for your favortive movie by title

//http://www.omdbapi.com/?t=Titanic&y=&plot=short&r=json

// Timeout:What the heck is JSON?
//https://www.copterlabs.com/json-what-it-is-how-it-works-how-to-use-it/

//JSON is a syntax for storing and exchanging data.  It is language independent, so other languages can access JSON too.

// Using JSON
// Fetch a JSON string
// JSON.Parse the JSON string

// javascript object notation
var james = {
  "age": "31",
  "hometown": "Los Angeles, CA",
  "gender": "male"
};

//can also be in an array [{jsonobject}{jsonobject}]


// ? denotes a query parameter
//add some more queries to the end to test it out

//maybe loop through the year query and get a response of the movie through the years.

//HOw can I access this stuff?
//jquery!!!

// Let us make Movie searching application
//with a search bar that will bring up results

//Algorithm
// 1.capture key enter keypress
// 2. get value of the entered input
// 3. use value to get json
// 4. display movie

//capture when user inputs something in the input box
//$ is the jQuery object
let movieSearch = $('#movie-search');
console.log(movieSearch)

//set up a level. Higher order functions in JS

// A higher-order function is a function that can take another function as an argument, or that returns a function as a result.

function getProduct() {
  console.log(6 * 7)
}

function higherOrder(func) {
  console.log('in the higher order function')
  func();
}

//this is important because the movie search input take functions as arguments.

//show jQuery cheatsheet

$('#movieSearch').keypress(function(event) {
  console.log('key pressed')

  //lets see the event object
  console.log(event)

  //see that there is a key value
  console.log(event.key)

  //now we can check if enter is put in
  if (event.key === 'Enter') {
    alert('enter key has been pressed')

    //get data when pressing enter
    getData()

  }
})

//Algorithm
// 1.capture key enter keypress
// 2. get value of the entered input
// 3. use value to get json
// 4. display movie

function getData() {
  //grab value from the input
  let value = $('#movie-search').val();
  console.log(value)
    //AJAX- Asynchronous JavaScript and XML (even thou JSON used more)
    //Asynchronous means that the order is not guarenteed.  Will mess up app if not asynchronous. order not guarenteed

  let url = '' + value

  //look in the jQuery cheatsheet and docs
  //getJSON returns a promise
  //a promise is a special object that has certain methods.  like 'then'
  let movieResults = $.getJSON(url).then(function(data) {
      console.log(data)

      //display movies data so call a display movie function.
      //displayMovie(data)
    })
    //this will prove the asynchronous nature
  console.log(movieResults)
  console.log('done?')
}

//now create display movie function

function displayMovie(data) {
  //append method?
  //also mention before and after
  //maybe call .empty() after search complete
}
