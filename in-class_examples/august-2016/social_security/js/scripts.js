// single line comment
/*
   multi-line comment
*/

// data types (const, let, var)
// var - old school way of declaring a variable
// let - new school
// const - defines a constant

// number data type
let age = '23.5';
// console.log(age);

// string data type
let name;
name = 'Jim';
// console.log(name);
// console.log(name.length);

// console.log(age + 10); // 33.5
// console.log(name + ' said, "I am ' + age + '."'); // old school

// using template literals (use back tick)
// console.log(`${name} said, "I am ${age}."`);

// escape character \
// console.log('Jim exclaimed, "It\'s about to rain!"');


// boolean data type
let isOver18 = true;

// console.log(typeof false); // boolean

// console.log(typeof isOver18);

// console.log(isOver18);
// console.log(!isOver18);


// alerts, prompts, & confirms

// true = 1
// false = 0
// console.log(9 * true);


let welcomeMessage = 'Welcome to Security Systems';
let socialPrompt = 'Please enter yor social security number.';

// alert(welcomeMessage);
// let socialSecurityNumber = prompt(socialPrompt);

// let isCorrect = confirm(`Your ssn is ${socialSecurityNumber}, correct?`);

// console.log(isCorrect);

let userAge = prompt('Please enter your age.'); // '10'
let plusYears = 20;
let userAgePlusYears = parseInt(userAge) + plusYears;

// DRY
let response = `You will be ${userAgePlusYears} in ${plusYears} years.`;

alert(response);

document.write(response);

// console.log('plus years: ' + userAgePlusYears); // 30
// console.log('10' + plusYears); // 1020


// script tags