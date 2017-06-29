<template>
  <div>
    <div class="stage">
      <Player :player="players[0]"></Player>
      <Player :player="players[1]"></Player>
    </div>
    <TextBlock>
      <MoveSelector @chooseMove="attack" :moves="currentPlayerMoves" v-show="showMoves"></MoveSelector>
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
import characterMap from './characterMap';
import sleep from './../utils/sleep';
import { PLAYER_TYPE_COMPUTER, PLAYER_TYPE_HUMAN } from './constants';

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
          character: clonedeep(characterMap['xyz']),
          type: PLAYER_TYPE_COMPUTER,
        },
        {
          character: clonedeep(characterMap['xyz']),
          type: PLAYER_TYPE_HUMAN,
        }
      ],
      turn: 1,
      status: '',
      showMoves: false,
    }
  },
  computed: {
    currentPlayer() {
      return this.players[this.turn];
    },
    currentPlayerMoves() {
      return Object.keys(this.currentPlayer.character.moves);
    },
    defendingPlayer() {
      return this.players[Math.abs(this.turn - 1)];
    },
  },
  methods: {
    attack(move) {
      this.showMoves = false;

      if (!move) {
        move = this.currentPlayerMoves[Math.floor(Math.random() * (this.currentPlayerMoves.length))];
        console.log('move');
        
      }

      const moveDamage = this.currentPlayer.character.moves[move];
      this.status = `${this.currentPlayer.character.name} used ${move}!`;
      const random = Math.floor(Math.random() * 100);
      const hitRange = 100 - moveDamage;
      const hit = random < hitRange;
      
      sleep(1000).then(() => {
        if (hit) {
          this.status = `It's a direct hit! ${this.defendingPlayer.character.name} takes ${moveDamage} damage!`;
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
      if (this.defendingPlayer.character.hp <= 0) {
        this.endGame();
        return;
      }
      if (this.currentPlayer.type === PLAYER_TYPE_HUMAN) {
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
      sleep(1000).then(() => {
        this.attack()
      });
    }
  },
  mounted() {
    this.nextTurn();
  },
}
</script>

<style>

</style>
