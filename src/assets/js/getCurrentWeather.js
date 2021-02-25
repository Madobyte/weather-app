import { weather } from "./weather";
import { determineIcon } from "./determineIcon";

export const getCurrentWeather = () => {
  const units = localStorage.getItem("units");
  let windSpeed;
  const data = Object.values(JSON.parse(localStorage.getItem("weather")));
  const city = JSON.parse(localStorage.getItem("city")).name;
  const main = data[0].weather[0].main;
  const description = data[0].weather[0].description;
  const temp = data[0].main.temp;
  if (units === "metric")
    //Multiply by 3.6 to convert m/s to kph
    windSpeed = Math.round(data[0].wind.speed * 3.6 * 100) / 100;
  else windSpeed = data[0].wind.speed;
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
  const currentWindSpeed = document.getElementById("wind-speed");
  if (units === "metric") {
    currentTemperature.innerText = `${temp} °C`;
    currentWindSpeed.innerText = `${windSpeed} kph`;
  } else {
    currentTemperature.innerText = `${temp} °F`;
    currentWindSpeed.innerText = `${windSpeed} mph`;
  }

  const currentHumidity = document.getElementById("humidity");
  currentHumidity.innerText = `${humidity}%`;
};
