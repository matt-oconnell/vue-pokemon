<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'app'
}
</script>

<style>
  #app {
    font-family: 'pokemon-font', monospace;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    margin-top: 60px;
    max-width: 80%;
    margin: 30px auto;
  }

  html, body {
    margin: 0;
    padding: 0;
  }

  * {
    box-sizing: border-box;
  }
</style>
