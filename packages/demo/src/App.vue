<template>
  <div id="app">
    <left-nav />
    <router-view/>
  </div>
</template>

<script>
import LeftNav from "./components/LeftNav.vue";
export default {
  name: "app",
  components: {
    LeftNav
  },
}
</script>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

.componentContainer {
  border-top: 1px lightgray solid;
  padding: 20px 0;
}
</style>
