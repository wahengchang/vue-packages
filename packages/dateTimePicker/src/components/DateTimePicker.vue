<template>
  <div class="dateTimePickerWrapper">
    <a
      class="calendarTrigger"
      @click="isOpen = !isOpen"
      :class="isOpen ? 'active' : ''"
    >
      <icon-calendar class="iconCalendar" />
      <input
        type="text"
        class="calendarInput"
        :value="selectDateString"
        readonly="readonly"
      />
    </a>

    <date-time-picker-modal
      v-if="isOpen"
      :class="isOpen ? 'fadeInDown' : ''"
      :singleDate="singleDate"
      @submitHandler="submitHandler"
      @cancelHandler="isOpen = false"
    />
  </div>
</template>

<script>
import DateTimePickerModal from "./DateTimePickerModal.vue";
import iconCalendar from "./Icons/Calendar.vue";
import utils from "./DatePicker/utils/date";

const _getDateString = (date, timeObject) => {
  const startYear = date.getFullYear();
  const startMonth = utils.monthShortConfig[date.getMonth()];
  const starDate = date.getDate();
  const startHour = timeObject.hh;
  const startMinute = timeObject.mm;
  const startAa = timeObject.A;

  return `${startYear} ${startMonth} ${starDate}  ${startHour}:${startMinute} ${startAa}`;
};

export default {
  name: "DateTimePicker",
  components: { DateTimePickerModal, iconCalendar },
  props: {
    startDate: Date,
    endDate: Date,
    startTime: Object,
    endTime: Object,
    singleDate: {
      type: Boolean,
      default: false
    },
    onChange: Function
  },
  methods: {
    getDateString: function(data) {
      const { singleDate } = this;
      const { startDate, startTime, endDate, endTime } = data;
      return singleDate
        ? _getDateString(startDate, startTime)
        : `${_getDateString(startDate, startTime)} - ${_getDateString(
            endDate,
            endTime
          )}`;
    },
    callOnChange: function(returnData) {
      if (this.$listeners.onChange) {
        return this.$emit("onChange", { ...returnData });
      }

      if (this.onChange) {
        return this.onChange({ ...returnData });
      }
    },
    submitHandler: function(data) {
      this.isOpen = false;
      this.selectDateString = this.getDateString(data);
      return this.callOnChange(data);
    }
  },
  data() {
    const { startDate, startTime, endDate, endTime } = this;
    this.callOnChange({ startDate, startTime, endDate, endTime });
    return {
      isOpen: false,
      selectDateString: this.getDateString({
        startDate,
        startTime,
        endDate,
        endTime
      })
    };
  }
};
</script>

<style lang="scss" scoped>
@import "../style/main.scss";

/* animation */
@keyframes fadeInDown {
  0% {
    opacity: 0;
    transform: translateY(-20px);
  }
  100% {
    opacity: 1;
    transform: translateY(0);
  }
}

.fadeInDown {
  animation: fadeInDown 0.6s ease both;
}

/* compomnent style */
.dateTimePickerWrapper {
  .dateTimeWrapper {
    opacity: 0;
    position: absolute;
  }

  .calendarTrigger {
    position: relative;
    overflow: hidden;
    display: block;
    width: 460px;
    height: 50px;
    border-radius: 3px;
    background: #fff;
    border: 1px solid $silver-two;
    transition-duration: 1s;

    &:hover {
      border: 1px solid $secondary-01;
      .iconCalendar {
        color: $secondary-01;
      }
    }
    &.active {
      border-color: $secondary-01;
      .iconCalendar {
        color: $secondary-01;
      }
    }

    .calendarInput {
      background: #fff;
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      color: $secondary-01;
      font-size: 16px;
      padding: 20px 20px 20px 50px;
      outline: none;
      margin-bottom: 10px;
      z-index: 1;
      cursor: pointer;
    }
    .iconCalendar {
      position: absolute;
      z-index: 2;
      width: 50px;
      height: 50px;
      justify-content: center;
      align-items: center;
      display: flex;
      color: $silver;
    }
  }
}
</style>
