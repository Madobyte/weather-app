import { apiKey } from "./apiKey";
import { getCurrentWeather } from "./getCurrentWeather";
import { getHourlyWeather } from "./getHourlyWeather";

export const weather = (function () {
  async function getDataFromCity(city = "Manila") {
    if (!localStorage.getItem("units")) {
      const unitsCheckbox = document.querySelector("input[type='checkbox']");
      unitsCheckbox.checked = true;
      localStorage.setItem("units", "metric");
    }
    const units = localStorage.getItem("units");
    const today = document.getElementById("day0");
    const response = await fetch(
      `https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=${apiKey}&units=${units}`
    ).catch((error) => {
      throw error;
    });
    const json = await response.json();
    localStorage.setItem("city", JSON.stringify(json.city));
    localStorage.setItem("weather", JSON.stringify({ ...json.list }));
    getCurrentWeather();
    getHourlyWeather();
    today.click();
  }

  async function getDataFromLocation(position) {
    if (!localStorage.getItem("units")) {
      localStorage.setItem("units", "metric");
      const unitsCheckbox = document.querySelector("input[type='checkbox']");
      unitsCheckbox.checked = true;
    }
    const units = localStorage.getItem("units");
    const today = document.getElementById("day0");
    const lat = position.coords.latitude;
    const lon = position.coords.longitude;
    const response = await fetch(
      `https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&appid=${apiKey}&units=${units}`
    ).catch((error) => {
      throw error;
    });
    const json = await response.json();
    localStorage.setItem("city", JSON.stringify(json.city));
    localStorage.setItem("weather", JSON.stringify({ ...json.list }));
    getCurrentWeather();
    getHourlyWeather();
    today.click();
  }

  return { getDataFromCity, getDataFromLocation };
})();
