import "./assets/css/app.scss";
import { weather } from "./assets/js/weather";
import { changeTheme } from "./assets/js/changeTheme";
import { createDates } from "./assets/js/createDates";
import { createWeatherCards } from "./assets/js/createWeatherCards";
import { getCurrentWeather } from "./assets/js/getCurrentWeather";
import { getHourlyWeather } from "./assets/js/getHourlyWeather";
import { openSearch } from "./assets/js/openSearch";
import { openTab } from "./assets/js/openTab";
import getLocation from "./assets/js/getLocation";

changeTheme();
createWeatherCards();
createDates();
openTab();
openSearch();

window.addEventListener("load", getLocation);
