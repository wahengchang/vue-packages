<template>
  <div>
    <div class="datePicker_wrap">
      <div class="calendar-header">
        <span class="arrow icon-left" @click="minusMonth"> <arrow /> </span>
        <h3>
          <span class="currentMonth">{{ currentMonthString }}</span>
          <span class="currentYear">{{ currentYear }}</span>
        </h3>
        <span class="arrow icon-right" @click="addMonth"> <arrow /> </span>
      </div>

      <calender
        :month="currentMonth"
        :year="currentYear"
        :selectDayHandler="selectDayHandler"
        :startDate="startDate"
        :endDate="endDate"
      />
    </div>
  </div>
</template>

<script>
import Arrow from "../Icons/Arrow.vue";
import utils from "./utils/date";
import Calender from "./Calender.vue";

const getDayAfter = (n) => {
  const today = new Date();
  const otherDay = new Date();
  otherDay.setDate(today.getDate()+n);

  return otherDay
}

export default {
  name: "DatePicker",
  components: { Arrow, Calender },
  methods: {},
  computed: {
    currentMonthString: function() {
      return utils.monthConfig[this.currentMonth];
    }
  },
  methods: {
    addMonth: function() {
      if (this.currentMonth === 11) {
        this.currentMonth = 0;
        this.currentYear += 1;
        return;
      }

      return (this.currentMonth += 1);
    },
    minusMonth: function() {
      if (this.currentMonth === 0) {
        this.currentMonth = 11;
        this.currentYear -= 1;
        return;
      }

      return (this.currentMonth -= 1);
    },
    selectDayHandler: function(day){
      const { currentYear, currentMonth, startDate, endDate } = this

      const currentDay = new Date(`${currentYear}-${currentMonth + 1}-${day}`)

      // update start
      if(currentDay < startDate) return this.startDate = currentDay

      if(currentDay > endDate) return this.endDate = currentDay

      if(startDate < currentDay &&  currentDay < endDate) return this.endDate = currentDay
    }
  },
  data() {
    const today = new Date();

    const yesterday = getDayAfter(-1)
    const tomorrow = getDayAfter(1)

    const defaultCurrentMonth = today.getMonth();
    const defaultCurrentYear = today.getFullYear();
    return {
      today,
      currentYear: defaultCurrentYear,
      currentMonth: defaultCurrentMonth,
      startDate: yesterday,
      endDate: tomorrow
    };
  }
};
</script>

<style lang="scss" scoped>
@import "../../style/main.scss";
.datePicker_wrap {
  .calendar-header {
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-bottom: 25px;
    .icon-right {
      transform: rotate(180deg);
    }

    span.arrow {
      width: 66px;
      height: 42px;
      background: $pale-grey-two;
      color: $bluey-grey;
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
    .currentYear {
      font-weight: 400;
      margin-left: 10px;
    }
  }
}
</style>
