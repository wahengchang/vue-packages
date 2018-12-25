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

export default {
  daysInMonth,
  getWeekday,
  weekDayShortConfig,
  monthConfig,
  isSameDay
};
