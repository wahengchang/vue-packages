<template>
  <div class="dateTimePickerModal">
    <a class="calendarTrigger" @click="isOpen = !isOpen">
      <icon-calendar class="iconCalendar" />
      <input
        type="text"
        class="calendarInput"
        :value="selectDateString"
        readonly="readonly"
      />
    </a>

    <date-time-picker-modal
      :class="isOpen ? 'fadeInDown' : ''"
      @submitHandler="submitHandler"
    />
  </div>
</template>

<script>
import DateTimePickerModal from "./DateTimePickerModal.vue";
import iconCalendar from "./Icons/Calendar.vue";
import utils from "./DatePicker/utils/date";

export default {
  name: "DateTimePicker",
  components: { DateTimePickerModal, iconCalendar },
  props: {
    onChange: Function
  },
  methods: {
    submitHandler: function(data) {
      const startYear = data.startAt.getFullYear();
      const startMonth = utils.monthShortConfig[data.startAt.getMonth()];
      const starDate = data.startAt.getDate();
      const startHour = data.startTime.hh;
      const startMinute = data.startTime.mm;
      const startAa = data.startTime.A;

      const endYear = data.endAt.getFullYear();
      const endMonth = utils.monthShortConfig[data.endAt.getMonth()];
      const endDate = data.endAt.getDate();
      const endHour = data.endTime.hh;
      const endMinute = data.endTime.mm;
      const endAa = data.endTime.A;

      this.selectDateString = `${startYear} ${startMonth} ${starDate}  ${startHour}:${startMinute} ${startAa}   -   ${endYear} ${endMonth} ${endDate}  ${endHour}:${endMinute} ${endAa}`;

      this.isOpen = false;


      if (this.$listeners.onChange) {
        return this.$emit("onChange", {...data});
      }

      if (this.onChange) {
        return this.onChange({...data});
      }
    }
  },
  data() {
    return {
      isOpen: false,
      selectDateString: ""
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
.dateTimePickerModal {
  .dateTimePickerWrapper {
    opacity: 0;
  }
  .calendarTrigger {
    position: relative;
    overflow: hidden;
    display: block;
    width: 100%;
    max-width: 480px;
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
