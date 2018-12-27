<template>
  <div class="dateTimePickerModal">
    <a class="calendarTrigger" @click="isOpen = !isOpen">
      <icon-calendar class="iconCalendar" />
      <input type="text" class="calendarInput" />
    </a>

    <date-time-picker-modal v-if="isOpen" />
  </div>
</template>

<script>
import DateTimePickerModal from "./DateTimePickerModal.vue";
import iconCalendar from "./Icons/Calendar.vue";

export default {
  name: "DateTimePicker",
  components: { DateTimePickerModal, iconCalendar },
  data: function() {
    return { isOpen: false };
  }
};
</script>

<style lang="scss" scoped>
@import "../style/main.scss";

.dateTimePickerModal {
  .calendarTrigger {
    margin: 10px;
    position: relative;
    display: block;
    width: 100%;
    max-width: 480px;
    height: 50px;
    border-radius: 3px;
    border: 1px solid $silver-two;
    transition-duration: 1s;
    &:hover {
      border: 1px solid $secondary-01;
    }
    .calendarInput {
      position: absolute;
      width: 100%;
      max-width: 600px;
      height: 100%;
      color: $secondary-01;
      background: #fff;
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
      &:hover {
        color: $secondary-01;
      }
    }
  }
}
</style>
