<template>
  <div>
    <div class="datePicker_wrap">
      <div class="calendar-header">
        <span class="left">Left</span>
        <h3>Month 2018</h3>
        <span class="right">Right</span>
      </div>
      <ul class="calendar">
        <template v-for="(weekday, key) in weekdays">
          <li class="weekday" :key="'weekday' + key">{{ weekday }}</li>
        </template>
        <template v-for="(day, key) in 35">
          <li class="day" :key="'day' + key">{{ day }}</li>
        </template>
      </ul>
      <!-- <ul class="calendar">
        <li class="day" v-for="(week, index) in weeks" :key="index">
          {{ week }}
        </li>
        <li class="day" v-for="(day, index) in 35" :key="index">{{ day }}</li>
      </ul> -->
    </div>
  </div>
</template>

<script>
export default {
  name: "DatePicker",

  data() {
    return {
      weekdays: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"]
    };
  }
};
</script>

<style lang="scss" scoped>
$primary-01: #ff0039;
$secondary-01: #0149ff;
$dark: #16171b;
$slate-grey: #525862;
$bluey-grey: #93a8b3;
$silver: #b7c2c9;
$silver-two: #d5dbde;
$pale-grey: #eff1f3;
$pale-grey-two: #f7f9fa;

.datePicker_wrap {
  width: 450px;
  height: 374px;
  .calendar-header {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
  ul.calendar {
    li {
      width: 36px;
      height: 36px;
      border-radius: 50%;
      background: $pale-grey-two;
      margin: 2px;
    }
    li.weekday,
    li.day {
      display: inline-block;
      width: calc(100% / 7);
    }
  }
}
</style>
