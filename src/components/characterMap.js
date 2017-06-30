export const SQUIRTLE = 'Squirtle';
export const BULBASAUR = 'Bulbasaur';
export const CHARMANDER = 'Charmander';
export const MEW = 'Mew';

export default {
  [SQUIRTLE]: {
    name: SQUIRTLE,
    hp: 100,
    totalHp: 100,
    level: 10,
    moves: {
      Tackle: 35,
      'Tail Whip': 30,
      'Water Gun': 25,
      'Bubble': 40,
    },
    sprite: {
      front: 'https://cdn.bulbagarden.net/upload/b/b6/Spr_3r_007.png',
      back: 'https://cdn.bulbagarden.net/upload/5/55/Spr_b_3r_007.png'
    }
  },
  [BULBASAUR]: {
    name: BULBASAUR,
    hp: 100,
    totalHp: 100,
    level: 10,
    moves: {
      Tackle: 35,
      Growl: 40,
      'Vine Whip': 25,
      'Take Down': 20,
    },
    sprite: {
      front: 'https://cdn.bulbagarden.net/upload/8/89/Spr_3r_001.png',
      back: 'https://cdn.bulbagarden.net/upload/d/d9/Spr_b_3r_001.png'
    }
  },
  [CHARMANDER]: {
    name: CHARMANDER,
    hp: 100,
    totalHp: 100,
    level: 10,
    moves: {
      Scratch: 35,
      Growl: 40,
      Ember: 25,
      Smokescreen: 20,
    },
    sprite: {
      front: 'https://cdn.bulbagarden.net/upload/f/fe/Spr_3r_004.png',
      back: 'https://cdn.bulbagarden.net/upload/2/20/Spr_b_3r_004.png'
    }
  },
  [MEW]: {
    name: MEW,
    hp: 100,
    totalHp: 100,
    level: 100000,
    moves: {
      Pound: 35,
      'Reflect Type': 40,
      Transform: 25,
      'Mega Punch': 55,
    },
    sprite: {
      front: 'https://cdn.bulbagarden.net/upload/8/86/Spr_3r_151.png',
      back: 'https://cdn.bulbagarden.net/upload/9/99/Spr_b_3r_151.png'
    }
  }
}
