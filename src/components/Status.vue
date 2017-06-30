<template>
  <div>
    {{ typedStatus }}
  </div>
</template>

<script>
export default {
  props: ['status'],
  data() {
    return {
      typedStatus: ''
    }
  },
  watch: {
    status(newStatus) {
      let i = 0;
      this.typedStatus = '';
      const interval = setInterval(() => {
        if (i >= newStatus.length) {
          clearInterval(interval);
          return;
        }
        this.typedStatus = this.typedStatus + newStatus[i]
        i++;
      }, 10);
    }
  }
}
</script>
