<template>
  <div>
    <div class="datePicker_wrap">
      <div class="calendar-header">
        <span class="left">Left</span>
        <h3>Month 2018</h3>
        <span class="right">Right</span>
      </div>
      <ul class="calendar">
        <li class="day" v-for="(day, index) in weekDay" :key="index">
          {{ day }}
        </li>
        <li class="day" v-for="(day, index) in 35" :key="index">{{ day }}</li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: "DatePicker",

  data() {
    return {
      weekDay: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"]
    };
  }
};
</script>

<style scoped lang="scss">
.calendar-header {
  display: flex;
  align-items: center;
  justify-content: space-between;
}
ul.calendar {
  li.day {
    display: inline-block;
    width: calc(100% / 7);
  }
}
</style>
