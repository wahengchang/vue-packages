<template>
  <div>
    <div class="datePicker_wrap">
      <div class="calendar-header">
        <span class="icon-left"> <arrow /> </span>
        <h3>Month 2018</h3>
        <span class="icon-right"> <arrow /> </span>
      </div>
      <ul class="calendar">
        <template v-for="(weekday, key) in weekdays">
          <li class="weekday" :key="'weekday' + key">
            <span>{{ weekday }}</span>
          </li>
        </template>
        <template v-for="(day, key) in 35">
          <li class="day" :key="'day' + key">
            <span :class="getDayStyle(day)">{{ day }}</span>
          </li>
        </template>
      </ul>
    </div>
  </div>
</template>

<script>
import Arrow from "./Icons/Arrow.vue";

export default {
  name: "DatePicker",
  components: { Arrow },
  methods: {
    getDayStyle: function(day) {
      if (day === 5) return "today";
      if (day === 15) return "startDate";
      if (day === 25) return "endDate";
      if (day < 25 && day > 15) return "between";
      return "";
    }
  },
  data() {
    return {
      weekdays: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
      startDate: "01",
      endDate: "15",
      today: new Date()
    };
  }
};
</script>

<style lang="scss" scoped>
@import "../style/main.scss";

.datePicker_wrap {
  padding: 30px;

  .calendar-header {
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-bottom: 25px;
    .icon-right {
      transform: rotate(180deg);
    }

    span {
      width: 66px;
      height: 42px;
      background: $pale-grey-two;
      color: $silver;
      transition-duration: 0.3s;
      border-radius: 2px;
      display: flex;
      justify-content: center;
      align-items: center;

      &:hover {
        cursor: pointer;
        background: $secondary-01;
        color: #fff;
      }
    }
    .icon-left {
      margin-left: 5px;
    }
    .icon-right {
      margin-right: 5px;
    }
    h3 {
      font-size: 18px;
      color: $dark;
    }
  }
  .calendar {
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
        width: 40px;
        height: 40px;
        display: inline-block;
        text-align: center;
        line-height: 40px;
        font-size: 15px;
        font-weight: 600;
        margin: 3px;
        color: $slate-grey;
        background: #fff;

        &:hover {
          cursor: pointer;
          color: #fff;
          background: $secondary-01;
          transition-duration: 0.3s;
        }
        &.today {
          box-shadow: 0 0 0 2px $secondary-01;
        }
        &.startDate {
          background: $secondary-01;
          color: #fff;
        }
        &.endDate {
          background: $secondary-01;
          color: #fff;
        }
        &.between {
          background: #eaf0fd;
        }
      }
    }
  }
}
</style>
