<template>
  <div class="wrapper">
    <div class="row">
      <div class="dateContainer"><DatePicker /></div>
      <div class="timeContainer">
        <div class="startTime timeRow">
          <span class="subTitle">From</span>
          <div><span class="bigNumber">15</span> Nov 2018</div>
          <time-picker format="hh:mm A" v-model="startTime" />
        </div>
        <div class="endTime timeRow">
          <span class="subTitle">To</span>
          <div><span class="bigNumber">25</span> Nov 2018</div>
          <time-picker format="hh:mm A" v-model="endTime" />
        </div>
      </div>
    </div>
    <div class="row">
      <button>cancel</button> <button @click="_submitHandler">submit</button>
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
    _submitHandler: function() {
      const { startTime, endTime } = this;
      return this.submitHandler({ startTime, endTime });
    }
  },
  props: {
    submitHandler: Function
  },
  data: function() {
    return {
      startTime: {
        hh: "00",
        mm: "00",
        A: "AM"
      },
      endTime: {
        hh: "12",
        mm: "59",
        A: "PM"
      }
    };
  }
};
</script>

<style lang="scss" scoped>
@import "../style/main.scss";

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

  .timeRow {
    display: flex;
    flex-direction: column;
    text-align: left;
    padding: 50px 35px 0 35px;

    .subTitle {
      font-size: 12px;
      color: $bluey-grey;
    }

    .bigNumber {
      font-size: 34px;
      letter-spacing: 3px;
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
