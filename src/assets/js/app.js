import { apiKey } from "./apiKey";

export const weather = (function () {
  async function getData(city = "Manila") {
    let response = await fetch(
      `https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=${apiKey}&units=metric`
    );
    let json = await response.json();
    return json;
  }

  async function getCityData() {
    let data = await getData();
    return data.city;
  }

  async function getWeatherData() {
    let data = await getData();
    return data.list;
  }

  return {
    getCityData,
    getWeatherData,
  };
})();
