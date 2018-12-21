<template>
  <div class="timeWrapper">
    <span class="timeInput">
      <input readonly="readonly" type="text" value="10:10 am"/>
      <span class="clearBut" style="">×</span>
    </span>
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
<style scoped>
.timeInput {
  position: relative;
}
.loadingFixBackground{
  position: fixed;
  width: 115vw;
  height: 1115vh;
  background: rgba(50,50,50,0.6);
  z-index: 99;
}

.clearBut {
  position: absolute;
  display: flex;
  flex-flow: column;
  justify-content: center;
  align-items: center;
  top: 0;
  right: 0;
  bottom: 0;
  margin-top: -.15em;
  z-index: 3;
  font-size: 1.1em;
  line-height: 1em;
  vertical-align: middle;
  width: 1.3em;
  color: #d2d2d2;
  background: hsla(0,0%,100%,0);
  text-align: center;
  font-style: normal;
  -webkit-transition: color .2s;
  transition: color .2s;
}
</style>
