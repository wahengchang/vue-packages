<template>
  <div class="wrapper">
    <div class="row">
      <div class="dateContainer"><DatePicker /></div>
      <div class="timeContainer">
        <div class="startTime timeRow">
          <span class="subTitle">From</span>
          <div><span class="bigNumber">5</span> Nov 2018</div>
          <time-picker format="hh:mm A" />
        </div>
        <div class="endTime timeRow">
          <span class="subTitle">To</span>
          <div><span class="bigNumber">7</span> Nov 2018</div>
          <time-picker format="hh:mm A" />
        </div>
      </div>
    </div>
    <div class="row">
      <button>cancel</button>
      <button @click="_submitHandler">submit</button>
    </div>
  </div>
</template>

<script>
import TimePicker from "./TimePicker/index.vue";
import DatePicker from "./DatePicker";

export default {
  name: "DateTimePicker",
  components: { DatePicker, TimePicker },
  methods: {
    _submitHandler: function(){
      return this.submitHandler({})
    }
  },
  props: {
    submitHandler: Function
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
.wrapper {
  border: black 1px solid;
  display: flex;
  flex-direction: column;
  .dateContainer {
    border: black 1px solid;
  }
}

.timeContainer {
  border: black 1px solid;
  width: 300px;

  .timeRow {
    display: flex;
    flex-direction: column;
    text-align: left;
    padding-left: 50px;
    padding-top: 35px;

    .subTitle {
      font-size: 12px;
      color: gray;
    }

    .bigNumber {
      font-size: 25px;
      letter-spacing: 10px;
      line-height: 45px;
      color: #0056ff;
      font-weight: 100;
    }
  }
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
