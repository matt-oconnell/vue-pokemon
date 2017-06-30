<template>
  <div>
    <h1>Enter Your Name</h1>
    <input type="text" v-model="playerName">
    <h1>Choose a Pokemon</h1>
    <ul>
      <li v-for="(character, i) in pokemon" :key="i" @click="battle(character)">{{ character }}</li>
    </ul>
  </div>
</template>

<script>
import characterMap from './characterMap';
import Router from './../router';

export default {
  data() {
    return {
      pokemon: Object.keys(characterMap),
      playerName: 'Player1'
    }
  },
  methods: {
    battle(pokemon) {
      Router.push({ path: 'battle', query: { pokemon, playerName: this.playerName }})
    }
  }
}
</script>

<style>
  ul {
    list-style: none;
  }
</style>
