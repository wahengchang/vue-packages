<template>
  <div>
    <div class="datePicker_wrap">
      <div class="calendar-header">
        <span class="icon-left" @click="minusMonth"> <arrow /> </span>
        <h3>{{ currentMonthString }} {{ currentYear }}</h3>
        <span class="icon-right" @click="addMonth"> <arrow /> </span>
      </div>

      <calender
        :today="firstDayOfMonth"
        :month="currentMonth"
        :year="currentYear"
      />
    </div>
  </div>
</template>

<script>
import Arrow from "../Icons/Arrow.vue";
import utils from "./utils/date";
import Calender from "./Calender.vue";

export default {
  name: "DatePicker",
  components: { Arrow, Calender },
  methods: {},
  computed: {
    currentMonthString: function() {
      return utils.monthConfig[this.currentMonth];
    },
    firstDayOfMonth: function() {
      const { currentYear, currentMonth } = this;
      return new Date(`${currentYear}-${currentMonth}`);
    }
  },
  methods: {
    addMonth: function() {
      console.log(" -=-=-=-= addMonth, ");
      if (this.currentMonth === 11) {
        this.currentMonth = 0;
        this.currentYear += 1;
        return;
      }

      return (this.currentMonth += 1);
    },
    minusMonth: function() {
      console.log(" -=-=-=-= minusMonth, ");
      if (this.currentMonth === 0) {
        this.currentMonth = 11;
        this.currentYear -= 1;
        return;
      }

      return (this.currentMonth -= 1);
    }
  },
  data() {
    const today = new Date();
    const defaultCurrentMonth = today.getMonth();
    const defaultCurrentYear = today.getFullYear();
    return {
      today,
      currentYear: defaultCurrentYear,
      currentMonth: defaultCurrentMonth,
      startDate: "01",
      endDate: "15"
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

    span {
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
  }
}
</style>
