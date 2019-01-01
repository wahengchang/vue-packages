# @lazy-copilot/datetimepicker

> RWD friendly date+time picker for Vue. Supports date, datetime and time modes, and disabling dates.

[![NPM](https://nodei.co/npm/%40lazy-copilot%2Fdatetimepicker.png)](https://nodei.co/npm/%40lazy-copilot%2Fdatetimepicker/)
[![NPM](https://nodei.co/npm/@lazy-copilot/datetimepicker.png?downloads=true&downloadRank=true)](https://www.npmjs.com/package/@lazy-copilot/datetimepicker)

## Demo

![image](https://user-images.githubusercontent.com/5538753/50570051-8e59c400-0db5-11e9-9d9c-767dc0dbf947.png)



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
    :startDate = "startDate"          //optional
    :endDate = "endDate"              //optional
    :startTime = "startTime"          //optional
    :endTime = "endTime"              //optional
    @cancelHandler="cancelHandler"    //optional
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
    cancelHandler: function(data) {
      console.log("data: ", data);
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
