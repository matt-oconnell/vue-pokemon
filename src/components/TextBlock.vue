<template>
  <div class="text-block">
    <slot></slot>
  </div>
</template>

<script>
export default {}
</script>

<style lang="scss" scoped>
  .text-block {
    border: 2px solid black;
    border-radius: 4px; 
    width: 100%;
    min-height: 100px;
    text-align: left;
    padding: 20px;
    font-size: 25px;
    font-weight: bold;
    margin-top: 40px;
  }
</style>
