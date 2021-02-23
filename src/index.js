import "./assets/css/app.scss";
import { changeTheme } from "./assets/js/changeTheme";
import { createDates } from "./assets/js/createDates";
import { createWeatherCards } from "./assets/js/createWeatherCards";
import { currentWeather } from "./assets/js/currentWeather";
import { hourlyWeather } from "./assets/js/hourlyWeather";
import { openSearch } from "./assets/js/openSearch";
import { openTab } from "./assets/js/openTab";

changeTheme();
createWeatherCards();
createDates();
openTab();
openSearch();

currentWeather;
hourlyWeather;
