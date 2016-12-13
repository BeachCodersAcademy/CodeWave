//really important to understand this to understand objects

//here is a normal function

//remember this is a context.

function talk(sound) {
  console.log(sound)
}

talk('woof')

function speak() {
  console.log(this.sound)
}

//call speak
speak(); //undefined

//lets try calling speak after changing to console.log(this)
// function speak() {
//   console.log(this)
// }
//it then returns the global object in the console. or in node, something a little bit different.

//lets go back to this.sound

let boromir = {
  sound: 'one does not simply stroll to mordor'
}

//lets use bind to create a copy of talk where this is bound to boromir

let talkBoundToBoromir = talk.bind(boromir)

talkBoundToBoromir();

//so bind is a way to be explicit to what we want 'this'  to be
