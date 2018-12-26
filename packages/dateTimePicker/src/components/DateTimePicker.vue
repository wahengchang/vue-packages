<template>
  <div class="dateTimePickerWrapper">
    <div class="containerWrapper">
      <div class="dateContainer">
        <DatePicker
          ref="datePickerRef"
          :startDate="innerStartDate"
          :endDate="innerEndDate"
        />
      </div>
      <div class="timeContainer">
        <div class="startTime timeRow">
          <span class="subTitle">From</span>
          <div><span class="bigNumber">15</span> Nov 2018</div>
          <time-picker
            format="hh:mm A"
            v-bind:value="defaultStartTime"
            @change="_onChangeTimeStart"
          />
        </div>
        <div class="endTime timeRow">
          <span class="subTitle">To</span>
          <div><span class="bigNumber">25</span> Nov 2018</div>
          <time-picker
            format="hh:mm A"
            v-bind:value="defaultEndTime"
            @change="_onChangeTimeEnd"
          />
        </div>
      </div>
    </div>
    <div class="buttonWrap">
      <button class="confirm" @click="_submitHandler">submit</button>
      <button class="cancel" @click="_cancelHandler">cancel</button>
    </div>
  </div>
</template>

<script>
import TimePicker from "./TimePicker/index.vue";
import DatePicker from "./DatePicker/index.vue";
import utils from "./DatePicker/utils/date";

const DEFAULT_START_TIME = {
  hh: "00",
  mm: "00",
  A: "AM"
};

const DEFAULT_END_TIME = {
  hh: "12",
  mm: "59",
  A: "PM"
};

const getDayAfter = (fromDay, n) => {
  const otherDay = new Date(fromDay);
  otherDay.setDate(fromDay.getDate() + n);
  return otherDay;
};

export default {
  name: "DateTimePicker",
  components: { DatePicker, TimePicker },
  methods: {
    _cancelHandler: function() {
      if (this.$listeners.cancelHandler) {
        return this.$emit("cancelHandler");
      }
      if (this.cancelHandler) {
        return this.cancelHandler();
      }
    },
    _submitHandler: function() {
      const { innerStartTime: startTime, innerEndTime: endTime } = this;

      const {
        innerStartDate: startDate,
        innerEndDate: endDate
      } = this.$refs.datePickerRef;

      const startDateString = utils.format(startDate, "yy-mm-dd");
      const endDateString = utils.format(endDate, "yy-mm-dd");
      const startTimeString = `${startTime.HH}:${startTime.mm}`;
      const endTimeString = `${endTime.HH}:${endTime.mm}`;
      const startDateObject = new Date(`${startDateString}T${startTimeString}`);
      const endDateObject = new Date(`${endDateString}T${endTimeString}`);

      const returnData = {
        startAt: startDateObject,
        endAt: endDateObject
      };

      if (this.$listeners.submitHandler) {
        return this.$emit("submitHandler", returnData);
      }

      if (this.submitHandler) {
        return this.submitHandler(returnData);
      }
    },
    _onChangeTimeStart: function(val) {
      return this._onChangeTime("innerStartTime", val);
    },
    _onChangeTimeEnd: function(val) {
      return this._onChangeTime("innerEndTime", val);
    },
    _onChangeTime: function(field, val) {
      this[field] = val.data;
    }
  },
  props: {
    submitHandler: Function,
    startDate: Date,
    endDate: Date,
    startTime: Object,
    endTime: Object
  },
  data: function() {
    const { startDate, endDate, startTime, endTime } = this;
    const today = new Date();

    return {
      defaultStartTime: startTime || DEFAULT_START_TIME,
      defaultEndTime: endTime || DEFAULT_END_TIME,
      innerStartDate: startDate || today,
      innerEndDate: endDate || getDayAfter(today, 2),
      innerStartTime: startTime,
      innerEndTime: endTime
    };
  }
};
</script>

<style lang="scss" scoped>
@import "../style/main.scss";

.dateTimePickerWrapper {
  max-width: 768px;
  background: #fff;

  .containerWrapper {
    display: flex;
    padding: 40px 30px 20px 30px;
    .dateContainer {
      padding: 0 30px;
      border-right: 1px solid $pale-grey;
    }
    .timeContainer {
      padding: 0 30px;
      .timeRow {
        display: flex;
        flex-direction: column;
        text-align: left;
        padding: 20px 0;

        .subTitle {
          font-size: 12px;
          color: $bluey-grey;
        }

        .bigNumber {
          font-size: 34px;
          letter-spacing: 3px;
          line-height: 45px;
          color: $secondary-01;
          font-weight: 100;
        }
      }
    }
  }
  .buttonWrap {
    display: flex;
    width: 100%;
    flex-direction: row-reverse;
    display: flex;
    justify-content: center;
    padding: 20px;
    background: $pale-grey-two;

    button {
      padding: 0 30px;
      height: 50px;
      border-radius: 4px;
      font-size: 13px;
      font-weight: 700;
      text-transform: uppercase;
      margin: 0 10px;
      letter-spacing: 1px;
      &:hover {
        outline: none;
      }

      &.confirm {
        color: #fff;
        background: $primary-01;
      }
      &.cancel {
        color: $bluey-grey;
        border: 1px solid $silver-two;
      }
    }
  }
}
@media only screen and (max-width: 767px) {
  .dateTimePickerWrapper {
    .containerWrapper {
      padding: 30px 0;
      .timeContainer,
      .dayContainer {
        padding: 0 20px;
      }
    }
  }
}
@media only screen and (max-width: 500px) {
  .dateTimePickerWrapper {
    .containerWrapper {
      padding: 30px 20px;
      display: block;
      .dateContainer {
        padding: 0;
        border-right: 0px;
        margin-bottom: 20px;
      }
      .timeContainer {
        padding: 0;
        .timeRow {
          padding: 10px 0;
        }
      }
    }
  }
}
</style>
