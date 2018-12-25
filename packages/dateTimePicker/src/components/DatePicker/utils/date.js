const weekDayConfig = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday"
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

export default { daysInMonth, getWeekday };
