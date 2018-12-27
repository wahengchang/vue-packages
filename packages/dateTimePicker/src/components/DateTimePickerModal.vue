<template>
  <div class="dateTimePickerModal">
    <a class="calendarTrigger" @click="isOpen = !isOpen">
      <iconCalendar class="iconCalendar" />
      <input type="text" class="calendarInput" />
    </a>

    <datetimepicker v-if="isOpen" />
  </div>
</template>

<script>
import datetimepicker from "./DateTimePicker.vue";
import iconCalendar from "./Icons/Calendar.vue";

export default {
  name: "DateTimePickerModal",
  components: { datetimepicker, iconCalendar },
  data: function() {
    return { isOpen: false };
  }
};
</script>

<style lang="scss" scoped>
@import "../style/main.scss";

.dateTimePickerModal {
  .calendarTrigger {
    position: relative;
    display: block;
    width: 100%;
    max-width: 600px;
    height: 50px;
    border-radius: 3px;
    border: 1px solid $silver-two;
    &:hover {
      border: 1px solid $secondary-01;
    }
    .calendarInput {
      position: absolute;
      width: 100%;
      max-width: 600px;
      height: 50px;
      color: $secondary-01;
      background: #fff;
      font-size: 16px;
      padding: 20px;
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
