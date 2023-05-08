const mage = {
  healthPoints: 130,
  intelligence: 45,
  mana: 125,
  damage: undefined,
};

const warrior = {
  healthPoints: 200,
  strength: 30,
  weaponDmg: 2,
  damage: undefined,
};

const dragon = {
  healthPoints: 350,
  strength: 50,
  damage: undefined,
};

const battleMembers = { mage, warrior, dragon };

// Crie uma função que retorne o dano do dragão.

const dragonAttack = (dragon) => {
  const minDmg = 15;
  const maxDmg = Math.floor(Math.random() * dragon.strength);

  const dragonDmg = maxDmg > minDmg ? maxDmg : minDmg;

  return dragonDmg;
};


// Crie uma função que retorne o dano causado pelo warrior.

const warriorAttack = (warrior) => {
  const minDmg = warrior.strength;
  const maxDmg = Math.floor(Math.random() *(minDmg * warrior.weaponDmg));
  const warriorDmg = maxDmg > minDmg ? maxDmg : minDmg;
  return warriorDmg;
};

// Crie uma função que retorne um objeto com duas chaves e dois valores contendo o dano e a mana gasta pelo mago em um turno.

const mageAttack = (mage) => {
  const mageMana = mage.mana;
  const minDmg = mage.intelligence;
  const maxDmg = minDmg * 2;
  const turnStats = {
    manaSpent: 0,
    damageDealt: 'Not enough mana...',
  };

  if (mageMana > 15) {
    const mageDamage = minDmg < maxDmg ? maxDmg : minDmg;
    turnStats.manaSpent = 15;
    turnStats.damageDealt = mageDamage;
    return turnStats;
  }
  return turnStats;
};