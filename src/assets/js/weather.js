import { apiKey } from "./apiKey";
import { getCurrentWeather } from "./getCurrentWeather";
import { getHourlyWeather } from "./getHourlyWeather";

export const weather = (function () {
  async function getDataFromCity(city = "Manila") {
    const response = await fetch(
      `https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=${apiKey}&units=metric`
    );
    const json = await response.json();
    localStorage.setItem("city", JSON.stringify(json.city));
    localStorage.setItem("weather", JSON.stringify({ ...json.list }));
    getCurrentWeather();
    getHourlyWeather();
  }

  async function getDataFromLocation(position) {
    const lat = position.coords.latitude;
    const lon = position.coords.longitude;
    const response = await fetch(
      `https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&appid=${apiKey}&units=metric`
    );
    const json = await response.json();
    localStorage.setItem("city", JSON.stringify(json.city));
    localStorage.setItem("weather", JSON.stringify({ ...json.list }));
    getCurrentWeather();
    getHourlyWeather();
  }

  return { getDataFromCity, getDataFromLocation };
})();
