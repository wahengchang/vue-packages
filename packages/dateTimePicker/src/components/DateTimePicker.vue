<template>
  <div class="dateTimePickerModal">
    <a class="calendarTrigger" @click="isOpen = !isOpen">
      <icon-calendar class="iconCalendar" />
      <input type="text" class="calendarInput" />
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

export default {
  name: "DateTimePicker",
  components: { DateTimePickerModal, iconCalendar },
  methods: {
    submitHandler: function(data) {
      // console.log(" -=-=-= submitHandler ", data);
    }
  },
  data: function() {
    return { isOpen: false };
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
      width: 100%;
      height: 100%;
      color: $secondary-01;
      font-size: 16px;
      padding: 20px 20px 20px 50px;
      outline: none;
      margin-bottom: 10px;
      z-index: 1;
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
