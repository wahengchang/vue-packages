<template>
  <div id="app">
    <HelloWorld msg="Demo of Date Time picker"/>

    <section class='componentContainer'>
      <button @click='tapIndex = 0'> TimePicker </button>
      <button @click='tapIndex = 1'> Calender </button>
      <button @click='tapIndex = 2'> DatePicker </button>
      <button @click='tapIndex = 3'> DateTimePicker </button>
    </section>

    <section class='componentContainer' v-if="tapIndex === 0">
      <h1>TimePicker </h1>
      <TimePicker />
    </section>

    <section class='componentContainer' v-if="tapIndex === 1">
      <h1>Calender </h1>
      <Calender
        :month="currentMonth"
        :year="currentYear"
        :startDate="startDate"
        :endDate="endDate"
      />
    </section>

    <section class='componentContainer' v-if="tapIndex === 2">
      <h1>DatePicker </h1>
        <DatePicker
          :startDate="startDate"
          :endDate="endDate"
        />
    </section>

    <section class='componentContainer' v-if="tapIndex === 3">
      <h1>DateTimePicker </h1>
      <DateTimePicker
        :startDate = "startDate"
        :endDate = "endDate"
        :startTime = "startTime"
        :endTime = "endTime"
      />
    </section>


  </div>
</template>

<script>
import HelloWorld from "./components/HelloWorld.vue";
import {HelloWorld2} from "@lazy-copilot/noscraper";
import {DateTimePicker, DatePicker, TimePicker, Calender} from "@lazy-copilot/dateTimePicker";

export default {
  name: "app",
  components: {
    HelloWorld,
    DateTimePicker,
    DatePicker,
    TimePicker,
    Calender
  },
  data: function(){
    return {
      tapIndex: 0,
      currentMonth: 11,
      currentYear: 2018,
      startDate: new Date('2018-12-18'),
      endDate: new Date('2018-12-11'),
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
    }
  }
};
</script>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

.componentContainer{
  border-top: 1px lightgray solid;
  padding: 20px 0;
}
</style>
