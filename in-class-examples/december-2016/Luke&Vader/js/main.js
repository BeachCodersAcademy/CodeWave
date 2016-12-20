class Player {

  constructor(health) {
    this.health = health;
    this.score = 0;
  }

  attack(playerToAttack) {
    playerToAttack.health = playerToAttack.health - 10;
  }
}

//this is equivalent to above
// function Player(health) {
//   this.health = health;
//   this.score = 0;
// }
//
// Player.prototype.attack = function(playerToAttack) {
//   playerToAttack.health = playerToAttack.health - 10;
// }


let luke = new Player(120);
let vader = new Player(100);

console.log('luke', luke)
console.log('vader', vader)

$('.lukebtn').click(function() {
  luke.attack(vader);
  $('.vader-health').text(vader.health)
})

$('.vaderbtn').click(function() {
  vader.attack(luke);
  console.log(luke.health)
  $('.luke-health').text(luke.health)
})
