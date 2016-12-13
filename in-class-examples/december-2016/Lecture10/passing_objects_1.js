//challenge 1
// how do I access a property in a nested object


//coding challenge of the day
// Write a program that prints the numbers from 1
// to 100. But for multiples of three print “Fizz”
// instead of the number and for the multiples of
// five print “Buzz”. For numbers which are
// multiples of both three and five print
// “FizzBuzz”


//Review object properties and methods

var myObj = {
  myMethod: function(params) {
    // ...do something
  }
};

//Review looping through objects

//Note!!! Objects and Arrays are passed by reference
function newObject() {
	this.value = 5;
}

var a = new myobject();

alert(a.value); // o.value = 5

function objectchanger(func) {
	func.value = 6;
}

objectchanger(o);

alert(o.value); // o.value is now equal to 6
