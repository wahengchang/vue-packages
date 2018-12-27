# @lazy-copilot/datetimepicker

> RWD friendly date+time picker for Vue. Supports date, datetime and time modes, and disabling dates.


[![NPM](https://nodei.co/npm/@lazy-copilot/datetimepicker.png?downloads=true&downloadRank=true)](https://www.npmjs.com/package/@lazy-copilot/datetimepicker)

## Demo

![image](https://user-images.githubusercontent.com/5538753/50449437-622be680-0962-11e9-84fd-cddc79eb151d.png)


## Install
```
$ npm install @lazy-copilot/datetimepicker

or 

$ yarn add @lazy-copilot/datetimepicker
```

### Register
```js
<template>
  <date-time-picker
    @submitHandler="submitHandler"
    @cancelHandler="cancelHandler"
    :startDate="startDate"
    :endDate="endDate"
    :startTime="startTime"
    :endTime="endTime"
  />
</template>

<script>
import '@lazy-copilot/datetimepicker/dist/datetimepicker.css'
import { DateTimePicker } from "@lazy-copilot/datetimepicker";

export default {
  name: "app",
  components: {
    DateTimePicker
  },
  methods: {
    submitHandler: function(data) {
      console.log("data: ", data);
    },
    cancelHandler: function() {
      console.log("close");
    }
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
}
</script>

```

### Remark
The `time-picker` here is a customized version of the awesome project `vue2-timepicker` by `phoenixwong`.

### Reference
 - [vue2-timepicker](https://github.com/phoenixwong/vue2-timepicker)
