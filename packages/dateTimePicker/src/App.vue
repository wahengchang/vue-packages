<template>
  <div id="app">
    <div class="demoWrapper">
      <date-time-picker></date-time-picker>

      <date-time-picker-modal
        style="display:none"
        @submitHandler="submitHandler"
        @cancelHandler="cancelHandler"
        :startDate="startDate"
        :endDate="endDate"
        :startTime="startTime"
        :endTime="endTime"
      />
    </div>
  </div>
</template>

<script>
import DateTimePicker from "./components/DateTimePicker.vue";
import DateTimePickerModal from "./components/DateTimePickerModal.vue";

export default {
  name: "app",
  methods: {
    submitHandler: function(data) {
      console.log("data: ", data);
    },
    cancelHandler: function() {
      console.log("close");
    }
  },
  components: {
    DateTimePicker,
    DateTimePickerModal
  },
  data: function() {
    return {
      startTime: {
        hh: "05",
        mm: "23",
        A: "AM"
      },
      endTime: {
        hh: "11",
        mm: "21",
        A: "PM"
      },
      startDate: new Date("2018-12-13"),
      endDate: new Date("2018-12-16")
    };
  }
};
</script>

<style lang="scss">
@import "./style/main.scss";
</style>
