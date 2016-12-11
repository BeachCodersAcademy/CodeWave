let userSelection;
let randomNumber;
let computerSelection;
let myScore = 0;
let computerScore = 0;

play();

function play() {
  while (true) {
    userSelection = prompt('Choose rock (r), paper (p), or scissors (s)')
    randomNumber = getRandomIntInclusive(1, 3);
    computerSelection = '';

    if (randomNumber === 1) {
      computerSelection = 'r';
    } else if (randomNumber === 2) {
      computerSelection = 'p';
    } else {
      computerSelection = 's';
    }


    if (userSelection === 'r') {
      if (computerSelection === 'r') {
        console.log('tie!');
      } else if (computerSelection === 'p') {
        console.log('you lose');
        computerScore++
      } else {
        console.log('you win');
        myScore++;
      }
    } else if (userSelection === 'p') {
      if (computerSelection === 'r') {
        console.log('you win');
        myScore++
      } else if (computerSelection === 'p') {
        console.log('you tie');
      } else {
        console.log('you lose')
        computerScore++;
      }
    } else {
      if (computerSelection === 'r') {
        console.log('you lose');
        computerScore++;
      } else if (computerSelection === 'p') {
        console.log('you win');
        myScore++;
      } else {
        console.log('you tie');

      }
    }

    if (myScore === 2) {
      console.log('you win it all');
      break;
    }

    if (computerScore === 2) {
      console.log('computer wins it all');
      break;
    }

  }

  let again = prompt('Do you want to play again?');
  if (again === "yes") {
    myScore = 0;
    computerScore = 0;
    play();
  }
}

function getRandomIntInclusive(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
}
