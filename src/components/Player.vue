<template>
  <div>
    <h1>{{ player.character.name }}</h1>
    <h2>:L<span>{{ player.character.level }}</span></h2>
    <div class="health-bar">
      <p>HP:</p>
      <div class="bar">
        <div class="bar-inner" :style="`width: ${hpPercentage}`"></div>
      </div>
      <div v-if="player.type === playerTypes.human" class="hp-fraction">
        {{ player.character.hp }} / {{ hpTotal }}
      </div>
    </div>
  </div>
</template>

<script>
import { PLAYER_TYPE_COMPUTER, PLAYER_TYPE_HUMAN } from './constants';

export default {
  props: ['player'],
  data() {
    return {
      level: 21,
      hpTotal: this.player.character.hp,
      playerTypes: {
        human: PLAYER_TYPE_HUMAN,
        computer: PLAYER_TYPE_COMPUTER
      }
    }
  },
  computed: {
    hpPercentage() {
      return this.player.character.hp / this.hpTotal
    }
  },
  methods: {
    attack() {
      
    }
  }
}
</script>

<style lang="scss" scoped>
  h1, h2 {
    text-align: left;
    display: block;
    margin: 0;
  }

  .health-bar {
    width: 400px;

    .bar {
      width: 100%;
      height: 10px;
      border: 2px solid black;
      border-radius: 4px;

      div {
        background: lightblue;
        height: 100%;
      }
    }
  }
</style>
