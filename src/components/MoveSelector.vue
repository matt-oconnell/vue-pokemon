<template>
  <div>
    <ul>
      <li v-for="(move, i) in moves" :key="i" @click="chooseMove(move)">{{ move }}</li>
    </ul>
  </div>
</template>

<script>
export default {
  props: ['moves'],
  methods: {
    chooseMove(move) {
      this.$emit('chooseMove', move);
    }
  }
}
</script>

<style lang="scss" scoped>
  ul li {
    padding: 10px;
    display: inline-block;
  }

  li {
    width: 40%;
  }
</style>

