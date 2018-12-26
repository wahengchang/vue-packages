const weekDayConfig = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday"
];

const weekDayShortConfig = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

const monthConfig = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December"
];

export const daysInMonth = (year, month) => {
  return 32 - new Date(year, month, 32).getDate();
};

export const getWeekday = (date = "", isStringResult) => {
  if (!date) return isStringResult ? "" : -1;

  if (typeof date === "number" || typeof date === "string") {
    const weekday = new Date(date).getDay();
    return isStringResult ? weekDayConfig[weekday] : weekday;
  }

  return isStringResult ? "" : -1;
};

export const isSameDay = (d1, d2) => {
  return (
    d1.getFullYear() === d2.getFullYear() &&
    d1.getMonth() === d2.getMonth() &&
    d1.getDate() === d2.getDate()
  );
};

const yymmdd = date => {
  var d = new Date(date),
    month = "" + (d.getMonth() + 1),
    day = "" + d.getDate(),
    year = d.getFullYear();

  if (month.length < 2) month = "0" + month;
  if (day.length < 2) day = "0" + day;

  return `${year}-${month}-${day}`;
};

export const format = (date, formatString) => {
  if (formatString === "yy-mm-dd") return yymmdd(date);

  console.warn("given date format is not found");
  return yymmdd(date);
};

export default {
  daysInMonth,
  getWeekday,
  weekDayShortConfig,
  monthConfig,
  isSameDay,
  format
};
