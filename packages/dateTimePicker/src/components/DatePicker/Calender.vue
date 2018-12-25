<template>
  <div>
    <ul class="calendar">
      <template v-for="(weekday, key) in weekdays">
        <li class="weekday" :key="'weekday' + key">
          <span>{{ weekday }}</span>
        </li>
      </template>
      <template v-for="(day, key) in startWeekday">
        <li class="day" :key="'null' + key">
          <!-- <span class="nullBlock"></span> -->
        </li>
      </template>
      <template v-for="(day, key) in daysCount">
        <li class="day" :key="'day' + key">
          <span :class="getDayStyle(day)" @click="selectDayHandler(day)">{{ day }}</span>
        </li>
      </template>
    </ul>
  </div>
</template>

<script>
import utils from "./utils/date";

const isToday = (otherDay) => {
  const today = new Date();
  return utils.isSameDay(today, otherDay)
}

const betweenDays = (smallDay, bigDay, currentDay) => {
  if(currentDay < bigDay && smallDay < currentDay) return true

  return false
}

export default {
  name: "Calender",
  props: {
    year: Number,
    month: Number,
    startDate: Date,
    endDate: Date,
    selectDayHandler: Function
  },
  methods: {
    getDayStyle: function(day) {
      const {startDate, endDate, year, month} = this
      const currentDay = new Date(`${year}-${month + 1}-${day}`)

      if (utils.isSameDay(currentDay, startDate)) return "startDate";
      if (utils.isSameDay(currentDay, endDate)) return "endDate";
      if (betweenDays(startDate, endDate, currentDay)) return "between";
      if (isToday(currentDay)) return "today";
      
      return "";
    }
  },
  computed: {
    startWeekday: function() {
      return utils.getWeekday(
        new Date(`${this.year}-${this.month + 1}-1`).getTime()
      );
    },
    daysCount: function() {
      return utils.daysInMonth(this.year, this.month);
    }
  },
  data() {
    const { month } = this;
    return {
      weekdays: utils.weekDayShortConfig
    };
  }
};
</script>

<style lang="scss" scoped>
@import "../../style/main.scss";

.calendar {
  max-width: 380px;
  .nullBlock {
  }
  li {
    display: inline-block;
    width: calc(100% / 7);
  }
  li.weekday {
    font-size: 14px;
    color: $silver;
    font-weight: 600;
    margin-bottom: 8px;
    text-align: center;
  }
  li.day {
    span {
      width: 100%;
      height: 40px;
      display: inline-block;
      text-align: center;
      line-height: 40px;
      font-size: 15px;
      font-weight: 600;
      margin: 2px;
      color: $slate-grey;
      background: #fff;

      &:hover {
        cursor: pointer;
        color: #fff;
        background: $secondary-01;
        transition-duration: 0.3s;
      }
      &.today {
        box-shadow: inset 0 0 0 2px $secondary-01;
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
</style>
