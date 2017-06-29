<template>
  <div>
    <div class="stage">
      <Player :player="players[0]"></Player>
      <Player :player="players[1]"></Player>
    </div>
    <TextBlock>
      <MoveSelector v-show="status === 'selectMoves'"></MoveSelector>
      <Status v-show="status !== 'selectMoves'"></Status>
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
      turn: 0,
    }
  },
  methods: {
    startTurn(i) {
      this.players[i]
    }
  },
  mounted() {
    this.startTurn(0);
  },
}
</script>

<style>

</style>
