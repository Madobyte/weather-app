import { weather } from "./weather";
import { determineIcon } from "./determineIcon";

export const getCurrentWeather = () => {
  const data = Object.values(JSON.parse(localStorage.getItem("weather")));
  const city = JSON.parse(localStorage.getItem("city")).name;
  const main = data[0].weather[0].main;
  const description = data[0].weather[0].description;
  const temp = data[0].main.temp;
  const windSpeed = Math.round(data[0].wind.speed * 3.6 * 100) / 100; //Multiply by 3.6 to convert m/s to kph
  const humidity = data[0].main.humidity;

  const currentLocation = document.getElementById("current-location");
  currentLocation.innerText = city;
  const currentWeather = document.getElementById("current-weather");
  const currentIcon = document.getElementById("current-weather-icon");
  const icon = document.createElement("img");
  icon.id = "current-weather-icon";
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
};
