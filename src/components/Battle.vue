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
import Stage from './Stage';
import Status from './Status';
import TextBlock from './TextBlock';
import characterMap, { SQUIRTLE, BULBASAUR, CHARMANDER } from './characterMap';
import sleep from './../utils/sleep';
import { PLAYER_TYPE_COMPUTER, PLAYER_TYPE_HUMAN } from './constants';

const pokemon = [ SQUIRTLE, BULBASAUR, CHARMANDER ];


export default {
  components: {
    MoveSelector,
    Player,
    Stage,
    Status,
    TextBlock
  },
  data() {
    return {
      players: [
        {
          character: clonedeep(characterMap[pokemon[Math.floor(Math.random() * (pokemon.length))]]),
          type: PLAYER_TYPE_COMPUTER,
          name: 'Computer'
        },
        {
          character: clonedeep(characterMap[this.$route.query.pokemon]),
          type: PLAYER_TYPE_HUMAN,
          name: this.$route.query.playerName
        }
      ],
      turn: 1,
      status: '',
      showMoves: false,
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

      if (!move) {
        move = this.attackingPlayerMoves[Math.floor(Math.random() * (this.attackingPlayerMoves.length))];
      }

      const moveDamage = this.attackingPlayer.character.moves[move];
      this.status = `${this.attackingPlayer.name}'s ${this.attackingPlayer.character.name} used ${move}!`;
      const random = Math.floor(Math.random() * 100);
      const hitRange = 100 - moveDamage;
      const hit = random < hitRange;
      
      sleep(1000).then(() => {
        if (hit) {
          this.status = `It's a direct hit! ${this.defendingPlayer.name}'s ${this.defendingPlayer.character.name} takes ${moveDamage} damage!`;
          this.defendingPlayer.character.hp -= moveDamage
        }
        else {
          this.status = 'Ooh, a miss!';
        }
        return sleep(1000).then(() => {
          this.nextTurn();
        });
      });
    },
    // engine stuff
    nextTurn() {
      this.turn = Math.abs(this.turn - 1);
      if (this.attackingPlayer.character.hp <= 0) {
        this.endGame();
        return;
      }
      if (this.attackingPlayer.type === PLAYER_TYPE_HUMAN) {
        this.humanTurn();
      } else {
        this.computerTurn();
      }
    },
    endGame() {
      this.status = 'End of Game!';
    },
    humanTurn() {
      this.showMoves = true;
    },
    computerTurn() {
      this.status = 'Computer turn';
      sleep(1000).then(this.attack());
    }
  },
  mounted() {
    this.status = `A wild ${this.players[0].character.name} appears!`;
    sleep(1000).then(this.nextTurn);
  },
}
</script>

<style>

</style>
