<template>
  <div class="timeWrapper">
    time picker
  </div>
</template>

<script>
export default {
  name: "DateTimePicker",
  props: {
    msg: String
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="stylus" scoped>
  .loadingFixBackground{
    position: fixed;
    width: 115vw;
    height: 1115vh;
    background: rgba(50,50,50,0.6);
    z-index: 99;
  }
</style>
