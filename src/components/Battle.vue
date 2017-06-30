<template>
  <div>
    <div class="stage">
      <Player :player="players[0]"></Player>
      <Player :player="players[1]"></Player>
    </div>
    <TextBlock>
      <MoveSelector @chooseMove="attack" :moves="attackingPlayerMoves" v-show="showMoves"></MoveSelector>
      <Status :status="status" v-show="!showMoves"></Status>
    </TextBlock>
  </div>
</template>

<script>
import clonedeep from 'lodash.clonedeep';
import MoveSelector from './MoveSelector';
import Player from './Player';
import Status from './Status';
import TextBlock from './TextBlock';
import characterMap from './characterMap';
import sleep from './../utils/sleep';

const pokemonNames = Object.keys(characterMap);

function getRandomFromArray(arr) {
  return arr[Math.floor(Math.random() * (arr.length))];
}

export default {
  components: {
    MoveSelector,
    Player,
    Status,
    TextBlock
  },
  data() {
    return {
      players: [
        {
          character: clonedeep(characterMap[getRandomFromArray(pokemonNames)]),
          isHuman: false,
          name: 'Computer'
        },
        {
          character: clonedeep(characterMap[this.$route.query.pokemon]),
          isHuman: true,
          name: this.$route.query.playerName
        }
      ],
      turn: 1,
      status: '',
      showMoves: false,
      textSleep: 750,
    }
  },
  computed: {
    attackingPlayer() {
      return this.players[this.turn];
    },
    attackingPlayerMoves() {
      return Object.keys(this.attackingPlayer.character.moves);
    },
    defendingPlayer() {
      return this.players[Math.abs(this.turn - 1)];
    },
  },
  methods: {
    attack(move) {
      this.showMoves = false;

      move = move || getRandomFromArray(this.attackingPlayerMoves);

      const moveDamage = this.attackingPlayer.character.moves[move];
      this.status = `${this.attackingPlayer.name}'s ${this.attackingPlayer.character.name} used ${move}!`;
      const random = Math.floor(Math.random() * 100);
      const hitRange = 100 - moveDamage;
      const hit = random < hitRange;
      
      sleep(this.textSleep).then(() => {
        if (hit) {
          this.status = `It's a direct hit! ${this.defendingPlayer.name}'s ${this.defendingPlayer.character.name} takes ${moveDamage} damage!`;
          this.defendingPlayer.character.hp -= moveDamage;
        }
        else {
          this.status = 'Ooh, a miss!';
        }
        return sleep(this.textSleep).then(() => {
          this.nextTurn();
        });
      });
    },
    nextTurn() {
      this.turn = Math.abs(this.turn - 1);
      if (this.attackingPlayer.character.hp <= 0) {
        this.endGame();
        return;
      }
      if (this.attackingPlayer.isHuman) {
        this.showMoves = true;
      } else {
        this.status = 'Computer turn';
        sleep(this.textSleep).then(this.attack());
      }
    },
    endGame() {
      this.status = `End of Game! ${this.defendingPlayer.name} is victorious!`;
    },
  },
  mounted() {
    this.status = `A wild ${this.players[0].character.name} appears!`;
    sleep(this.textSleep).then(this.nextTurn);
  },
}
</script>

<style>

</style>
