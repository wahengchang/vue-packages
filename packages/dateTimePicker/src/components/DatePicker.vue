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
          <li class="weekday" :key="'weekday' + key">
            <span>{{ weekday }}</span>
          </li>
        </template>
        <template v-for="(day, key) in 35">
          <li class="day" :key="'day' + key">
            <span>{{ day }}</span>
          </li>
        </template>
      </ul>
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
@import "../style/main.scss";

.datePicker_wrap {
  height: 374px;
  background: $pale-grey-two;

  .calendar-header {
    display: flex;
    align-items: center;
    justify-content: space-between;
    background: red;
    h3 {
      font-size: 18px;
      color: $dark;
    }
  }
  ul.calendar {
    max-width: 400px;
    li {
      display: inline-block;
      width: calc(100% / 7);
    }
    li.weekday {
      font-size: 14px;
      color: $silver;
      font-weight: 600;
      margin-bottom: 8px;
    }
    li.day {
      span {
        width: 36px;
        height: 36px;
        border-radius: 50%;
        display: inline-block;
        margin: 3px 5px;
        background: #fff;
        color: $slate-grey;
        text-align: center;
        line-height: 36px;
        font-size: 15px;
        font-weight: 600;
      }
    }
  }
}
</style>
