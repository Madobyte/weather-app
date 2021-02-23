import { weather } from "./app";
import { determineIcon } from "./determineIcon";

export const currentWeather = weather.getWeatherData().then((res) => {
  const main = res[0].weather[0].main;
  const description = res[0].weather[0].description;
  const temp = res[0].main.temp;
  const windSpeed = Math.round(res[0].wind.speed * 3.6 * 100) / 100; //Multiply by 3.6 to convert m/s to kph
  const humidity = res[0].main.humidity;

  const currentWeather = document.getElementById("current-weather");
  const currentIcon = document.getElementById("current-weather-icon");
  const icon = document.createElement("img");
  const source = determineIcon(main, description);
  icon.src = source;
  currentWeather.insertBefore(icon, currentWeather.firstChild);
  currentIcon.remove();
  const weatherDescription = document.getElementById("weather-description");
  weatherDescription.innerText = description;
  const currentTemperature = document.getElementById("current-temperature");
  currentTemperature.innerText = `${temp} °C`;
  const currentWindSpeed = document.getElementById("wind-speed");
  currentWindSpeed.innerText = `${windSpeed} kph`;
  const currentHumidity = document.getElementById("humidity");
  currentHumidity.innerText = `${humidity}%`;
});
