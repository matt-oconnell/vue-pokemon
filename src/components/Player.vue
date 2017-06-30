<template>
  <div :class="{ right: player.isHuman }">
    <h1>{{ player.name }}</h1>
    <h2>:L<span>{{ player.character.level }}</span></h2>
    <img :src="sprite">
    <div class="health-bar">
      <p>HP:</p>
      <div class="bar">
        <div :style="`width: ${hpPercentage}%`"></div>
      </div>
      <div v-if="player.isHuman" class="hp-fraction">
        {{ hp }} / {{ player.character.totalHp }}
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ['player'],
  data() {
    return {
      sprite: this.player.isHuman ? this.player.character.sprite.back : this.player.character.sprite.front
    }
  },
  computed: {
    hp() {
      return this.player.character.hp <= 0 ? 0 : this.player.character.hp;
    },
    hpPercentage() {
      return this.hp / this.player.character.totalHp * 100
    }
  }
}
</script>

<style lang="scss" scoped>
  h1, h2 {
    width: 100%;
    margin: 0;
    text-align: left;
  }

  .health-bar {
    width: 400px;

    .bar {
      width: 100%;
      height: 10px;
      border: 2px solid black;
      border-radius: 4px;

      div {
        transition: width .5s;
        background: lightblue;
        height: 100%;
      }
    }
  }

  img {
    width: 130px;
    text-align: right;
  }

  .right h1, .right h2 {
    text-align: right;
  }
</style>
