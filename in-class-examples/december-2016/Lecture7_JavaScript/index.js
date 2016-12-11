// https://www.sitepoint.com/javascript-truthy-falsy/

let language = 'English'

let EnglishHeading = 'Come stay here';
let SpanishHeading = 'Mi casa es su casa!';
let German = "I do not know German, but stay with me!";

//if else and for language

// another app
// 1. Check if they are 21
// 2. check if they are a member
// 3. if they can, ask what drink the want
// 4. if they want Coors light, kick them out and revoke their membership
//put prompts in the if statements

// if drink.toLowerCase() === coors || coors light

//redo with a sting interpolation
// `getting your ${drink}`

//predicate goes into parenthesis
// for () {
// }

//do example with two conditions on one line
// || &&

// if ('hello')  <-- quirk. it prints true because truthy and falsy
//https://www.sitepoint.com/javascript-truthy-falsy/
// check '0' and 0

//redo first example using switch statement

//some examples of orders of operation
alert(prompt('Thanks' + prompt('Please enter your name')));
//console.log( 2 * 3 + (4-2)/1)


// math and date objects
//search in w3 or mdn
// examples
console.log(Math.PI);
//Math.pow(base,exp)
console.log(Math.pow(5, 7))
  //absolute value
Math.abs(-5)

//.floor and .ceil
Math.floor(5.6)
Math.ceil(5.6)

//random number between 1 and 3
let random = Math.floor(Math.random() * 3 + 1)

// look at function on mdn for random number and explain how it works
// Returns a random number between min (inclusive) and max (exclusive)
function getRandomArbitrary(min, max) {
  return Math.random() * (max - min) + min;
}


//Date objects
var d = new Date();
//look in actual console to see the Date
//grab hours d.getHours() , min, sec, etc.  look at docs. W3 and mdn

//Huge part of JS is looking up docs

// create a new date as well

//explain dynamic typing (weak typing). provides flexibility
var amount = 99.99;

amount = amount * 2;

console.log( amount );      // 199.98

// convert `amount` to a string, and
// add "$" on the beginning
amount = "$" + String( amount );

console.log( amount );  


  if (isMember.toLowerCase() === 'yes' && ageResults) {
    let drink = prompt('What drink do you want?');
    if (drink === 'coors light') {
      alert('get out of my Country Club')
    } else {
      alert(`your ${drink} is ready`);
    }
  } else {
    console.log('you are either not a member or you are not old enough')
  }    // "$199.98"