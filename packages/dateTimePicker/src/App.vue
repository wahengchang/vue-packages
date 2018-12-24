<template>
  <div id="app">
    <div class="demoWrapper">
      <date-time-picker :submitHandler="submitHandler" />
    </div>
  </div>
</template>

<script>
import DateTimePicker from "./components/DateTimePicker.vue";

export default {
  name: "app",
  methods: {
    submitHandler: function(data){
      console.log('data: ', data)
    }
  },
  components: {
    DateTimePicker
  }
};
</script>

<style>
#app {
  font-family: "Nunito Sans", sans-serif;
  /* font-family: "Avenir", Helvetica, Arial, sans-serif; */
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
.demoWrapper {
  border: red 1px solid;
}
</style>
