import { weather } from "./weather";

export const settings = () => {
  const unitsCheckbox = document.querySelector("input[type='checkbox']");
  const units = localStorage.getItem("units");
  if (units === "metric") unitsCheckbox.checked = true;
  else unitsCheckbox.checked = false;
  unitsCheckbox.addEventListener("click", () => {
    if (unitsCheckbox.checked === true) {
      const currentLocation = JSON.parse(localStorage.getItem("city")).name;
      localStorage.setItem("units", "metric");
      weather.getDataFromCity(currentLocation);
    } else {
      const currentLocation = JSON.parse(localStorage.getItem("city")).name;
      localStorage.setItem("units", "imperial");
      weather.getDataFromCity(currentLocation);
    }
  });
};
