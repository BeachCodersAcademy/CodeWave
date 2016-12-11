//state of JS

//There is no right way to create objects in JS

// Figure what is best for you and your set of problems

//lets look at a basic object

let dog {
  sound: 'woof',
  talk: function() {
    console.log(this.sound)
  }
}

dog.talk() // "woof"

let talkFunction = dog.talk

talkFunction() // undefined

//what!?!

// we reassigned the dog.talk function to a variable.  We can pass around functions because JS is a function programming language.

//just like your best friend, you need to accept them, eventhier quirks.  JS is not going anywhere anytime soon.

//functions are values just like strings, numbers, objects, etc.

//When we assign a method to a variable it is no longer an object method, it is just a regular function

//what does this refer to then?

//this refers to the context in which the function is called, not the function itself.

// But, we can bind it to a context of our choosing

let boundFunction = talkFunction.bind(dog);
//we just forced this to be dog by using bing

boundFunction() // 'woof'

realworld example

let button = document.getElementById('myButton')

//so we assigned the talk method to the click handler, by passing it in as an argument, but the click handler this is the Window object, not the dog.  We can solve by binding to dog.
button.addEventListener(
  'click',
  dog.talk.bind(dog)
)
