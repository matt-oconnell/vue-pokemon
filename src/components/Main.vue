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
          character: characterMap['xyz'],
          type: PLAYER_TYPE_COMPUTER,
        },
        {
          character: characterMap['xyz'],
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
      
      this.status = 'attacking with ' + move + ' for this damage' + this.currentPlayer.character.moves[move];
    },
    // engine stuff
    nextTurn() {
      this.turn = Math.abs(this.turn - 1);
      if (this.currentPlayer.hp <= 0) {
        this.endGame();
        return;
      }
      if (this.currentPlayer.type === PLAYER_TYPE_HUMAN) {
        this.humanTurn();
      }
      else {
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
      this.status = 'Computer is doing stuff';
      sleep(1000).then(() => {
        this.status = 'computer attacks';
        return sleep(1000);
      })
      .then(() => {
        this.status = '!computer is done attacking';
        return sleep(1000);
      })
      .then(() => {
        this.nextTurn();
      })
    }
  },
  mounted() {
    this.nextTurn();
  },
}
</script>

<style>

</style>
