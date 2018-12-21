import date from "@/utils/date";
import {daysInMonth} from "@/utils/date"; 

describe("./utils/date", () => {
  it("should have function daysInMonth", () => {
    expect(typeof daysInMonth).toBe('function')
  });
});

describe("daysInMonth", () => {
  it("shoud return 29 for 2000/02", () => {
    const feb = 1
    expect(daysInMonth(2000, feb)).toBe(29)
  });

  it("shoud return 31 for 2000/01", () => {
    const jau = 0
    expect(daysInMonth(2000, jau)).toBe(31)
  });
});
