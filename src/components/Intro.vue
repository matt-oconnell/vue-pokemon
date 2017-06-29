<template>
  <div>
    <h1>Choose a guy</h1>
    <ul>
      <li v-for="(character, i) in pokemon" :key="i" @click="battle(character)">{{ character }}</li>
    </ul>
  </div>
</template>

<script>
import characterMap, { SQUIRTLE, BULBASAUR, CHARMANDER } from './characterMap';
import Router from './../router';

export default {
  data() {
    return {
      pokemon: [SQUIRTLE, BULBASAUR, CHARMANDER]
    }
  },
  methods: {
    battle(pokemon) {
      Router.push({ path: 'battle', query: { pokemon }})
    }
  }
}
</script>
