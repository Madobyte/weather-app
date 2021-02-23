import { apiKey } from "./apiKey";
import getLocation from "./getLocation";

export const weather = (function () {
  //window.addEventListener("load", getLocation);
  async function getData(city = "Manila") {
    let response = await fetch(
      `https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=${apiKey}&units=metric`
    );
    let json = await response.json();
    return json;
  }

  async function getCityData(city) {
    let data = await getData(city);
    return data.city;
  }

  async function getWeatherData(city) {
    let data = await getData(city);
    return data.list;
  }

  return {
    getCityData,
    getWeatherData,
  };
})();
