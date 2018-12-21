<template>
  <div class="wrapper">
    <div class="row">
      <div class="dateContainer">
        date picker
      </div>
      <div class="timeContainer">
        <div class="startTime timeRow">
          time picker
        </div>
        <div class="endTime timeRow">
          time picker
        </div>
      </div>
    </div>

    <div class="row">
      <button> cancel </button>
      <button> submit </button>
    </div>

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
.wrapper{
  border: black 1px solid;
  display: flex;
  flex-direction: column;
}
.dateContainer{
  border: black 1px solid;
  width: 50%;
}
.timeContainer {
  border: black 1px solid;
  width: 50%;
}
.row {
  display: flex;
}
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
