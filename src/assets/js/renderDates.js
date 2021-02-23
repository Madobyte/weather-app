import { dayNames, monthNames } from "./constants";

export const renderDate = (array) => {
  /* Gets and renders the dates */
  for (let i = 0; i <= 4; i++) {
    const unixTimestamp = array[i][0].dt;
    const date = new Date(unixTimestamp * 1000);
    const dateMonth = monthNames[date.getMonth()];
    const dateDate = date.getDate();
    const dateDay = dayNames[date.getDay()];
    let dateMonthDay;

    if (i === 0) {
      dateMonthDay = `Today, ${dateMonth} ${dateDate}`;
    } else {
      dateMonthDay = `${dateDay}, ${dateMonth} ${dateDate}`;
    }

    const aDate = document.getElementById(`day${i}`);
    aDate.innerText = dateMonthDay;
  }
};
