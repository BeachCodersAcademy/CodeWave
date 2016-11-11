/*
1. prompt user for r, p, or s
2. get random number from 1-3
3. assign random number to r, p, or s
4. check if user won
5. check if computer won
6. check if tie
7. display who won
*/

// 1.
let userThrow = prompt('Please enter "r" for rock, "p" for paper, or "s" for scissors.');

// 2.
let randomNumber = Math.floor(Math.random() * 3) + 1;

// 3.
let computerThrow;
if (randomNumber === 1) {
  computerThrow = 'r';
} else if (randomNumber === 2) {
  computerThrow = 'p';
} else if (randomNumber === 3) {
  computerThrow = 's';
} else {
  console.log('There was an error with the random number.');
}

console.log('userThrow: ' + userThrow);
console.log('computerThrow: ' + computerThrow);

// 4.
if (userThrow === 'r' && computerThrow === 's' || 
    userThrow === 'p' && computerThrow === 'r' || 
    userThrow === 's' && computerThrow === 'p') {
    alert('You won!');
// 5.
} else if (computerThrow === 'r' && userThrow === 's' || 
    computerThrow === 'p' && userThrow === 'r' || 
    computerThrow === 's' && userThrow === 'p') {
    alert('The computer won!');
// 6.
} else if (computerThrow === userThrow) {
  alert('It was a tie!');
} else {
  alert('Please enter r, p, or s next time.');
}
