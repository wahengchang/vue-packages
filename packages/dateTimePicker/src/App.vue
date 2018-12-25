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
    submitHandler: function(data) {
      console.log("data: ", data);
    }
  },
  components: {
    DateTimePicker
  }
};
</script>

<style lang="scss">
@import "./style/main.scss";
</style>
