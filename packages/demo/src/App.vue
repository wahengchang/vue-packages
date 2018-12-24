<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png">
    <HelloWorld msg="Welcome to Your Vue.js App"/>

    <section class='componentContainer'>
      <h1>TimePicker </h1>
      <TimePicker />
    </section>

    <section class='componentContainer'>
      <h1>DatePicker </h1>
      <DatePicker />
    </section>

    <section class='componentContainer'>
      <h1>DateTimePicker </h1>
      <DateTimePicker />
    </section>


  </div>
</template>

<script>
import HelloWorld from "./components/HelloWorld.vue";
import {HelloWorld2} from "@lazy-copilot/noscraper";
import {DateTimePicker, DatePicker, TimePicker} from "@lazy-copilot/dateTimePicker";

export default {
  name: "app",
  components: {
    HelloWorld,
    DateTimePicker,
    DatePicker,
    TimePicker
  }
};
</script>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

.componentContainer{
  border-top: 1px lightgray solid;
  padding: 20px 0;
}
</style>
