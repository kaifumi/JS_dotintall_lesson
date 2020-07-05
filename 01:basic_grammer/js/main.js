'use strict';

let hp = -50;

do {
  console.log(`残りHPは${hp}です`);
  hp -= 15;
} while (hp > 0)