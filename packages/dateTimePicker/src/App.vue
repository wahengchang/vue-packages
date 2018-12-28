<template>
  <div id="app">
    <section class="componentContainer">
      <input type="checkbox" id="checkbox" v-model="singleDate">
      <label for="checkbox"> SingleDate </label>
    </section>
    <section class="componentContainer">
      <button @click="tapIndex = 0" class="componentTab">TimePicker</button>
      <button @click="tapIndex = 1" class="componentTab">Calender</button>
      <button @click="tapIndex = 2" class="componentTab">DatePicker</button>
      <button @click="tapIndex = 3" class="componentTab">DateTimePicker</button>
      <button @click="tapIndex = 4" class="componentTab">
        DateTimePickerModal
      </button>
    </section>

    <section class="componentContainer" v-if="tapIndex === 0">
      <h1>TimePicker</h1>
      <TimePicker />
    </section>

    <section class="componentContainer" v-if="tapIndex === 1">
      <h1>Calender</h1>
      <span>{{ calenderValue }}</span>
      <Calender
        :month="currentMonth"
        :year="currentYear"
        :startDate="startDate"
        :endDate="endDate"
        :singleDate="singleDate"
        @onChange="calenderValue = $event"
      />
    </section>

    <section class="componentContainer" v-if="tapIndex === 2">
      <h1>DatePicker</h1>
      <span>{{ datePickerValue }}</span>
      <DatePicker
        :singleDate="singleDate"
        @onChange="datePickerValue = $event"
      />
    </section>

    <section class="componentContainer" v-if="tapIndex === 3">
      <h1>DateTimePicker</h1>
      <span>{{dateTimePickerValue}}</span>
      <DateTimePicker
        :singleDate="singleDate"
        @onChange="dateTimePickerValue = $event"
      />
    </section>

    <section class="componentContainer" v-if="tapIndex === 4">
      <h1>DateTimePickerModal</h1>
      <span>{{dateTimePickerModalValue}}</span>
      <form>
        <date-time-picker-modal
          @cancelHandler="cancelHandler"
          :startDate="startDate"
          :endDate="endDate"
          :startTime="startTime"
          :endTime="endTime"
          :singleDate="singleDate"
        />
      </form>
    </section>
  </div>
</template>

<script>
import DateTimePicker from "./components/DateTimePicker.vue";
import DateTimePickerModal from "./components/DateTimePickerModal.vue";
import TimePicker from "./components/TimePicker/index.vue";
import DatePicker from "./components/DatePicker/index.vue";
import Calender from "./components/DatePicker/Calender.vue";

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
    DateTimePickerModal,
    TimePicker,
    DatePicker,
    Calender
  },
  data: function() {
    return {
      singleDate: false,
      calenderValue: null,
      datePickerValue: null,
      dateTimePickerModalValue: null,
      dateTimePickerValue: null,
      tapIndex: 0,
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
      currentMonth: 11,
      currentYear: 2018,
      startDate: new Date("2018-12-13"),
      endDate: new Date("2018-12-16")
    };
  }
};
</script>

<style lang="scss">
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;

  .componentContainer {
    border-top: 1px lightgray solid;
    padding: 20px 0;

    .componentTab {
      border: black solid 1px;
      margin: 0 5px;
      padding: 2px 5px;
    }
  }
}
</style>

<style lang="scss">
@import "./style/main.scss";
</style>
