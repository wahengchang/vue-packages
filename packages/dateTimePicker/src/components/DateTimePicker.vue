<template>
  <div class="dateTimePickerWrapper">
    <div class="containerWrapper">
      <div class="dateContainer"><DatePicker /></div>
      <div class="timeContainer">
        <div class="startTime timeRow">
          <span class="subTitle">From</span>
          <div><span class="bigNumber">15</span> Nov 2018</div>
          <time-picker format="hh:mm A" v-model="startTime" />
        </div>
        <div class="endTime timeRow">
          <span class="subTitle">To</span>
          <div><span class="bigNumber">25</span> Nov 2018</div>
          <time-picker format="hh:mm A" v-model="endTime" />
        </div>
      </div>
    </div>
    <div class="buttonWrap">
      <button class="confirm" @click="_submitHandler">submit</button>
      <button class="cancel">cancel</button>
    </div>
  </div>
</template>

<script>
import TimePicker from "./TimePicker/index.vue";
import DatePicker from "./DatePicker/index.vue";

export default {
  name: "DateTimePicker",
  components: { DatePicker, TimePicker },
  methods: {
    _submitHandler: function() {
      const { startTime, endTime } = this;
      return this.submitHandler({ startTime, endTime });
    }
  },
  props: {
    submitHandler: Function
  },
  data: function() {
    return {
      startTime: {
        hh: "00",
        mm: "00",
        A: "AM"
      },
      endTime: {
        hh: "12",
        mm: "59",
        A: "PM"
      }
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
    padding: 40px 30px;
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
      height: 48px;
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
