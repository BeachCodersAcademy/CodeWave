class Celebrity {
  
  constructor(id, name, hp, normalName, normalDamage, specialName, specialDamage, specialHP, defenseName, defenseReduction, image) {
    this.id = id;
    this.name = name;
    this.hp = hp;
    this.normalAttackName = normalName;
    this.normalAttackDamage = normalDamage;
    this.specialAttackName = specialName;
    this.speicalAttackDamage = specialDamage;
    this.specialHP = specialHP;
    this.defenseMoveName = defenseName;
    this.defenseReduction = defenseReduction;
    this.image = image;
  }
  
  canPerformSpecial() {
    return this.hp <= this.specialHP;
  }
  
  isAlive() {
    return this.hp >= 0;
  }
  
  normalAttack(celebToAttack) {
    celebToAttack.hp -= this.normalAttackDamage;
    if (celebToAttack.id === 1) $('#player-1-hp').text(`HP: ${celebToAttack.hp}`);
    else $('#player-2-hp').text(`HP: ${celebToAttack.hp}`);
  }
  
  specialAttack(celebToAttack) {
    celebToAttack.hp -= this.normalAttackDamage;
    if (celebToAttack.id === 1) $('#player-1-hp').text(`HP: ${celebToAttack.hp}`);
    else $('#player-2-hp').text(`HP: ${celebToAttack.hp}`);
  }
  
}

let Player1 = new Celebrity(1, 'Donald J. Trump', 80, 'Toupe Shuriken', 5, 'You\'re Fired', 20, 40, 'Build a wall', 10, 'http://www.kycaucus.com/wp-content/uploads/2015/11/Donald-Trump.jpg');

let Player2 = new Celebrity(2, 'The Dark Lord', 100, 'Fireball', 6, 'Snake Eyes', 14, 50, 'Slither away', 8, 'http://media.toy-palace.com/media/catalog/product/cache/2/thumbnail/600x800/63586e75a0212b6b7529b50def426aad/l/o/lord-voldemort---my-favourite-movie-action-figure-1_6---harry-potter-30-cm_STAC0010_9.jpg');

/*
<h2 id="player-1-name"></h2>
<h3 id="player-1-hp"></h3>
<img id="player-1-img" src="#" alt="" class="img-responsive">
<div id="player-1-normal" class="btn btn-warning form-control">Normal Attack!</div>
<div id="player-1-special" class="btn btn-danger form-control">Special Attack!</div>
<div id="player-1-defend" class="btn btn-success form-control">Sheild!</div>
*/

$('#player-1-name').text(Player1.name);
$('#player-1-hp').text(`HP: ${Player1.hp}`);
$('#player-1-img').attr('src', Player1.image);
$('#player-2-name').text(Player2.name);
$('#player-2-hp').text(`HP: ${Player2.hp}`);
$('#player-2-img').attr('src', Player2.image);

$('#player-1-normal').click(function() {
  Player1.normalAttack(Player2);
});

$('#player-1-special').click(function() {
  if (Player1.canPerformSpecial()) {
    Player1.specialAttack(Player2);
  } else {
    alert('You cannot use special attack yet!');
  }
});
$('#player-2-normal').click(function() {
  Player2.normalAttack(Player1);
});

$('#player-2-special').click(function() {
  if (Player2.canPerformSpecial()) {
    Player2.specialAttack(Player1);
  } else {
    alert('You cannot use special attack yet!');
  }
});