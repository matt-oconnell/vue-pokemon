export const SQUIRTLE = 'Squirtle';
export const BULBASAUR = 'Bulbasaur';
export const CHARMANDER = 'Charmander';

export default {
  Squirtle: {
    name: 'Squirtle',
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
  Bulbasaur: {
    name: 'Bulbasaur',
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
  Charmander: {
    name: 'Charmander',
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
  }
}
