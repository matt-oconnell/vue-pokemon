<template>
  <div>
    <h1>{{ player.name }}</h1>
    <h2>:L<span>{{ player.character.level }}</span></h2>
    <img :src="player.type === playerTypes.human ? player.character.sprite.back : player.character.sprite.front">
    <div class="health-bar">
      <p>HP:</p>
      <div class="bar">
        <div class="bar-inner" :style="`width: ${hpPercentage}%`"></div>
      </div>
      <div v-if="player.type === playerTypes.human" class="hp-fraction">
        {{ player.character.hp }} / {{ player.character.totalHp }}
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
      playerTypes: {
        human: PLAYER_TYPE_HUMAN,
        computer: PLAYER_TYPE_COMPUTER
      }
    }
  },
  computed: {
    hpPercentage() {
      if (this.player.character.hp <= 0) {
        return 0
      }
      return this.player.character.hp / this.player.character.totalHp * 100
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

  img {
    width: 100px;
    text-align: left;
  }
</style>
